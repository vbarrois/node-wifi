require('dotenv').config();

var wifi = require('../src/wifi');

wifi.init({
    debug : true,
    iface: process.env.WIFI_IFACE
});

if (process.env.PROMISE == "true") {
  console.log('with promise');
  wifi.rescan().then(function (networks) {
    console.log(networks);
  }).catch(function (e) {
    console.log(e);
  })
} else {
  console.log('with callback');
  wifi.rescan(function(err, networks) {
      if (err) {
          console.log(err);
      } else {
          console.log(networks);
      }
  });

}
