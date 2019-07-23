/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const units = ['gal', 'lbs', 'mi', 'l', 'kg', 'km'];
  const runits = ['L', 'kg', 'km', 'gal', 'lbs', 'mi'];
  const sunits = ['gallons', 'bounds', 'miles', 'liters', 'kilograms', 'kilometers'];
  
  this.getNum = function(input) {
    var result;
    const n = input.search(/[a-zA-Z]/);
    if (n==0)
      return 1;
    const s = input.substring(0, n);
    if (s.includes('/')) {
      let a = s.split('/');
      if (a.length!=2)
        return 'invalid number';
      result = a[0]*1/a[1];
    } else {
      result = s*1;
    }
    if (result==NaN || result==Infinity)
      return 'invalid number';
    else
      return result;
  };
  
  this.getUnit = function(input) {
    var result;
    const n = input.search(/[a-zA-Z]/);
    const s = input.substring(n);

    if (units.includes(s.toLowerCase()))
      result = s;
    else
      result = 'invalid unit';
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    let i = units.indexOf(initUnit.toLowerCase());
    return runits[i];
  };

  this.spellOutUnit = function(unit) {
    var result;
    const i = units.indexOf(unit.toLowerCase());
    result = sunits[i];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        return initNum*galToL;
      case 'l':
        return initNum/galToL;
      case 'lbs':
        return initNum*lbsToKg;
      case 'kg':
        return initNum/lbsToKg;
      case 'mi':
        return initNum*miToKm;
      case 'km':
        return initNum/miToKm;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    const outInitUnit = this.spellOutUnit(initUnit);
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
