const express = require("express");
const app = express();
const path = require("path");
const urlRoute = require("./Routes/router");
const staticRouter = require("./Routes/staticRouter");
const { connectMongoDB } = require("./connect");
const URL = require("./Models/url");
const PORT = 6001;

connectMongoDB("mongodb://127.0.0.1:27017/short_url")
    .then(() => { console.log('MongoDB Connected!!') });

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get("/test",async(req,res)=>{
    const allUrls = await URL.find({});
    return res.render('home',{
        urls: allUrls
    });
});

app.use("/url", urlRoute);
app.use("/",staticRouter);

app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    }
    );
    res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => {
    console.log(`Server has started on PORT: ${PORT}`);
})