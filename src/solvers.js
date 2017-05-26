/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // var solution = []; //fixme
  // for(let i = 0; i < n; i++){
  //   solution.push([]);
  //   for(let j = 0; j < n; j++){
  //     if(i === j){
  //       solution[i].push(1);
  //     }else{
  //       solution[i].push(0);
  //     }
  //   }
  // }
  var solution = new Board({n:n});
  solution.rows()[0][0] = 1;
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      solution.rows()[i][j] = 1;
      if(solution.hasAnyRowConflicts() || solution.hasAnyColConflicts()){
        solution.rows()[i][j] = 0;
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};
window.factorialRook = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * window.factorialRook(n - 1);
};
// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = factorialRook(n); 
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

window.findNQueens = function(i,j,n,solution){
  var count = 0;
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      solution.rows()[i][j] = 1;
      count++;
      if(solution.hasAnyQueenConflictsOn(i,j)){
        count--;
        solution.rows()[i][j] = 0;
      }
    }
  }
  console.log(count);
  if(count === n) {
    //console.log(solution.rows());
    return solution.rows(); 
  } else {
    //console.log(solution.rows());
    solution = new Board({n:n});
    console.log(solution); 
  }
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n:n}); 
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(i === 0 && j === 0){
        j = 1;
      }
      solution.rows()[i][j] = 1;
      //console.log(solution.rows());
      findNQueens(i,j,n,solution);
    }
  }
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows() || 0;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
