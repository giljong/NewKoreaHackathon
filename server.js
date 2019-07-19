const express = require('express');
const app = express();
const request = require('request');
const cheerio = require('cheerio');

app.get('/',(req,res) =>{
    request.get({url : "https://www.google.com/destination/map/topsights?tcfs=Ei0KCC9tLzA1YjdxEiHsobDshKDrr7zso7zso7zsnZjsnbjrr7zqs7XtmZTqta0&hl=ko&gl=kr&output=search&dest_mid=/m/05b7q&dest_mid=/m/05b7q&dest_mid=/m/05b7q"},(err,response,body) => {
        const $ = cheerio.load(body);
        const a = $("#ow3 > div.gws-travel-header__main-content.Npuxu > div.PKKBc.AfES6d.GmOjKf.r-iwYwQs7shZ40 > div.w9GWWb > div > ol > li:nth-child(2) > div > img").attr('src')
        console.log(req);

    })
    //let sample = [];
    //sample.push({id : id, url : url, tag : tag, summary : summary});
})
