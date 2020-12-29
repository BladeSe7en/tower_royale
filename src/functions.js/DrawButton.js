import React, { Component, useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, PanResponder, Animated,  } from "react-native";
export default DrawButton = (x, y, width, height, color, ctx) => {

    console.log('drawing button')
    console.log('x: ',x,', y: ',y,', width: ',width,', height: ',height,', ctx:',)
    // Render button 
    ctx.fillStyle = `red`; 
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = 'white';
    ctx.fillText('button', 'white', x - 10, y+20)
}
