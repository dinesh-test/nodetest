'use strict';
 
const Router = require('express');
const yahooStockPrices = require('yahoo-stock-prices');

const stockRoute = (app) => {
    const router = new Router();
 
    router
        .get('/get/:id', (req, res) => {
            const sid = req.params.id;
            yahooStockPrices.getCurrentPrice(sid, function(err, price){
			    if(err) {
                    res.send('-1');
                }
                else {
                    res.send(price.toString());
                }
            });
        });
 
    app.use('/stock', router);
};
 
module.exports = stockRoute;
