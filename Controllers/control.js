const URL = require("../Models/url");
 
const {nanoid} = require("nanoid");


async function generateshortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error:( 'url is required')})
    const shortId = nanoid(8);
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],

    });
    const allUrls = await URL.find({});
  
    return res.render('home',{
        id: shortId,
        urls: allUrls
    });
    
}

async function getAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({ totalclicks: result.visitHistory.length , analytics: result.visitHistory} );
}

module.exports = {
    generateshortUrl,
    getAnalytics
}