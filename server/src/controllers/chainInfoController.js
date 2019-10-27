import ChainInfo from '../models/chainInfo';

/**
 * Fetch user firstnames
 */
export const fetchChainInfo = (req, res, next) => {
	console.log('32323232');
  ChainInfo.find({}, (err, users) => {
    if (err) { return next(err); }
    console.log(users);
    res.json(users);
  });
};
