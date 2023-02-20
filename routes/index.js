const router = require('express').Router();
const axios = require("axios");



router.get('/matches/:gamer/:oldal', async (req, res) => {
    console.log('hit api server')
    let { gamer, oldal } = req.params;
    console.log('gamer', gamer);
    console.log('oldal', oldal);
    gamer = gamer.replace('#', '%23')
    console.log('gamer', gamer);




    const settings = {
		method: 'get',
		url: `https://my.callofduty.com/api/papi-client/crm/cod/v2/title/mw/platform/${oldal}/gamer/${gamer}/matches/wz/start/0/end/0/details`,
		headers: { 
				'Cookie': 'ACT_SSO_COOKIE=*********; ACT_SSO_COOKIE_EXPIRY=*****; atkn=******; ak_bmsc=*****; bm_sv=*******; API_CSRF_TOKEN=*****'
		},
     };  

      axios.request(settings).then(function (response) {
          console.log(response.data);
          res.json(response.data);
      }).catch(function (error) {
          console.log(error.message);
      });

});





router.get('/search/:player/:site', async (req, res) => {
    console.log('hit api server')
    let { player, site } = req.params;
    console.log('player', player);
    console.log('site', site);
    player = player.replace('?', '?')
    console.log('player', player);


    const config = {
      method: 'get',
      url: `https://my.callofduty.com/api/papi-client/crm/cod/v2/platform/${site}/username/${player}/search`,
      headers: { 
              'X-CSRF-TOKEN': '******', 
              'Cookie': 'ACT_SSO_COOKIE=*********; ACT_SSO_COOKIE_EXPIRY=*****; atkn=******; ak_bmsc=*****; bm_sv=*******; API_CSRF_TOKEN=*****'            },
       };  
      
      axios.request(config).then(function (response) {

          console.log(response.data);

          res.json(response.data);
          
      }).catch(function (error) {
          console.error(error);
      });
});



router.get('/api/:user/:platform', async (req, res) => {
    console.log('hit api server')
    let { user, platform } = req.params;
    console.log('user', user);
    console.log('platform', platform);
    user = user.replace('#', '%23')
    console.log('user', user);




    const options = {
		method: 'get',
		url: `https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/${platform}/gamer/${user}/profile/type/mw`,
		headers: { 
				'Cookie': 'ACT_SSO_COOKIE=*********; ACT_SSO_COOKIE_EXPIRY=*****; atkn=******; ak_bmsc=*****; bm_sv=*******; API_CSRF_TOKEN=*****'
		},
     };  

      axios.request(options).then(function (response) {
          console.log(response.data);
          res.json(response.data);
      }).catch(function (error) {
          console.log(error.message);
      });

});

module.exports = router;
