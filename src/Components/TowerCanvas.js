

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CanvasCoordinates from './CanvasCoordinates';
import DrawCube from './DrawCube';
import Canvas from 'react-native-canvas';
import { Image, ScrollView, StatusBar, View, StyleSheet, Dimensions } from 'react-native';




export default class TowerCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hexSize: 27,
      hexOrigin: { x: 0, y: 28 },
      canvasSize: { canvasWidth: 700, canvasHeight: 400 }
    }

  }

  componentDidMount() {
    const canvasID = this.towerCanvasRef
    const ctx = canvasID.getContext("2d");
    ctx.scale(5, 5);
   this.props.towerCanvasIDHandler(ctx)

  }

 



  render() {

    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    return (
      <View style={styles.towerContainer}>
        <Canvas style={styles.towerCanvas}  ref={towerCanvasRef => this.towerCanvasRef = towerCanvasRef } ></Canvas>
      </View>
    )
  }

  
}
const styles = StyleSheet.create({
towerCanvas: {
    alignSelf: 'center',
    right: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: -15,
   
    width: '100%',
    height: '100%',
    
},

    towerContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -15,
    }

})


