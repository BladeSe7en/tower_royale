
// import React, { Component, useState, useEffect, useRef } from "react";
// import { StyleSheet, View, Text, PanResponder, Animated,  } from "react-native";
// import { Dimensions } from 'react-native';


// export default  Draggable = () => {

//   const [ windowHeight, setWindowHeight ] = useState(Dimensions.get('window').height)
//   const [ windowWidth, setWindowWidth ] = useState(Dimensions.get('window').width)
//   const [ showDraggable, setShowDraggable ] = useState(true)
//   const [ dropAreaValues, setDropAreaValues ] = useState(null)
//   const [locationX, setLocationX] = useState(0);
//   const [locationY, setLocationY] = useState(0);
  
  
//   useEffect(() => {
//     console.log(' locationY:::', locationY)
//   }, [locationY])
  
//   console.log('windowHeight * .22: ',windowHeight * .22)
  
//   const pan = useRef(new Animated.ValueXY()).current;
//   const opacity = (useRef(new Animated.ValueXY()).current)

//     const panResponder = useRef(

//      PanResponder.create({
//       onStartShouldSetPanResponder: (e, gesture) => true,
//       onPanResponderGrant: () => {
//         pan.setOffset({
//           x: pan.x._value,
//           y: pan.y._value,
//         });
//       },
//       onPanResponderMove: Animated.event([ null, { dx: pan.x, dy: pan.y } ]),
   
//         onPanResponderRelease: (e, gesture) => {
//           setLocationX(e.nativeEvent.locationX.toFixed(2));
//           setLocationY(e.nativeEvent.locationY.toFixed(2));
//           // pan.setNativeProps({style: {
//           //   transform: [{ translateX }, { translateY }, { rotate }, { scale }],
//           // }});

//           Animated.spring(
//             pan,
//             {toValue:{x:0,y:0}}
//           ).start();



//           if (isDropArea(gesture)) {
//             //After the change in the location
//             // Animated.timing(opacity, {
//             //   toValue: 0,
//             //   duration: 1000
//             // }).start(() => {
//             //     setShowDraggable(false)
//             // })
//           };
//           } 
//       })

//   ).current

//   const isDropArea = (gesture) => {
//     return gesture.moveY < windowHeight * .22;
//   }

//   const renderDraggable = () => {
//     const panStyle = {
//       transform: pan.getTranslateTransform()
//     }
//     if (showDraggable) {
//       return (
//         <View style={{ backgroundColor: 'pink', position: "absolute", width: windowWidth, height: windowHeight }}>
//           <Animated.View
//             {...panResponder.panHandlers}
//             style={[panStyle, styles.circle ]}
//           />
//         </View>
//       );
//     }
//   }
//     return (
//       <View style={{ width: "20%", alignItems: "center" }}>
//         {renderDraggable()}
//       </View>
//     );

// }

// let CIRCLE_RADIUS = 30;

// const styles = StyleSheet.create({
// mainContainer: {
//     flex: 1
//   },
//   ballContainer: {
//     height:100
//   },
//   circle: {
//     backgroundColor: "skyblue",
//     height: 65,
//     width: 45,
//     marginLeft: 32,
//     borderRadius: 5,
//   },
//   row: {
//     flexDirection: "row"
//   },  
//   dropZone: {
//     height: 100,
//     backgroundColor: "#00334d"
//   },
//   text: {
//     marginTop: 25,
//     marginLeft: 5,
//     marginRight: 5,
//     textAlign: "center",
//     color: "#fff",
//     fontSize: 25,
//     fontWeight: "bold"
//   }




// });


import React, { Component } from 'react';
import DrawCube from './DrawCube'
import {
  StyleSheet,
  Text,
  View,
  Image,
  PanResponder,
  Animated,
  Alert,
  TouchableHighlightBase,
} from 'react-native';

var  cube
export default class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
      toggle: 'draggable',
    };
  }
  componentWillMount() {
    var sizeX = 4;
    var sizeY = 4;
    var sizeZ = 4.6;
  
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.setState({toggle: 'hide'})
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
        cube = drawCube(0, 0, sizeX, sizeY, sizeZ, 'purple', this.props.towerCanvasID)
        
        Animated.spring(
          this.state.scale,
          { toValue: 1.1, friction: 3 }
        ).start();
      },

      onPanResponderMove:  Animated.event([null, {dx: this.state.pan.x, dy: this.state.pan.y}], {useNativeDriver: false} ),

     



      onPanResponderRelease: (e, gesture) => {
        this.setState({toggle: 'hide'})
        this.state.pan.flattenOffset();
        Animated.spring(
            this.state.pan,
            {toValue:{x:0,y:0}},
          ).start()

       // let dropzone = this.inDropZone(gesture);

        // if (dropzone) {
        //   console.log(dropzone.y-this.layout.y, this.state.pan.y._value, dropzone.y);
        //   Animated.spring(
        //     this.state.pan,
        //     {toValue:{
        //       x: 0,
        //       y: dropzone.y-this.layout.y,
        //     }}
        //   ).start();
        // } else {
        //  Animated.spring(
        //    this.state.pan,
        //    {toValue:{x:0,y:0}}
        //  ).start();
        // }
      },
    });
  }

  // inDropZone(gesture) {
  //   var isDropZone = false;
  //   for (dropzone of this.props.dropZoneValues) {
  //     if (gesture.moveY > dropzone.y && gesture.moveY < dropzone.y + dropzone.height && gesture.moveX > dropzone.x && gesture.moveX < dropzone.x + dropzone.width) {
  //       isDropZone = dropzone;
  //     }
  //   }
  //   return isDropZone;
  // }

  renderDraggable(){
    return (
      <View style={styles.draggable}>
            
        </View>
    );
  }
  
  render() {
    let { pan, scale } = this.state;
    let [translateX, translateY] = [pan.x, pan.y];
    let rotate = '0deg';
    let imageStyle = {transform: [{translateX}, {translateY}, {rotate}, {scale}]};
    
   return (
     <View>
        <Animated.View
          style={[imageStyle, styles.cube]}
          {...this._panResponder.panHandlers}>
            {cube}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropzone: {
    zIndex: 0,
    margin: 5,
    width: 106,
    height: 106,
    borderColor: 'green',
    borderWidth: 3
  },
  draggable: {
    height: 65,
    width: 45,
    backgroundColor: 'pink',
   
    borderRadius: 5,
  },
  hide: {
    display: 'none'
  },
  image: {
    width: 75,
    height: 75
  },
  cube: {
    height: 65,
    width: 45,
    backgroundColor: 'purple',
   
    borderRadius: 5,
  },
});
