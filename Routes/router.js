const express = require("express");
 
const router = express.Router();
const {generateshortUrl,getAnalytics} = require("../Controllers/control"); 

router.post('/',generateshortUrl);

router.get('/analytics/:shortId',getAnalytics);

module.exports = router;