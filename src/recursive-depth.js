const CustomError = require("../extensions/custom-error");
var dep=0;
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    throw new CustomError('Not implemented');
    dep++;

    return dep;
   // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};