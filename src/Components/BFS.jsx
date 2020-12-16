import React, { useRef, useEffect, useState, useCallback } from "react";
import { Image, ScrollView, StatusBar, View, StyleSheet, Dimensions } from 'react-native';
import Canvas, { Image as CanvasImage, Path2D, ImageData } from 'react-native-canvas';
import useDimensions from '../hooks/useDimensions';

export default BFS = () => {

  const [hexSize, setHexSize] = useState(20)
  const [hexOrigin, sethexOrigin] = useState({ x: 10, y: 10 })
  const {ref, width, height} = useDimensions()
  const [hexParametres, setHexParametres] = useState({
    'hexHeight': 40,
    'hexWidth': 34.64101615137754,
    'horizDist': 34.64101615137754,
    'vertDist': 30,
  })

  useEffect(() => {
    let hexParametres = getHexParametres();
    setHexParametres(hexParametres)
  }, [])
  
  const _onGLContextCreate = (gl) => {
    var ctx = new Expo2DContext(gl);
    drawHexes(ctx);

  }

  const getHexCornerCoord = (center, i) => {
    let angle_deg = 60 * i + 30;
    let angle_rad = Math.PI / 180 * angle_deg;
    let x = center.x + hexSize * Math.cos(angle_rad);
    let y = center.y + hexSize * Math.sin(angle_rad);
    return Point(x, y);
  }

  const Point = (x, y) => {
    return { x: x, y: y }
  }

  const drawHex = (ctx, center) => {
    for (let i = 0; i <= 5; i++) {
      let start = getHexCornerCoord(center, i);
      let end = getHexCornerCoord(center, i + 1);

      drawLine(ctx, { x: start.x, y: start.y }, { x: end.x, y: end.y });
    }
  }


  const drawLine = (ctx, start, end) => {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  }

  const drawHexes = (ctx) => {
    const { hexWidth, hexHeight, vertDist, horizDist } = hexParametres;
    //  let qLeftSide = Math.round(hexOrigin.x/hexWidth) * 4;
    //  let qRightSide = Math.round(width - hexOrigin.x) / hexWidth * 2;
    //  let rTopSide = Math.round(hexOrigin.y/(hexHeight/2));
    //  let rBottomSide = Math.round((height - hexOrigin.y)/(hexHeight/2));

    let qLeftSide = 1
    let qRightSide = 20
    let rTopSide = 20
    let rBottomSide = 20


    var p = 0;
    for (let row = 0; row <= rBottomSide; row++) {
      if (row % 2 == 0 && row !== 0) {
        p++;
      }
      for (let q = -qLeftSide; q <= qRightSide; q++) {
        const { x, y } = hexToPixel(Hex(q - p, row))
        if ((x > hexWidth / 2 && x < width - hexWidth / 2) && (y > hexHeight / 2 && y < height - hexHeight / 2)) {
          drawHex(ctx, Point(x, y));
          drawHexCoordinates(ctx, Point(x, y), Hex(q - p, row));
        }
      }
    }
    var n = 0;
    for (let r = -1; r >= -rTopSide; r--) {
      if (r % 2 !== 0) {
        n++;
      }
      for (let q = -qLeftSide; q <= qRightSide; q++) {
        const { x, y } = hexToPixel(Hex(q + n, r));
        if ((x > hexWidth / 2 && x < width - hexWidth / 2) && (y > hexHeight / 2 && y < height - hexHeight / 2)) {
          drawHex(ctx, Point(x, y));
          drawHexCoordinates(ctx, Point(x, y), Hex(q + n, r));
        }
      }
    }
  }

  const hexToPixel = (h) => {
    let x = hexSize * Math.sqrt(3) * (h.q + h.r / 2) + hexOrigin.x;
    let y = hexSize * 3 / 2 * h.r + hexOrigin.y;
    return Point(x, y)
  }

  const Hex = (q, r) => {
    return { q: q, r: r }
  }

  //this adds the coordinate numbers to each hex
  const drawHexCoordinates = (ctx, center, h) => {
    ctx.fillText(h.q, center.x - 10, center.y);
    ctx.fillText(h.r, center.x + 7, center.y);
  }

  const getHexParametres = () => {
    let hexHeight = hexSize * 2;
    let hexWidth = Math.sqrt(3) / 2 * hexHeight;
    let vertDist = hexHeight * 3 / 4;
    let horizDist = hexWidth;
    return { hexWidth, hexHeight, vertDist, horizDist }
  }



  

  return (
    <GLView
      style={{ flex: 1 }}
      onContextCreate={_onGLContextCreate()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: "solid",
    width: '100%',
    //backgroundColor: 'teal'

  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: "solid",
    width: '100%',
    height: '100%',
    // backgroundColor: 'red'

  }
})








