import Canvas from 'react-native-canvas';
import { Image, ScrollView, StatusBar, View, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import drawCube from '../Components/DrawCube';

export default class HexGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hexSize: 27,
            hexOrigin: { x: 0, y: 28 },
            canvasSize: { canvasWidth: 1, canvasHeight: 1 }
        }

    }

    componentWillMount() {
        console.log('this.props.size: ', this.props.size)
        console.log('this.props.body: ',this.props.body)

        this.setState({
            canvasSize: { canvasWidth: this.props.size[0], canvasHeight: this.props.size[1] },
        })
    }


    componentDidMount() {

        // top black
        drawCube(84.2, 10.3, 'black');
        drawCube(74.9, 10.3, 'black');
        drawCube(79.5, 18.4, 'black');
        // middle black
        drawCube(79.5, 34.5, 'black');
        // blottom black
        drawCube(74.9, 58.8, 'black');
        drawCube(84.2, 58.8, 'black');
        drawCube(79.5, 50.8, 'black');
        // blue base
        drawCube(14, 18.5, '#00FFFF');
        drawCube(9.3, 26.4, 'gold');
        drawCube(14, 34.6, 'blue');
        drawCube(9.3, 42.8, 'gold');
        drawCube(14, 50.7, '#00FFFF');
        // red base
        drawCube(145, 18.5, '#DC143C');
        drawCube(149.6, 26.4, 'gold');
        drawCube(145, 34.6, 'red');
        drawCube(149.6, 42.8, 'gold');
        drawCube(145, 50.7, '#DC143C');

    }

    hexToPixel(h) {
        let hexOrigin = this.state.hexOrigin;
        let x = this.state.hexSize * Math.sqrt(3) * (h.q + h.r / 2) + hexOrigin.x;
        let y = this.state.hexSize * 3 / 2 * h.r + hexOrigin.y;
        return this.Point(x, y)
    }



    render() {
        const width = this.props.size[0]
        const height = this.props.size[1]
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;

        return (
            <View  >
                <View style={{
                    position: 'absolute',
                    top: y,
                    left: x,
                    width: width,
                    height: height,
                    backgroundColor: 'red'
                }}>

                </View>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    canvas: {
        left: 0,
        top: 0,

    },
    hexGrid: {


    },
    canvasCoordinates: {
        left: 0,
        backgroundColor: '#ce0e0e'
    },




    BFS: {
        minWidth: '100%',
        minHeight: '90%',
    }
})


