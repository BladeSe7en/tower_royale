// import React, { useRef, useEffect, useState, useCallback } from "react";
// import ReactDOM from 'react-dom';
 import Canvas from 'react-native-canvas';
 import { Image, ScrollView, StatusBar, View, StyleSheet, Dimensions } from 'react-native';
// import useDimensions from '../hooks/useDimensions';

// const BFS = () => {

//   const [hexSize, setHexSize] = useState(25);
//   const [hexOrigin, setHexOrigin] = useState({ x: 30, y: 30 });
//   const [ref, canvasWidth, canvasHeight] = useDimensions();
//   const [canvasSize, setCanvasSize] = useState();
//   const [hexParametres, setHexParametres] = useState({
  // "hexHeight": 40,
  // "hexWidth": 34.64101615137754,
  // "horizDist": 34.64101615137754,
  // "vertDist": 30,
//   });

//   const canvasRef = useRef(null)

//   useEffect(() => {
//       let params = getHexParametres();
//       //setCanvasSize({ canvasWidth: canvasWidth, canvasHeight: canvasWidth })
//       setHexParametres(params)
//       drawHexes();
//   }, [canvasRef, canvasWidth, canvasHeight])


//   const getHexParametres = () => {
//     let hexHeight = hexSize * 2;
//     let hexWidth = Math.sqrt(3) / 2 * hexHeight;
//     let vertDist = hexHeight * 3 / 4;
//     let horizDist = hexWidth;
//     return { hexWidth, hexHeight, vertDist, horizDist }
//   }

//   const drawHexes = () => {
//     const { hexWidth, hexHeight, vertDist, horizDist } = hexParametres;
//     const canvas = canvasRef.current

//     let qLeftSide = Math.round(hexOrigin.x / hexWidth) * 4;
//     let qRightSide = Math.round(canvasWidth - hexOrigin.x) / hexWidth * 2;
//     let rTopSide = Math.round(hexOrigin.y / (hexHeight / 2));
//     let rBottomSide = Math.round((canvasHeight - hexOrigin.y) / (hexHeight / 2));

//     console.log('qLeftSide ',qLeftSide)
//     console.log('qRightSide ',qRightSide)
//     console.log('rTopSide ',rTopSide)
//     console.log('rBottomSide ',rBottomSide)
//     console.log('hexOrigin ',hexOrigin)
//     console.log('canvasWidth ',canvasWidth)
//     console.log('canvasHeight ',canvasHeight)
//     console.log('hexWidth ',hexWidth)
//     console.log('hexHeight ',hexHeight)


//     var p = 0;
//     // for (let r = 0; r <= rBottomSide; r++) {
//     //   if (r % 2 == 0 && r !== 0) {
//     //     p++;
//     //   }
//     //   for (let q = -qLeftSide; q <= qRightSide; q++) {
//     //     const { x, y } = hexToPixel(Hex(q - p, r))
//     //     if ((x > hexWidth / 2 && x < canvasWidth - hexWidth / 2) && (y > hexHeight / 2 && y < canvasHeight - hexHeight / 2)) {
//     //       drawHex(canvas, Point(x, y));
//     //       drawHexCoordinates(canvas, Point(x, y), Hex(q - p, r));
//     //     }
//     //   }
//     // }
//     var n = 0;
//     // for (let r = -1; r >= -rTopSide; r--) {
//     //   if (r % 2 !== 0) {
//     //     n++;
//     //   }
//     //   for (let q = -qLeftSide; q <= qRightSide; q++) {
//     //     const { x, y } = hexToPixel(Hex(q + n, r));
//     //     if ((x > hexWidth / 2 && x < canvasWidth - hexWidth / 2) && (y > hexHeight / 2 && y < canvasHeight - hexHeight / 2)) {
//     //       drawHex(canvas, Point(x, y));
//     //       drawHexCoordinates(canvas, Point(x, y), Hex(q + n, r));
//     //     }
//     //   }
//     // }
//   }

//     const Hex = (q, r) => {
//     return { q: q, r: r }
//   }

//     const hexToPixel = (h) => {
//     let x = hexSize * Math.sqrt(3) * (h.q + h.r / 2) + hexOrigin.x;
//     let y = hexSize * 3 / 2 * h.r + hexOrigin.y;
//     return Point(x, y)
//   }

//     const Point = (x, y) => {
//     return { x: x, y: y }
//   }

//     const drawHex = (canvasID, center) => {
//     for (let i = 0; i <= 5; i++) {
//       let start = getHexCornerCoord(center, i);
//       let end = getHexCornerCoord(center, i + 1);

//       drawLine(canvasID, { x: start.x, y: start.y }, { x: end.x, y: end.y });
//     }
//   }

//     const drawLine = (canvasID, start, end) => {
//     console.log('test')
//     const ctx = canvasID.getContext("2d");
//     ctx.beginPath();
//     ctx.moveTo(start.x, start.y);
//     ctx.lineTo(end.x, end.y);
//     ctx.stroke();
//     ctx.closePath();
//   }

//     const getHexCornerCoord = (center, i) => {
//     let angle_deg = 60 * i + 30;
//     let angle_rad = Math.PI / 180 * angle_deg;
//     let x = center.x + hexSize * Math.cos(angle_rad);
//     let y = center.y + hexSize * Math.sin(angle_rad);
//     return Point(x, y);
//   }

//     const drawHexCoordinates = (canvasID, center, h) => {
//     const ctx = canvasID.getContext("2d");
//     ctx.fillText(h.q, center.x - 10, center.y);
//     ctx.fillText(h.r, center.x + 7, center.y);
//   }

//   return (
//     <View className="BFS">
//       <Canvas
//         ref={canvasRef}
//         width={canvasWidth}
//         height={canvasHeight}
//         style={styles.canvas}
//         >
          
//       </Canvas>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   canvas: {
//  flex: 1,
//  justifyContent: "center",
//  alignItems: "center",
//  borderColor: 'black',
//  borderWidth: 1,
//  borderStyle: "solid",
//   minWidth: '100%',
//   minHeight: '100%',
//  backgroundColor: 'white'

// },

// BFS: {
//   minWidth: '100%',
//   minHeight: '100%',
// }
// })


// export default BFS;




// The code below here Works! needs to be refactored to a functional component 
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class BFS extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);

    this.state = {
      hexSize: 27,
      hexOrigin: { x: 0, y: 28 }

    }

  }

  componentWillMount(){
    let hexParametres = this.getHexParametres();
    console.log(hexParametres)

    this.setState({
      canvasSize: { canvasWidth: 790, canvasHeight: 300 },
      hexParametres: hexParametres
    })
  }


  componentDidMount(){
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    this.canvasHex.width = canvasWidth;
    this.canvasHex.height = canvasHeight;
   // this.canvasCoordinates.width = canvasWidth;
   // this.canvasCoordinates.height = canvasHeight;
   // this.getCanvasPosition(this.canvasCoordinates)
   this.drawHexes();
   const canvasID = this.canvasHex

    const ctx = canvasID.getContext("2d");
    //const { hexWidth, hexHeight, vertDist, horizDist } = this.state.hexParametres;
    var sizeX = 4;
    var sizeY = 4;
    var sizeZ = 4.6; 
     
    ctx.scale(5, 5);
   
    // top black
    this.drawCube(84.2, 10.3, sizeX, sizeY, sizeZ, 'black');
    this.drawCube(74.9, 10.3, sizeX, sizeY, sizeZ, 'black');
     this.drawCube(79.5, 18.4, sizeX, sizeY, sizeZ, 'black');
    // middle black
     this.drawCube(79.5, 34.5, sizeX, sizeY, sizeZ, 'black');
     // blottom black
     this.drawCube(74.9, 58.8, sizeX, sizeY, sizeZ, 'black');
     this.drawCube(84.2, 58.8, sizeX, sizeY, sizeZ, 'black');
     this.drawCube(79.5, 50.8, sizeX, sizeY, sizeZ, 'black');
    // blue base
     this.drawCube(14, 18.5, sizeX, sizeY, sizeZ, '#00FFFF');
     this.drawCube(9.3, 26.4, sizeX, sizeY, sizeZ, 'gold');
     this.drawCube(14, 34.6, sizeX, sizeY, 5, 'blue'); 
     this.drawCube(9.3, 42.8, sizeX, sizeY, sizeZ, 'gold');
     this.drawCube(14, 50.7, sizeX, sizeY, sizeZ, '#00FFFF');
    // red base
     this.drawCube(145, 18.5, sizeX, sizeY, sizeZ, '#DC143C');
     this.drawCube(149.6, 26.4, sizeX, sizeY, sizeZ, 'gold');
     this.drawCube(145, 34.6, sizeX, sizeY, sizeZ, 'red');
     this.drawCube(149.6, 42.8, sizeX, sizeY, sizeZ, 'gold');
     this.drawCube(145, 50.7, sizeX, sizeY, sizeZ, '#DC143C');

  }

   draw() {
   
  }
  

   drawCube(x, y, wx, wy, h, color) {

    const canvasID = this.canvasHex

    const ctx = canvasID.getContext("2d");
    // left face
    ctx.beginPath();
    ctx.lineStyle = `${color}`
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.6);
    ctx.lineTo(x - wx, y - h - wx * 0.6);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    //ctx.fillStyle = "#838357"
    ctx.fillStyle = `${color}`
    //ctx.strokeStyle = "#7a7a51";
    ctx.fillStyle = `${color}`
    ctx.lineJoin = "round";
    ctx.stroke();
    ctx.fill();

    // right face
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.6);
    ctx.lineTo(x + wy, y - h - wy * 0.6);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    //ctx.fillStyle = "#6f6f49";
    ctx.fillStyle = `${color}`
    //ctx.strokeStyle = "#676744";
    ctx.fillStyle = `${color}`
    ctx.stroke();
    ctx.fill();

    // center face
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h - wx * 0.6);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.6 + wy * 0.6));
    ctx.lineTo(x + wy, y - h - wy * 0.6);
    ctx.closePath();
   // ctx.fillStyle = "#989865";
   ctx.fillStyle = `${color}`
   // ctx.strokeStyle = "#8e8e5e";
   ctx.fillStyle = `${color}`
    ctx.stroke();
    ctx.fill();
}


  getHexCornerCoord(center, i) {
   let angle_deg = 60 * i  + 30;
   let angle_rad = Math.PI / 180 * angle_deg;
   let x = center.x + this.state.hexSize * Math.cos(angle_rad);
   let y = center.y + this.state.hexSize * Math.sin(angle_rad);
   return this.Point(x, y);
 }


  Point(x, y) {
   return {x: x, y: y}
 }

 drawHex(canvasID, center) {
  for (let i = 0; i <= 5; i++) {
    let start = this.getHexCornerCoord(center, i);
    let end = this.getHexCornerCoord(center, i + 1);

    this.drawLine(canvasID, { x: start.x, y: start.y }, { x: end.x, y: end.y });
  }
}


 drawLine(canvasID, start, end) {
     const ctx = canvasID.getContext("2d");
     ctx.beginPath();
     ctx.moveTo(start.x, start.y);
     ctx.lineTo(end.x, end.y);
     ctx.stroke();
     ctx.closePath();
   }

   drawHexes() {
     const { canvasWidth, canvasHeight } = this.state.canvasSize;
     const { hexWidth, hexHeight, vertDist, horizDist } = this.state.hexParametres;
     const hexOrigin = this.state.hexOrigin;
    //  let qLeftSide = Math.round(hexOrigin.x/hexWidth) * 4;
    //  let qRightSide = Math.round(canvasWidth - hexOrigin.x) / hexWidth * 2;
    //  let rTopSide = Math.round(hexOrigin.y/(hexHeight/2));
    //  let rBottomSide = Math.round((canvasHeight - hexOrigin.y)/(hexHeight/2));

    let qLeftSide = 7
    let qRightSide = 16
    let rTopSide = 7
    let rBottomSide = 7


     // P determines our even rows. if row is even we are incrimenting P which pushes the row over as far as P
     var p = 0;
     for(let r = 0; r <= rBottomSide; r++) {
       if(r % 2 == 0 && r !== 0) {
         p++;
       }
       for(let q = -qLeftSide; q <= qRightSide; q++) {
         const { x, y } = this.hexToPixel(this.Hex(q-p, r))
         if((x > hexWidth/2 && x < canvasWidth - hexWidth/2) && (y > hexHeight/2 && y < canvasHeight - hexHeight/2)) {
           this.drawHex(this.canvasHex, this.Point(x,y));
           this.drawHexCoordinates(this.canvasHex, this.Point(x,y), this.Hex(q-p, r));
         }
       }
     }
     var n = 0;
     for(let r = -1; r >= -rTopSide; r--) {
        if(r%2 == 0) {
          n++;
        }
        for(let q = -qLeftSide; q <= qRightSide; q++) {
          const { x, y } = this.hexToPixel(this.Hex(q+n, r));
          if((x > hexWidth/2 && x < canvasWidth - hexWidth/2) && (y > hexHeight/2 && y < canvasHeight - hexHeight/2)) {
            this.drawHex(this.canvasHex, this.Point(x,y));
            this.drawHexCoordinates(this.canvasHex, this.Point(x,y), this.Hex(q+n, r));
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

Hex(q, r) {
  return { q: q, r: r}
}

drawHexCoordinates(canvasID, center, h) {
  const ctx = canvasID.getContext("2d");
  ctx.fillText(h.q, center.x-10, center.y);
  ctx.fillText(h.r, center.x+7, center.y);
}

getHexParametres() {
  let hexHeight = this.state.hexSize * 2;
  let hexWidth = Math.sqrt(3)/2 * hexHeight;
  let vertDist = hexHeight * 3/4;
  let horizDist = hexWidth;
  return { hexWidth, hexHeight, vertDist, horizDist }
}

 handleMouseMove(e) {
  const {left, right, top, bottom } = this.state.canvasPosition;
  let offsetX = e.pageX - left;
  let offsetY = e.pageY - top

}

  getCanvasPosition(canvasID) {
    let rect = canvasID.getBoundingClientRect();
    this.setState({
      canvasPosition: {
        left: rect.left, 
        right: right.rect, 
        top: rect.top, 
        bottom: rect.bottom
      }
    })
  }


  render() {
    return (
      <View className="BFS">
        <View className='playerStats'></View>
        <Canvas ref={canvasHex => this.canvasHex = canvasHex }></Canvas>
        {/* <Canvas ref={canvasCoordinates => this.canvasCoordinates = canvasCoordinates} onMouseMove = {this.handleMouseMove}></Canvas> */}
        <View className='playerCards'></View>
      </View>
    )
  }

  
}
const styles = StyleSheet.create({
canvas: {
position: 'absolute',
left: 0,

},

playerStats: {
 backgroundColor: 'red',
 minWidth: '100%',
 minHeight: '5%',
 position: 'absolute',
  
  },

  playerCards: {
   backgroundColor: 'blue',
   minWidth: '100%',
   minHeight: '10%',
   position: 'absolute',
    
    },

  canvas: {
    position: 'absolute',
    left: 0,
    
    },

BFS: {
minWidth: '100%',
minHeight: '90%',
}
})


