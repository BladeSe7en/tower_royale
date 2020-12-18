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

    this.state = {
      hexSize: 30,
      hexOrigin: { x: 30, y: 30 }

    }

  }

  componentWillMount(){
    let hexParametres = this.getHexParametres();
    console.log(hexParametres)

    this.setState({
      canvasSize: { canvasWidth: 850, canvasHeight: 400 },
      hexParametres: hexParametres
    })
  }


  componentDidMount(){
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    this.canvasHex.width = canvasWidth;
    this.canvasHex.height = canvasHeight;
    this.drawHexes();
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
     let qLeftSide = Math.round(hexOrigin.x/hexWidth) * 4;
     let qRightSide = Math.round(canvasWidth - hexOrigin.x) / hexWidth * 2;
     let rTopSide = Math.round(hexOrigin.y/(hexHeight/2));
     let rBottomSide = Math.round((canvasHeight - hexOrigin.y)/(hexHeight/2));

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
        if(r%2 !== 0) {
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





  render() {
    return (
      <View className="BFS">
        <Canvas ref={canvasHex => this.canvasHex = canvasHex }></Canvas>
      </View>
    )
  }

}
