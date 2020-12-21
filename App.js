

//import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, Alert, View, Dimensions, PanResponder, Animated, TouchableOpacity } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
// import BFS from './src/Components/BFS';
// import CanvasCoordinates from './src/Components/CanvasCoordinates'
// import Draggable from './src/Components/Draggable'
// import drawCube from './src/Components/DrawCube';
// import TowerCanvas from './src/Components/TowerCanvas';
// import CardFlip from 'react-native-card-flip';
import Constants from './src/functions.js/Constants';
import { GameEngine } from "react-native-game-engine";
import Matter from 'matter-js';
import HexGrid from './src/functions.js/HexGrid';


export async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.gameEngine = null;
        this.entities = this.setupWorld()
    }

    componentWillMount() {
        changeScreenOrientation()
    }


    setupWorld = () => {
        let engine = Matter.Engine.create({ enableSleeping: false });
        let world = engine.world
        // let grid = Matter.Grid.create()
        let box = Matter.Bodies.rectangle( 400, 200, 80, 80)

        Matter.World.add(world, [box])

        return {
            physics: { engine: engine, world: world },
            HexGrid: { body: HexGrid, size: [100, 100], color: 'red', renderer: HexGrid }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <GameEngine
                    ref={ (ref) => { this.gameEngine = ref } }
                    style={styles.gameContainer}
                    entities={this.entities} >
                </GameEngine>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        // alignItems: "center",
        // borderColor: 'black',
        // borderWidth: 1,
        // borderStyle: "solid",
        // width: '100%',
        // height: '100%',
        // backgroundColor: 'green'

    },
});