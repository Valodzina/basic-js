const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {
  if (members===undefined)
  return false;
  if (members===null)
  return false;
  if (typeof members==="number" ||typeof members==="bigint"||typeof members==="boolean")
  return false;

let res= "";
  for(let i=0; i<members.length; i++)
  {
    let j =0;
    if(typeof members[i] === "string")
    {
      while (members[i][j]===" ")
      j++;

      res +=members[i][j];
      
    }


  }
 res = res.toUpperCase();
 res = res.split('').sort().join('');
  return res;
};
