//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, Alert, View, Dimensions, PanResponder, Animated, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import HexMap from './src/Components/HexMap';
import Draggable from './src/Components/Draggable'
import drawCube from './src/Components/DrawCube';
import TowerCanvas from './src/Components/TowerCanvas';
import FlipCard from 'react-native-flip-card'


export default function App() {

  const window = Dimensions.get("window");
  const screen = Dimensions.get("screen");
  const [dimensions, setDimensions] = useState({ window, screen });
  const [canvasID, setCanvasID] = useState()
  const [towerCanvasID, setTowerCanvasID] = useState()
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);

  //panResponder initialization
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture:
      (event, gestureState) => true,
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture:
      (event, gestureState) => false,
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      //After the change in the location
      setLocationX(event.nativeEvent.locationX.toFixed(2));
      setLocationY(event.nativeEvent.locationY.toFixed(2));
    },
  });

  var sizeX = 22;
  var sizeY = 22;
  var sizeZ = 28;

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  }

  useEffect(() => {
    changeScreenOrientation()
  }, []);

  let hexMapRef = useRef()
  useEffect(() => {
    //console.log('locationX: ',locationX)
    //console.log('locationY: ',locationY)
    hexMapRef.current.updateHexLocation(locationX, locationY)
  }, [locationX, locationY]);

  const canvasIDHandler = (ID) => {
    setCanvasID(ID)
  }

  const towerCanvasIDHandler = (ID) => {
    setTowerCanvasID(ID)
  }

//   useEffect(() => {

//   }, [canvasID, towerCanvasID]);


  return (
    <View style={styles.container}
      {...panResponder.panHandlers}>
      <View style={styles.playerStats}></View>
      <HexMap
        canvasIDHandler={canvasIDHandler}
        locationX={locationX}
        locationY={locationY}
        ref={hexMapRef}>
      </HexMap >

      <View style={styles.playerCards}>
        <FlipCard
          style={styles.cards}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
          onFlipped={(isFlipped) => { console.log('isFlipped', isFlipped) }}
        >
          {/* Face Side Card 1*/}
          <View style={styles.cardFront}
            onStartShouldSetResponder={(e) => {
              console.log('e.nativeEvent: ', e.nativeEvent)
              drawCube(e.nativeEvent.pageX, e.nativeEvent.pageY - 10, sizeX, sizeY, sizeZ, 'green', towerCanvasID)
              return true
            }}>
            <Text>The Face One</Text>
          </View>
          {/* Back Side Card 1*/}
          <View style={styles.cardBack}>
            <Text>The Back</Text>
          </View>
        </FlipCard>

        <FlipCard
          style={styles.cards}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
          onFlipped={(isFlipped) => { console.log('isFlipped', isFlipped) }}
        >
          {/* Face Side Card 2*/}
          <View style={styles.cardFront}>
            <Text>The Face Two</Text>
          </View>
          {/* Back Side Card 2*/}
          <View style={styles.cardBack}>
            <Text>The Back</Text>
          </View>
        </FlipCard>

        <FlipCard
          style={styles.cards}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
          onFlipped={(isFlipped) => { console.log('isFlipped', isFlipped) }}
        >
          {/* Face Side Card 3*/}
          <View style={styles.cardFront}>
            <Text>The Face Three</Text>
          </View>
          {/* Back Side Card 3*/}
          <View style={styles.cardBack}>
            <Text>The Back</Text>
          </View>
        </FlipCard>

        <FlipCard
          style={styles.cards}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
          onFlipped={(isFlipped) => { console.log('isFlipped', isFlipped) }}
        >
          {/* Face Side Card 4*/}
          <View style={styles.cardFront}>
            <Text>The Face Four</Text>
          </View>
          {/* Back Side Card 4*/}
          <View style={styles.cardBack}>
            <Text>The Back</Text>
          </View>
        </FlipCard>

        <View style={styles.cards}
        //  onStartShouldSetResponder={(e) => {
        //   console.log('button 1 e: ', e.nativeEvent.pageX)
        //   drawCube(20, 20, sizeX, sizeY, sizeZ, 'green', towerCanvasID)
        //   return true
        // }} 
        >
          {canvasID !== undefined &&
            <Draggable canvasID={canvasID}
              towerCanvasID={towerCanvasID}
              onStartShouldSetResponder={(e) => {
                console.log('button 2 e: ', e.nativeEvent.pageX)
                drawCube(30, 30, sizeX, sizeY, sizeZ, 'pink', towerCanvasID)
                return true
              }}
            />}
        </View>

        <View style={styles.cards}
          onStartShouldSetResponder={(e) => {
            console.log('button 2 e: ', e.nativeEvent.pageX)
            drawCube(e.nativeEvent.pageX, e.nativeEvent.pageY - 100, sizeX, sizeY, sizeZ, 'red', towerCanvasID)
            return true
          }}>
          {canvasID !== undefined &&
            <Draggable canvasID={canvasID}
              towerCanvasID={towerCanvasID}
            />}
        </View>

        <View style={styles.cards}
          onStartShouldSetResponder={(e) => {
            console.log('button 3 e: ', e.nativeEvent.pageX)
            drawCube(25, 25, sizeX, sizeY, sizeZ, 'yellow', towerCanvasID)
            return true
          }} >
          {canvasID !== undefined &&
            <Draggable canvasID={canvasID}
              towerCanvasID={towerCanvasID}
            />}
        </View>

        <View style={styles.cards}
          onStartShouldSetResponder={(e) => {
            console.log('button 4 e: ', e.nativeEvent.pageX)
            drawCube(28, 28, sizeX, sizeY, sizeZ, 'black', towerCanvasID)
            return true
          }}>
          {canvasID !== undefined &&
            <Draggable canvasID={canvasID}
              towerCanvasID={towerCanvasID}
            />}
        </View>

        <View style={styles.aquireMeters}>
          <View style={styles.reenforcements}></View>
          <View style={styles.supplies}></View>
        </View>
        <View style={styles.cards}></View>
        <View style={styles.cards}></View>
        <View style={styles.cards}></View>
        <View style={styles.cards}></View>
      </View>


    </View>

  );

}

let CIRCLE_RADIUS = 30;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: "solid",
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center'
    // backgroundColor: 'green'

  },

  cards: {
    height: 65,
    width: 45,
    backgroundColor: 'pink',
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 5,

  },

  cardFront: {
    height: 65,
    width: 45,
    backgroundColor: 'green',
    marginRight: 20,
    borderRadius: 5,
  },

  cardBack: {
    height: 65,
    width: 45,
    backgroundColor: 'pink',
    marginRight: 20,
    borderRadius: 5,
  },

  aquireMeters: {
    height: '100%',
    width: '30%',
    backgroundColor: 'black',
  },

  reenforcements: {
    height: 20,
    width: '90%',
    backgroundColor: 'green',
    margin: 10
  },

  supplies: {
    height: 20,
    width: '90%',
    backgroundColor: 'green',
    margin: 10
  },

  playerStats: {
    backgroundColor: 'red',
    minWidth: '100%',
    minHeight: '10%',
    left: 0,
    right: 0,
    top: 0,
    paddingLeft: 10,
    paddingRight: 10,

  },

  playerCards: {
    backgroundColor: 'blue',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    position: 'absolute',
    width: '100%'

  },

  profiles: {
    width: '100%',
    height: '100%',
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },

  profiles: {
    flex: 2,
    justifyContent: 'space-between',
    backgroundColor: 'red',
    width: '100%',
    maxHeight: '10%',
    marginTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  player1: {
    backgroundColor: 'red',
    width: '38%',
    //display: 'flex',
    alignContent: 'center',
    paddingLeft: '1%',
    paddingRight: '1%',
    alignItems: 'center',
  },

  player2: {
    backgroundColor: 'green',
    width: '38%',
    //display: 'flex',
    alignContent: 'center',
    paddingLeft: '1%',
    paddingRight: '1%',
    alignItems: 'center',
  },

  time: {
    backgroundColor: 'blue',
    width: '24%',
    //display: 'flex',
    alignContent: 'center',
    paddingLeft: '1%',
    paddingRight: '1%',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height: 200
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  row: {
    flexDirection: "row"
  },
  dropZone: {
    height: 200,
    backgroundColor: "yellow"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },

  towerCanvas: {
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: 'yellow',
    zIndex: -100
  }




});




// ------------------------
// panresponder for a class component
// class ExampleComponent extends Component {
//   constructor(props) {
//     super(props);
//     this._panResponder = PanResponder.create({
//       // Ask to be the responder:
//       onStartShouldSetPanResponder: (evt, gestureState) => true,
//       onStartShouldSetPanResponderCapture: (evt, gestureState) =>
//         true,
//       onMoveShouldSetPanResponder: (evt, gestureState) => true,
//       onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
//         true,

//       onPanResponderGrant: (evt, gestureState) => {
//         // The gesture has started. Show visual feedback so the user knows
//         // what is happening!
//         // gestureState.d{x,y} will be set to zero now
//       },
//       onPanResponderMove: (evt, gestureState) => {
//         // The most recent move distance is gestureState.move{X,Y}
//         // The accumulated gesture distance since becoming responder is
//         // gestureState.d{x,y}
//       },
//       onPanResponderTerminationRequest: (evt, gestureState) =>
//         true,
//       onPanResponderRelease: (evt, gestureState) => {
//         // The user has released all touches while this view is the
//         // responder. This typically means a gesture has succeeded
//       },
//       onPanResponderTerminate: (evt, gestureState) => {
//         // Another component has become the responder, so this gesture
//         // should be cancelled
//       },
//       onShouldBlockNativeResponder: (evt, gestureState) => {
//         // Returns whether this component should block native components from becoming the JS
//         // responder. Returns true by default. Is currently only supported on android.
//         return true;
//       }
//     });
//   }

//   render() {
//     return <View {...this._panResponder.panHandlers} />;
//   }
// }
