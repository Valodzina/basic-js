const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
   if (sampleActivity===undefined)
  return false;
  if (sampleActivity===null)
  return false;
  if(Number(sampleActivity)!==true)
  return false;
  let statistic = Number(sampleActivity) ;

 let res = Math.log(MODERN_ACTIVITY/statistic)*HALF_LIFE_PERIOD/Math.log(2);

 return Math.ceil(res);


};
