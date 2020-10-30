const CustomError = require("../extensions/custom-error");

function isInteger(num) {
  return (num ^ 0) === num;
}
function splt(str) {
  
  let arr= new Array();
  arr= str.split(" )~~");
  arr.pop();

for(let i=0; i<arr.length; i++)
arr[i]= arr[i].slice(2, arr[i].length)
  return arr;
}


const chainMaker = {
  s :"",
  getLength() {
    return splt(this.s).length;

  },
  addLink(value) {
    
    this.s+="( " +value+ " )~~";
    return this;

  },
  removeLink(position) {
    if (typeof position!=="number" || isInteger(position)!==true)
    {
      this.s="";
    throw new Error('THROWN'); }

    let arr= splt(this.s);

    if (arr.length<position)
    {
      this.s="";
    throw new Error('THROWN'); }

    arr.splice(position-1,1);
    this.s="";
    for(let i=0; i<arr.length; i++)
    {
      this.addLink(arr[i]);
    }

////////////////////////
    return this;

  },
  reverseChain() {

      let arr= splt(this.s);
      this.s="";
     for(let i=arr.length-1; i>=0; i--)
     {
       this.addLink(arr[i]);
     }

    return this;

  },
  finishChain() {
 this.s=this.s.slice(0, this.s.length -2);
 let str= this.s;
 this.s="";
    return str;

  }
};

module.exports = chainMaker;
