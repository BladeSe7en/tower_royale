
import React, { Component, useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, PanResponder, Animated,  } from "react-native";
import { Dimensions } from 'react-native';
export default drawCube = (x, y, sizeX, sizeY, sizeZ, color, lineColor, ctx) => {

    console.log('drawing cube')
    //console.log('x: ',x,', y: ',y,', sizeX: ',sizeX,', sizeY: ',sizeY,', sizeZ: ',sizeZ,', ctx:',)
    //console.log('ctx: ',ctx)

        // left face
        ctx.beginPath();
        ctx.strokeStyle = `${color}`
        ctx.lineStyle = `${lineColor}`
        ctx.moveTo(x, y);
        ctx.lineTo(x - sizeX, y - sizeX * 0.6);
        ctx.lineTo(x - sizeX, y - sizeZ - sizeX * 0.6);
        ctx.lineTo(x, y - sizeZ * 1);
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
        ctx.lineTo(x + sizeY, y - sizeY * 0.6);
        ctx.lineTo(x + sizeY, y - sizeZ - sizeY * 0.6);
        ctx.lineTo(x, y - sizeZ * 1);
        ctx.closePath();
        //ctx.fillStyle = "#6f6f49";
        ctx.fillStyle = `${color}`
        //ctx.strokeStyle = "#676744";
        ctx.fillStyle = `${color}`
        ctx.stroke();
        ctx.fill();
    
        // center face
        ctx.beginPath();
        ctx.moveTo(x, y - sizeZ);
        ctx.lineTo(x - sizeX, y - sizeZ - sizeX * 0.6);
        ctx.lineTo(x - sizeX + sizeY, y - sizeZ - (sizeX * 0.6 + sizeY * 0.6));
        ctx.lineTo(x + sizeY, y - sizeZ - sizeY * 0.6);
        ctx.closePath();
       // ctx.fillStyle = "#989865";
       ctx.fillStyle = `${color}`
       // ctx.strokeStyle = "#8e8e5e";
       ctx.fillStyle = `${color}`
        ctx.stroke();
        ctx.fill();
    }
