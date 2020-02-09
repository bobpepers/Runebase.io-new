import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import compression from 'compression';
const Pusher = require('pusher');
import router from './router';
import { dbConfig, pusherConfig } from './config';
import ChainInfo from './models/chainInfo';
// Pusher init
const pusher = new Pusher({
  appId      : pusherConfig.app_id,
  key        : pusherConfig.key,
  secret     : pusherConfig.secret,
  cluster    : pusherConfig.cluster,
  encrypted  : pusherConfig.encrypted,
});
const channel = 'chainInfos';

const app = express();

mongoose.connect(dbConfig.db, { useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true });
mongoose.set('debug', true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.on('open', function () {
    db.db.listCollections().toArray(function (err, collectionNames) {
      if (err) {
        console.log(err);
        return;
      }
        console.log(collectionNames);
        const foundChainInfo = collectionNames.some(el => el.name === 'ChainInfo');
        if (!foundChainInfo) {
        	db.createCollection("ChainInfo");
        }
    });
});


app.use(compression());
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const port = process.env.PORT || 3334;
const server = http.createServer(app);

db.once('open', () => {
	server.listen(port);
	console.log('server listening on:', port);
	const collectionChainInfo = db.collection('ChainInfo');
	//console.log(collectionChainInfo);
  	const changeStream = collectionChainInfo.watch();
  	changeStream.on('change', (change) => {
  		console.log(change.operationType);
  		if(change.operationType === 'update') {
  			//console.log(change);
      		const chainInfo = change.updateDescription.updatedFields;
      		console.log(chainInfo);
		    pusher.trigger(
			        channel,
			        'inserted',
			    {
			        _id: chainInfo._id,
			        custom_id: chainInfo.custom_id,
			        blockNumber: chainInfo.blockNumber,
			        moneySupply: chainInfo.moneySupply,
			        price: chainInfo.price,
			    }
		    );
		}
    //console.log(change);
  	});
});

