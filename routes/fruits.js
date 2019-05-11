const express = require('express');

const route = express.Router();

const sql = require('../utilities/mysql');



route.get('/', (req, res) => {
    sql.query("Select * from fruits", (err, data) => {
        if (err) {
            console.log(err);
            res.send("Error");
        }
        else {
            console.log(data);
            res.render('fruits', { data: data });
        }
    });

});

route.post('/', (req, res) => {
    console.log(req.body);
    const name = req.body.fruit;
    const stock = req.body.stock;
    const newFruit = {
        name,
        stock
    }
    sql.query(
        "insert into fruits set ?",
        newFruit,
        (err, data) => {
            if (err) {
                console.log(err);
                res.send("There is an error");
            }
            else {
                console.log(data);
                res.redirect('/fruits');
            }
        })
})

module.exports = route;