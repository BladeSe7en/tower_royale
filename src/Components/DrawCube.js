
// import React, { Component, useState, useEffect, useRef } from "react";
// import { StyleSheet, View, Text, PanResponder, Animated,  } from "react-native";
// import { Dimensions } from 'react-native';
// export default drawCube = (x, y, wx, wy, h, color, ctx) => {

//     console.log('drawing cube')
//     console.log('x: ',x,', y: ',y,', wx: ',wx,', wy: ',wy,', h: ',h)

//         // left face
//         ctx.beginPath();
//         ctx.lineStyle = `${color}`
//         ctx.moveTo(x, y);
//         ctx.lineTo(x - wx, y - wx * 0.6);
//         ctx.lineTo(x - wx, y - h - wx * 0.6);
//         ctx.lineTo(x, y - h * 1);
//         ctx.closePath();
//         //ctx.fillStyle = "#838357"
//         ctx.fillStyle = `${color}`
//         //ctx.strokeStyle = "#7a7a51";
//         ctx.fillStyle = `${color}`
//         ctx.lineJoin = "round";
//         ctx.stroke();
//         ctx.fill();
    
//         // right face
//         ctx.beginPath();
//         ctx.moveTo(x, y);
//         ctx.lineTo(x + wy, y - wy * 0.6);
//         ctx.lineTo(x + wy, y - h - wy * 0.6);
//         ctx.lineTo(x, y - h * 1);
//         ctx.closePath();
//         //ctx.fillStyle = "#6f6f49";
//         ctx.fillStyle = `${color}`
//         //ctx.strokeStyle = "#676744";
//         ctx.fillStyle = `${color}`
//         ctx.stroke();
//         ctx.fill();
    
//         // center face
//         ctx.beginPath();
//         ctx.moveTo(x, y - h);
//         ctx.lineTo(x - wx, y - h - wx * 0.6);
//         ctx.lineTo(x - wx + wy, y - h - (wx * 0.6 + wy * 0.6));
//         ctx.lineTo(x + wy, y - h - wy * 0.6);
//         ctx.closePath();
//        // ctx.fillStyle = "#989865";
//        ctx.fillStyle = `${color}`
//        // ctx.strokeStyle = "#8e8e5e";
//        ctx.fillStyle = `${color}`
//         ctx.stroke();
//         ctx.fill();
//     }







import React, { Component, useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, PanResponder, Animated,  } from "react-native";
import { Dimensions } from 'react-native';
import Matter from 'matter-js'
export default drawCube = (x, y, color) => {

    console.log('drawing cube')
    let hex = Matter.Bodies.polygon(x, y, 5, 20)
    return hex
    }