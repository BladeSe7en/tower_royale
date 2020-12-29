// The code below here Works! needs to be refactored to a functional component 

import React, { Component } from 'react';
import Canvas from 'react-native-canvas';
import { Image, ScrollView, StatusBar, View, StyleSheet, Dimensions } from 'react-native';
import DrawCube from './DrawCube';
import Constants from '../functions.js/Constants'

var sizeX = 22;
var sizeY = 22;
var sizeZ = 28;
let obs = []

export default class HexMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hexSize: 27,
      hexOrigin: { x: 60, y: 30 },
      canvasSize: { canvasWidth: 1, canvasHeight: 1 },
      canvasPosition: ( 0, 0, 0, 0 ),
      obstacles: [],
      currentHex: null
    }

  }


  componentWillMount() {
    let hexParametres = this.getHexParametres();
    this.setState({
      canvasSize: { canvasWidth: Constants.MAX_HEIGHT, canvasHeight: Constants.MAX_WIDTH },
      hexParametres: hexParametres,
      obstacles: [
        "{\"q\":5,\"r\":6}",
        "{\"q\":6,\"r\":6}",
        "{\"q\":6,\"r\":5}",
        "{\"q\":7,\"r\":3}",
        "{\"q\":8,\"r\":1}",
        "{\"q\":8,\"r\":0}",
        "{\"q\":9,\"r\":0}",
        "{\"q\":0,\"r\":1}",
        "{\"q\":-2,\"r\":5}",
        "{\"q\":16,\"r\":1}",
        "{\"q\":14,\"r\":5}",
      ]
    })
  }


  componentDidMount() {
    this.canvasHex.width = Constants.MAX_HEIGHT;
    this.canvasHex.height = Constants.MAX_WIDTH;
    this.towerCanvasRef.width = Constants.MAX_HEIGHT;
    this.towerCanvasRef.height = Constants.MAX_WIDTH;
    this.drawHexes();
    const canvasID = this.canvasHex
    const ctx = canvasID.getContext("2d");
    this.props.canvasIDHandler(canvasID)

    ctx.scale(1, 1);
  }


   shouldComponentUpdate(nextProps, nextState) {
    if(nextState.currentHex !== this.state.currentHex) {
      const { q, r, s, x, y } = nextState.currentHex;
      const { canvasWidth, canvasHeight } = this.state.canvasSize;
      let towerCanvas = this.towerCanvasRef
      const ctx = towerCanvas.getContext("2d");
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.strokeStyle = 'lime'
        ctx.lineStyle = 'lime'
      let currentDistanceLine = nextState.currentDistanceLine;
     for(let i = 0; i <= currentDistanceLine.length - 2; i++) {
        if(i == 0) {
          this.drawHex(this.towerCanvasRef, this.Point(currentDistanceLine[i].x, currentDistanceLine[i].y), 1, "red", "red");
     
        }
        else {
          this.drawHex(this.towerCanvasRef, this.Point(currentDistanceLine[i].x, currentDistanceLine[i].y), 1, "red", "white");
        }
      }
      console.log('nextState: ',nextState)
      console.log('nextState.obstacles: ',nextState.obstacles)
      nextState.obstacles.map((l)=>{
        const { q,r,s,x,y } = JSON.parse(l);
        this.drawHex(this.towerCanvasRef, this.Point(x,y), "lime", "lime");
      })
      //this.drawNeighbors(this.Hex(q, r, s));
      this.drawHex(this.towerCanvasRef, this.Point(x,y), 'lime', "lime", 3);

      return true;
    }
    return false;
  }


  getHexCornerCoord(center, i) {
    let angle_deg = 60 * i  + 30;
    let angle_rad = Math.PI / 180 * angle_deg;
    let x = center.x + this.state.hexSize * Math.cos(angle_rad);
    let y = center.y + this.state.hexSize * Math.sin(angle_rad);
    return this.Point(x, y);
  }


  Point(x, y) {
    return { x: x, y: y }
  }


  drawHex(canvasID, center, lineColor, fillColor, lineWidth) {
    for (let i = 0; i <= 5; i++) {
      let start = this.getHexCornerCoord(center, i);
      let end = this.getHexCornerCoord(center, i + 1);
      if (fillColor !== undefined) {this.fillHex(canvasID, center, fillColor)}
      this.drawLine(canvasID, start, end, lineWidth, lineColor);
    }
  }


  drawLine(canvasID, start, end, lineWidth, lineColor) {
    const ctx = canvasID.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  }


  drawHexes() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    const { hexWidth, hexHeight, vertDist, horizDist } = this.state.hexParametres;
    const hexOrigin = this.state.hexOrigin;

    // this code will draw as many hexes as possible to fill canvas. 
    //  let qLeftSide = Math.round(hexOrigin.x/hexWidth) * 4;
    //  let qRightSide = Math.round(canvasWidth - hexOrigin.x) / hexWidth * 2;
    //  let rTopSide = Math.round(hexOrigin.y/(hexHeight/2));
    //  let rBottomSide = Math.round((canvasHeight - hexOrigin.y)/(hexHeight/2));

    let qLeftSide = 0
    let qRightSide = 16
    let rTopSide = 0
    let rBottomSide = 6

    let even = 0;

    // these are all of the variables for the starting game pieces. The DrawCube function will be replaced with each items cooresponding graphics
    // starting location for player 1 and 2
    const P1_start = [{q: -1, r: 3}]
    const P2_start = [{q: 15, r: 3}]
    // all four gold loot locations. first two points are player one, second two are for player 2
    const gold= [{q: 0, r: 2}, {q: -1, r: 4}, {q: 15, r: 2}, {q: 14, r: 4}]
    // all dead space locations
    const dead_space = [{q: 8, r: 0}, {q: 9, r: 0}, {q: 8, r: 1}, {q: 7, r: 3}, {q: 6, r: 5}, {q: 5, r: 6}, {q: 6, r: 6}]
    // all four starting towers locations. first two points are player one, second two are for player 2
    const P1_starting_towers = [{q: 0, r: 1}, {q: -2, r: 5}]
    const P2_starting_towers = [{q: 16, r: 1}, {q: 14, r: 5}]
    for (let row = 0; row <= rBottomSide; row++) {
      if (row % 2 == 0 && row !== 0) {
        even++;
      }
      for (let col = -qLeftSide; col <= qRightSide; col++) {
        var currentHex = this.Hex(col - even, row)
        const { x, y } = this.hexToPixel(this.Hex(col - even, row))
        if ((x > hexWidth / 2 && x < canvasWidth - hexWidth / 2) && (y > hexHeight / 2 && y < canvasHeight - hexHeight / 2)) {
          if  (col == -0  && row % 2 == 0) {  
            continue 
          }
          // this if statement draws a blue hex at player 1's starting location
           if (P1_start.filter(start => (start.q === currentHex.q && start.r === currentHex.r)).length === 1 ) {
             this.drawHex(this.canvasHex, this.Point(x, y))
            let point = this.Point(x, y)
            DrawCube(point.x,  point.y+26, sizeX, sizeY, sizeZ, 'blue', 'blue', this.canvasHex.getContext('2d'))
            this.canvasHex.getContext('2d').fillStyle = 'black'
            this.drawHexCoordinates(this.canvasHex, this.Point(x, y), this.Hex(col - even, row), 'black', undefined);
          } 
          // this if statement draws a red hex at player 2's starting location
          if (P2_start.filter(start => (start.q === currentHex.q && start.r === currentHex.r)).length === 1 ) {
            this.drawHex(this.canvasHex, this.Point(x, y))
           let point = this.Point(x, y)
           DrawCube(point.x,  point.y+26, sizeX, sizeY, sizeZ, 'red', 'red', this.canvasHex.getContext('2d'))
           this.canvasHex.getContext('2d').fillStyle = 'black'
           this.drawHexCoordinates(this.canvasHex, this.Point(x, y), this.Hex(col - even, row), 'black', undefined);
         } 
          // this if statement draws a gold hex at all of the gold storage starting locations
          if (gold.filter(start => (start.q === currentHex.q && start.r === currentHex.r)).length === 1 ) {
            this.drawHex(this.canvasHex, this.Point(x, y))
           let point = this.Point(x, y)
           DrawCube(point.x,  point.y+26, sizeX, sizeY, sizeZ, 'gold', 'black', this.canvasHex.getContext('2d'))
           this.canvasHex.getContext('2d').fillStyle = 'black'
           this.drawHexCoordinates(this.canvasHex, this.Point(x, y), this.Hex(col - even, row), 'black', undefined);
         } 
          // this if statement draws a black hex at all of the dead space locations
          if (dead_space.filter(start => (start.q === currentHex.q && start.r === currentHex.r)).length === 1 ) {
            this.drawHex(this.canvasHex, this.Point(x, y))
           let point = this.Point(x, y)
           DrawCube(point.x,  point.y+26, sizeX, sizeY, sizeZ, 'black', 'black', this.canvasHex.getContext('2d'))
           this.canvasHex.getContext('2d').fillStyle = 'black'
           this.drawHexCoordinates(this.canvasHex, this.Point(x, y), this.Hex(col - even, row), 'black', undefined);
         } 
          // this if statement draws a light blue hex at all of player 1's starting tower locations
          if (P1_starting_towers.filter(start => (start.q === currentHex.q && start.r === currentHex.r)).length === 1 ) {
            this.drawHex(this.canvasHex, this.Point(x, y))
           let point = this.Point(x, y)
           DrawCube(point.x,  point.y+26, sizeX, sizeY, sizeZ, '#00Ced1', 'black', this.canvasHex.getContext('2d'))
           this.canvasHex.getContext('2d').fillStyle = 'black'
           this.drawHexCoordinates(this.canvasHex, this.Point(x, y), this.Hex(col - even, row), 'black', undefined);
         } 
         // this if statement draws a indian red hex at all of player 1's starting tower locations
         if (P2_starting_towers.filter(start => (start.q === currentHex.q && start.r === currentHex.r)).length === 1 ) {
          this.drawHex(this.canvasHex, this.Point(x, y))
         let point = this.Point(x, y)
         DrawCube(point.x,  point.y+26, sizeX, sizeY, sizeZ, '#CD5C5C', 'black', this.canvasHex.getContext('2d'))
         this.canvasHex.getContext('2d').fillStyle = 'black'
         this.drawHexCoordinates(this.canvasHex, this.Point(x, y), this.Hex(col - even, row), 'black', undefined);
       } 
          else {this.drawHex(this.canvasHex, this.Point(x, y), 'black');
         this.drawHexCoordinates(this.canvasHex, this.Point(x, y), this.Hex(col - even, row), 'black', undefined);
        }
        }
      }
    }
    var n = 0;
    for (let r = -1; r >= -rTopSide; r--) {
      if (r % 2 == 0) {
        n++;
      }
      for (let q = -qLeftSide; q <= qRightSide; q++) {
        const { x, y } = this.hexToPixel(this.Hex(q + n, r));
        if ((x > hexWidth / 2 && x < canvasWidth - hexWidth / 2) && (y > hexHeight / 2 && y < canvasHeight - hexHeight / 2)) {
          this.drawHex(this.canvasHex, this.Point(x, y), 'black');
          this.drawHexCoordinates(this.canvasHex, this.Point(x, y), this.Hex(q + n, r));
        }
      }
    }
  }


  hexToPixel(h){
    let hexOrigin = this.state.hexOrigin;
    let x = this.state.hexSize * Math.sqrt(3) * (h.q + h.r/2) + hexOrigin.x;
    let y = this.state.hexSize * 3/2 * h.r + hexOrigin.y;
    return this.Point(x, y)
  }


Hex(q, r, s) {
 return { q: q, r: r, s: s}
}


drawHexCoordinates(canvasID, center, h) {
  const ctx = canvasID.getContext("2d");
  ctx.strokeStyle = 'black';
  ctx.fillText(h.q, center.x-12, center.y);
  ctx.fillText(h.r, center.x+6, center.y);
  //ctx.fillText(h.s, center.x-12, center.y);
}


getHexParametres() {
  let hexHeight = this.state.hexSize * 2;
  let hexWidth = Math.sqrt(3)/2 * hexHeight;
  let vertDist = hexHeight * 3/4;
  let horizDist = hexWidth;
  return { hexWidth, hexHeight, vertDist, horizDist }
}


pixelToHex(p) {
  let size = this.state.hexSize;
  let origin = this.state.hexOrigin;
  let q = ((p.x - origin.x) * Math.sqrt(3)/3 - (p.y - origin.y) / 3) / size
  let r = (p.y - origin.y) * 2/3 / size
  return this.Hex(q, r, - q - r);
}


  cubeRound(cube) {
    var rx = Math.round(cube.q)
    var ry = Math.round(cube.r)
    var rz = Math.round(cube.s)
  
    var x_diff = Math.abs(rx - cube.q)
    var y_diff = Math.abs(ry - cube.r)
    var z_diff = Math.abs(rz - cube.s)
  
    if(x_diff > y_diff && x_diff > z_diff) {
      rx = -ry-rz
    }
    else if(y_diff > z_diff) {
      ry = -rx-rz
    }
    else{
      rz = -rx-ry
    }
    return this.Hex(rx, ry, rz);
  }
 

  cubeDirections(direction) {
    const cubeDirections = [this.Hex(1, 0, -1), this.Hex(1, -1, 0), this.Hex(0, -1, 1), this.Hex(-1, 0, 1), this.Hex(-1, 1, 0),
    this.Hex(0, 1, -1)];
    return cubeDirections[direction];
  }
  

  cubeAdd(a, b) {
    return this.Hex(a.q + b.q, a.r + b.r, a.s + b.s);
  }
  

  cubeSubstract(hexA, hexB) {
    return this.Hex(hexA.q - hexB.q, hexA.r - hexB.r, hexA.s - hexB.s);
  }
  

  getCubeNeighbor(h, direction) {
    return this.cubeAdd(h, this.cubeDirections(direction));
  }
  

  drawNeighbors(h) {
    for(let i = 0; i <=5; i++) {
      const { q, r, s } = this.getCubeNeighbor(this.Hex(h.q, h.r, h.s), i);
      const { x, y } = this.hexToPixel(this.Hex(q, r, s));
      this.drawHex(this.towerCanvasRef, this.Point(x, y), "red", 2);
    }
  }
  
  cubeDistance(hexA, hexB) {
    const { q, r, s } = this.cubeSubstract(hexA, hexB);
    return (Math.abs(q) + Math.abs(r) + Math.abs(s)) /2;
  }
  

  linearInt(a, b, t) {
    return (a + (b - a) * t)
  }

  
  cubeLinearInt(hexA, hexB, t) {
    return this.Hex(this.linearInt(hexA.q, hexB.q, t), this.linearInt(hexA.r, hexB.r, t), this.linearInt(hexA.s, hexB.s, t));
  }

  
  getDistanceLine(hexA, hexB) {
    let dist = this.cubeDistance(hexA, hexB);
    var arr = [];
    for(let i = 0; i <= dist; i++) {
      let center = this.hexToPixel(this.cubeRound(this.cubeLinearInt(hexA, hexB, 1.0 / dist * i)));
      arr = [].concat(arr, center);
    }
    this.setState({
      currentDistanceLine: arr
    })
  }
  

  fillHex(canvasID, center, fillColor) {
    let c0 = this.getHexCornerCoord(center, 0);
    let c1 = this.getHexCornerCoord(center, 1);
    let c2 = this.getHexCornerCoord(center, 2);
    let c3 = this.getHexCornerCoord(center, 3);
    let c4 = this.getHexCornerCoord(center, 4);
    let c5 = this.getHexCornerCoord(center, 5);
    const ctx = canvasID.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.globalAlpha = 0.1;
    ctx.moveTo(c0.x, c0.y);
    ctx.lineTo(c1.x, c1.y);
    ctx.lineTo(c2.x, c2.y);
    ctx.lineTo(c3.x, c3.y);
    ctx.lineTo(c4.x, c4.y);
    ctx.lineTo(c5.x, c5.y);
    ctx.closePath();
    ctx.fill();
  }
  

  addObstacles() {
    let obstacles = this.state.obstacles;
    if(!obstacles.includes(JSON.stringify(this.state.currentHex))) {
      obstacles = [].concat(obstacles, JSON.stringify(this.state.currentHex));
    }else {
      obstacles.map((l,i) => {
        if(l == JSON.stringify(this.state.currentHex)) {
          obstacles = obstacles.slice(0, i).concat(obstacles.slice(i+1));
        }
      })
    }
    this.setState({
      obstacles: obstacles
    })
  }


  getCanvasPosition(canvasID) {
    let rect = canvasID.getBoundingClientRect();
    this.setState({
      canvasPosition: { left: rect.left, right: rect.right,  top: rect.top, bottom: rect.bottoom }
    })
  }


 updateHexLocation(locationX, locationY) {
  const { canvasWidth, canvasHeight } = Constants
  const { hexWidth, hexHeight, vertDist, horizDist } = this.state.hexParametres;
  const { q, r, s } = this.cubeRound(this.pixelToHex(this.Point(locationX, locationY)));
  const { x, y } = this.hexToPixel(this.Hex(q, r, s));
    this.getDistanceLine(this.Hex(0,0,0), this.Hex(q,r,s));
    var sizeX = 22;
    var sizeY = 22;
    var sizeZ = 28;
    const canvasHex = this.towerCanvasRef
    const ctx = canvasHex.getContext('2d')
    let start = []
    console.log('this.Hex(q, r, s): ',this.Hex(q, r))
    console.log('this.Hex(q, r, s STRINGIFIED): ',JSON.stringify(this.Hex(q, r)))
    obs.push(JSON.stringify(this.Hex(q, r)))
    start.push(this.Hex(q, r))
    let point = this.Point(x, y)
    console.log('obs!: ',obs)

     DrawCube(point.x-2, point.y+29, sizeX, sizeY, sizeZ, 'lightblue', 'black', ctx);
      this.setState({
        currentHex: { q, r, s, x, y } 
      })
  }


  render() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    return (
      <View>
        <Canvas style={styles.canvas} ref={canvasHex => this.canvasHex = canvasHex} ></Canvas>
        <Canvas style={styles.towerCanvas}  width= {Constants.MAX_WIDTH} height= {Constants.MAX_HEIGHT}  ref={towerCanvasRef => this.towerCanvasRef = towerCanvasRef } ></Canvas>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  canvas: {
    left: 0,
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
  //  backgroundColor: 'green',

  },
  towerCanvas: {
    alignSelf: 'center',
    right: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 1500,
    position: 'absolute',
    //backgroundColor:'blue',
   backgroundColor:'transparent',
   
    width: '100%',
    height: '100%',
    
},

  HexMap: {
    minWidth: '100%',
    minHeight: '100%',
  }
})
