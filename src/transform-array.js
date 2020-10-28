const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if(arr==undefined||arr===null||Object.prototype.toString.call( arr ) !== '[object Array]')
  throw new Error('THROWN');

  let a= new Array();
  for(let i=0; i<arr.length; i++)
  {
    if(arr[i]==="--discard-next")
    i++
    else if(arr[i]==="--discard-prev"&& a.length!==0&&arr[i-2]!=="--discard-next")
    a.pop();
    else if(arr[i]==="--double-next" && i!==arr.length-1)
    a.push(arr[i+1]);
    else if(arr[i]==="--double-prev" && a.length!==0 && arr[i-2]!=="--discard-next")
    a.push(arr[i-1]);
    else if(arr[i]!=="--discard-prev"&&arr[i]!=="--double-next" &&arr[i]!=="--double-prev"&&arr[i]!=="--discard-next") a.push(arr[i]);

  }
  return a;
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
