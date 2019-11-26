import ChainInfo from '../models/chainInfo';

/**
 * Fetch user firstnames
 */
export const fetchChainInfo = (req, res, next) => {
  ChainInfo.find({}, (err, users) => {
    if (err) { return next(err); }
    console.log(users);
    res.json(users);
  });
};
