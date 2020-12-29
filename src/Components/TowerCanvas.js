import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CanvasCoordinates from './CanvasCoordinates';
import DrawCube from './DrawCube';
import Canvas from 'react-native-canvas';
import { Image, ScrollView, StatusBar, View, StyleSheet, Dimensions } from 'react-native';
import Constants from '../functions.js/Constants';


export default class TowerCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hexSize: 27,
      hexOrigin: { x: 0, y: 28 },
      canvasSize: { canvasWidth: Constants.MAX_WIDTH, canvasHeight: Constants.MAX_HEIGHT }
    }
  }


  componentDidMount() {
    const canvasID = this.towerCanvasRef
    this.towerCanvasRef.width = Constants.MAX_WIDTH
    this.towerCanvasRef.height = Constants.MAX_HEIGHT
    const ctx = canvasID.getContext("2d");
   this.props.towerCanvasIDHandler(ctx)
  }


  render() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    return (
      <View style={styles.towerContainer}>
        <Canvas style={styles.towerCanvas}  width= {Constants.MAX_WIDTH} height= {Constants.MAX_HEIGHT}  ref={towerCanvasRef => this.towerCanvasRef = towerCanvasRef } ></Canvas>
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
    zIndex: -1500,
    //backgroundColor:'green',
   backgroundColor:'transparent',
   
    width: '100%',
    height: '100%',
    
},

    towerContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1400,
    }

})


