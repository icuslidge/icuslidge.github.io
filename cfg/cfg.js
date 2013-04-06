var cfg = {
  address: process.env.ADDRESS
, port: parseInt(process.env.PORT, 10) || 8013
};

if (!cfg.address) {
  if (process.env.NODE_ENV === 'production') {
    cfg.address = 'http://iancuslidge.com';
  } else {
    cfg.address = 'http://localhost:' + cfg.port;
  }
}
module.exports = cfg;
