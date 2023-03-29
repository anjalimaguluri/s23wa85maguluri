var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

    var m1=(Math.random())

    var m2=(Math.random())

    var m3=(Math.random())

    var cosFunction=Math.cos()

    var sinFunction=Math.asin(m2)

    var sinhFunction=Math.asinh(m3)



    res.render('computation',

    {

        title:'Naganjali Computes Functions',

        m1:m1,

        m2:m2,

        m3:m3,

        n:cosFunction,
        
        o:sinFunction,

        p:sinhFunction


    });

     

});

module.exports=router;