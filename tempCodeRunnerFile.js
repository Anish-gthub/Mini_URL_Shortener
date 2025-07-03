const allUrls = await URL.find({});
    return res.render('home',{
        urls: allUrls
    });