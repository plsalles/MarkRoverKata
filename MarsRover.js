// Rover Object Goes Here
// ======================

// ============= command turnLeft =============
// ============================================
function turnLeft(moveRover,order){
  
  switch (moveRover.direction){
    case "N": 
      moveRover.direction = "W";
      trackPath(moveRover,order);
      break;
    case "W": 
      moveRover.direction = "S";
      trackPath(moveRover,order);
      break;
    case "S": 
      moveRover.direction = "E";
      trackPath(moveRover,order);
      break;
    case "E": 
      moveRover.direction = "N";
      trackPath(moveRover,order);
      break;
  }
  console.log(moveRover);
}

// ============= command turnRight =============
// =============================================
function turnRight(moveRover,order){
    switch (moveRover.direction){
    case "N": 
      moveRover.direction = "E";
      trackPath(moveRover,order);
        break;
    case "E": 
      moveRover.direction = "S";
      trackPath(moveRover,order);
      break;
    case "S": 
      moveRover.direction = "W";
      trackPath(moveRover,order);
      break;
    case "W": 
      moveRover.direction = "N";
      trackPath(moveRover,order);
      break;
  }
  console.log(moveRover);
}
// ============= command moveBack =============
// ===============================================
function moveBack(moveRover,checkRover,obstacles,order){
  //console.log(order);
  let futurePosition =[];
  
  if (moveRover.direction==="N"){
    futurePosition=[`${moveRover.positionX},${moveRover.positionY+1}`];
    if (moveRover.direction==="N" && moveRover.positionY===0){
      console.log("You are trying to move rover out of the Grid");
    } else {if (checkColision(futurePosition,checkRover,obstacles)){
            console.log("Colision was detected");
        } else {moveRover.positionY +=1;
           trackPath(moveRover,order);
           console.log(moveRover);}}
  } else if (moveRover.direction==="W"){
    futurePosition=[`${moveRover.positionX+1},${moveRover.positionY}`];
    //console.log(futurePosition);
    if (moveRover.direction==="W" && moveRover.positionX===0){
      console.log("You are trying to move rover out of the Grid");
    } else {if (checkColision(futurePosition,checkRover,obstacles)){
            console.log("Colision was detected");
        } else {moveRover.positionX +=1;
           trackPath(moveRover,order);
           console.log(moveRover);}}
  } else if (moveRover.direction==="E"){
    futurePosition=[`${moveRover.positionX-1},${moveRover.positionY}`];
    if (moveRover.direction==="E" && moveRover.positionX===9){
      console.log("You are trying to move rover out of the Grid");
    } else {if (checkColision(futurePosition,checkRover,obstacles)){
            console.log("Colision was detected");
        } else {moveRover.positionX-=1;
           trackPath(moveRover,order);
           console.log(moveRover);}}
  } else {futurePosition=[`${moveRover.positionX},${moveRover.positionY-1}`];
          //console.log(futurePosition);
    if (moveRover.direction==="S" && moveRover.positionX===9){
      console.log("You are trying to move rover out of the Grid");
    } else {if(checkColision(futurePosition,checkRover,obstacles)){
            console.log("Colision was detected");
        } else {moveRover.positionY -=1;
           trackPath(moveRover,order);
           console.log(moveRover);}}
  }
  
}


// ============= command moveForward =============
// ===============================================
function moveForward(moveRover,checkRover,obstacles,order){
  //console.log(order);
  let futurePosition =[];
  
  if (moveRover.direction==="N"){
    futurePosition=[`${moveRover.positionX},${moveRover.positionY-1}`];
    if (moveRover.direction==="N" && moveRover.positionY===0){
      console.log("You are trying to move rover out of the Grid");
    } else {if (checkColision(futurePosition,checkRover,obstacles)){
            console.log("Colision was detected");
        } else {moveRover.positionY -=1;
           trackPath(moveRover,order);
           console.log(moveRover);}}
  } else if (moveRover.direction==="W"){
    futurePosition=[`${moveRover.positionX-1},${moveRover.positionY}`];
    //console.log(futurePosition);
    if (moveRover.direction==="W" && moveRover.positionX===0){
      console.log("You are trying to move rover out of the Grid");
    } else {if (checkColision(futurePosition,checkRover,obstacles)){
            console.log("Colision was detected");
        } else {moveRover.positionX -=1;
           trackPath(moveRover,order);
           console.log(moveRover);}}
  } else if (moveRover.direction==="E"){
    futurePosition=[`${moveRover.positionX+1},${moveRover.positionY}`];
    if (moveRover.direction==="E" && moveRover.positionX===9){
      console.log("You are trying to move rover out of the Grid");
    } else {if (checkColision(futurePosition,checkRover,obstacles)){
            console.log("Colision was detected");
        } else {moveRover.positionX +=1;
           trackPath(moveRover,order);
           console.log(moveRover);}}
  } else {futurePosition=[`${moveRover.positionX},${moveRover.positionY+1}`];
          //console.log(futurePosition);
    if (moveRover.direction==="S" && moveRover.positionX===9){
      console.log("You are trying to move rover out of the Grid");
    } else {if(checkColision(futurePosition,checkRover,obstacles)){
            console.log("Colision was detected");
        } else {moveRover.positionY +=1;
           trackPath(moveRover,order);
           console.log(moveRover);}}
  }
  
}

// ============= command function =============  
// ============================================
function command(moveRover,checkRover,orders,obstacles){
    //console.log("function command was called");
    for (let i = 0; i<orders.length;i++){
      let order = orders[i];
      switch (order){
        case "f":
          moveForward(moveRover,checkRover,obstacles,order);
          break;
        case "b":
          moveBack(moveRover,checkRover,obstacles,order);
          break;
        case "l":
          turnLeft(moveRover,order);
          //console.log(order);
          break;
        case "r":
          turnRight(moveRover,order);
          //console.log(order);
          break;       
      }
    }
  }

// ============= trackPath function =================================  
// this function tracksthe path and keep only the latest 10 positions
// ==================================================================  
function trackPath(moveRover,order){
 moveRover.trackLog.unshift(`${moveRover.positionX},${moveRover.positionY},${moveRover.direction},${order}`);
 //console.log(moveRover.trackLog.length)
 if (moveRover.trackLog.length>5){
   moveRover.trackLog.pop();
 }
}
//   ============= checkObstacules function ===================== 
//   This fucntion checks if there is an obstacule in front rover
//   ============================================================

function checkColision(futurePosition,checkRover,obstacles){
  //console.log("function checkObstacles was called");
  //console.log(futurePosition);
  let rover2Position = [`${checkRover.positionX},${checkRover.positionY}`];
  // console.log(type);
  //console.log(rover2Position);
  //console.log(checkRover);
  
  
  if(futurePosition[0]===rover2Position[0]){
    console.log("the Rover are going to collide into the other rover in the grid");
    return true;
  }
  for(let i = 0; i<obstacles.length;i++){
    if ((futurePosition==obstacles[i])){
      return true;
    }
   }
}

  //=========================================================================
  //     Rover1 and Rover2 initial positions, obstacles and command function
  //=========================================================================

let rover1 = {
  positionX : 5,
  positionY : 5,
  direction : "S",
  trackLog : []
};

let rover2 = {
  positionX : 7,
  positionY : 5,
  direction : "N",
  trackLog : []
};

let obstacles =["5,4","3,7","9,1"];


//turnLeft(rover);
//turnRight(rover); 


command(rover1,rover2,"rffbbbfgb",obstacles);


// ======================


