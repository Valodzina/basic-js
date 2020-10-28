const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {

  if (date === undefined)
  return  'Unable to determine the time of year!';

   if ( typeof date !=Date)
   throw new Error('THROWN');
   //return 0;

   let day = date.getDate();
   let month =date.getMonth();
   if (month>=3&&month<6)
   return "spring";
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
