/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      if (initUnit == 'invalid unit' && initNum == 'invalid number')
        return res.send('invalid number and unit');
      if (initNum == 'invalid number')
        return res.send(initNum);
      if (initUnit == 'invalid unit')
        return res.send(initUnit);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      res.send({initNum, initUnit, returnNum, returnUnit, 'string': toString});
    });
    
};
