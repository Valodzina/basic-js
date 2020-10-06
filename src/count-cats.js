const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let number =0;
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
 if (matrix===undefined)
 return number;
  for (var i = 0; i < matrix.length; i++){

        for (var j = 0; j <  matrix[i].length; j++){

           if(matrix[i][j]==="^^") 
          {
             number++;
          }
           

    }
  }
    
  return number;
};
