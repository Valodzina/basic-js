const CustomError = require("../extensions/custom-error");


function ff(m, d) {
let nd=30;
if (m===1||m===3||m===5||m===7||m===8||m===10||m===12)
nd=31;
else if (m===2) nd=28;

if(d>nd)
ff(m+1, d-nd);

  return m;
}
module.exports = function getSeason( date ) {

  if (date === undefined)
  return  'Unable to determine the time of year!';

   if ( typeof date !="object" ||date===null)
   return  'Unable to determine the time of year!';

   if(Object.prototype.toString.call(date) !== '[object Date]')
   throw new Error('THROWN');
 
 

   let day = date.getDate();
   let month =date.getMonth();
   let rm= ff(month, day);
  
   
   if (rm>=2&&rm<5)
   return "spring";
   if (rm>=5&&rm<8)
   return "summer";
   if (rm>=8&&rm<11)
   return "autumn";

   return "winter";


};
