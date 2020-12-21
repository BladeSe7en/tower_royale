

// //import { StatusBar } from 'expo-status-bar';
// import React, { useEffect, useState, useRef } from 'react';
// import { StyleSheet, Text, Alert, View, Dimensions, PanResponder, Animated, TouchableOpacity } from 'react-native';
// import * as ScreenOrientation from 'expo-screen-orientation';
// import BFS from './src/Components/BFS';
// import CanvasCoordinates from './src/Components/CanvasCoordinates'
// import Draggable from './src/Components/Draggable'
// import drawCube from './src/Components/DrawCube';
// import TowerCanvas from './src/Components/TowerCanvas';
// import CardFlip from 'react-native-card-flip';


// export default function App() {

//   const window = Dimensions.get("window");
//   const screen = Dimensions.get("screen");
//   const [dimensions, setDimensions] = useState({ window, screen });
//   const [canvasID, setCanvasID] = useState()
//   const [towerCanvasID, setTowerCanvasID] = useState()

//   var sizeX = 4;
//   var sizeY = 4;
//   var sizeZ = 4.6;

//   async function changeScreenOrientation() {
//     await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
//   }


//   useEffect(() => {
//     changeScreenOrientation()
//   }, []);

//   async function canvasIDHandler(ID) {
//     setCanvasID(ID)
//   }

//   async function towerCanvasIDHandler(ID) {
//     setTowerCanvasID(ID)
//   }

//   useEffect(() => {
//     //console.log('towerCanvasID: ',towerCanvasID)
//   }, [canvasID, towerCanvasID]);


//   return (
//     <View style={styles.container}>
//       <View style={styles.playerStats}></View>

//       <BFS style={styles.BFS}
//         canvasIDHandler={canvasIDHandler}>
//       </BFS >

//       <View style={styles.playerCards}>
//          <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
//     <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text>AB</Text></TouchableOpacity>
//     <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><Text>CD</Text></TouchableOpacity>
//   </CardFlip>
//         <View style={styles.cards}
//         //  onStartShouldSetResponder={(e) => {
//         //   console.log('button 1 e: ', e.nativeEvent.pageX)
//         //   drawCube(20, 20, sizeX, sizeY, sizeZ, 'green', towerCanvasID)
//         //   return true
//         // }} 
//          >
//         {canvasID !== undefined && 
//           <Draggable canvasID={canvasID}
//           towerCanvasID={towerCanvasID}
//           />}
//         </View>

//         <View style={styles.cards}
//            onStartShouldSetResponder={(e) => {
//             console.log('button 2 e: ', e.nativeEvent.pageX)
//             drawCube(30, 30, sizeX, sizeY, sizeZ, 'red', towerCanvasID)
//             return true
//           }}>
//           {canvasID !== undefined &&
//             <Draggable canvasID={canvasID}
//               towerCanvasID={towerCanvasID}
//                />}
//         </View>

//         <View style={styles.cards}
//          onStartShouldSetResponder={(e) => {
//           console.log('button 3 e: ', e.nativeEvent.pageX)
//           drawCube(25, 25, sizeX, sizeY, sizeZ, 'yellow', towerCanvasID)
//           return true
//         }} >
//           {canvasID !== undefined && 
//           <Draggable canvasID={canvasID}
//           towerCanvasID={towerCanvasID}
//            />}
//         </View>

//         <View style={styles.cards}
//            onStartShouldSetResponder={(e) => {
//             console.log('button 4 e: ', e.nativeEvent.pageX)
//             drawCube(10, 10, sizeX, sizeY, sizeZ, 'white', towerCanvasID)
//             return true
//           }}>
//           {canvasID !== undefined && 
//           <Draggable canvasID={canvasID}
//           towerCanvasID={towerCanvasID} 
//           />}
//         </View>

//         <View style={styles.aquireMeters}>
//           <View style={styles.reenforcements}></View>
//           <View style={styles.supplies}></View>
//         </View>
//         <View style={styles.cards}></View>
//         <View style={styles.cards}></View>
//         <View style={styles.cards}></View>
//         <View style={styles.cards}></View>
//       </View>

//       <TowerCanvas towerCanvasIDHandler={towerCanvasIDHandler}></TowerCanvas>
//     </View>

//   );

// }
// let CIRCLE_RADIUS = 30;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     borderColor: 'black',
//     borderWidth: 1,
//     borderStyle: "solid",
//     width: '100%',
//     height: '100%',
//     // backgroundColor: 'green'

//   },

//   cards: {
//     height: 65,
//     width: 45,
//     backgroundColor: 'green',
//     marginVertical: 15,
//     marginHorizontal: 20,
//     borderRadius: 5,

//   },
//   cards1: {
//     height: 65,
//     width: 45,
//     backgroundColor: 'red',
//     marginVertical: 15,
//     marginHorizontal: 20,
//     borderRadius: 5,

//   },

//   aquireMeters: {
//     height: '100%',
//     width: '30%',
//     backgroundColor: 'black',
//   },

//   reenforcements: {
//     height: 20,
//     width: '90%',
//     backgroundColor: 'green',
//     margin: 10
//   },

//   supplies: {
//     height: 20,
//     width: '90%',
//     backgroundColor: 'green',
//     margin: 10
//   },

//   playerStats: {
//     backgroundColor: 'red',
//     minWidth: '100%',
//     minHeight: '10%',
//     left: 0,
//     right: 0,
//     top: 0,
//     paddingLeft: 10,
//     paddingRight: 10

//   },

//   playerCards: {
//     backgroundColor: 'blue',
//     height: '22%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 50,
//     bottom: 0

//   },

//   profiles: {
//     width: '100%',
//     height: '100%',
//     marginTop: 0,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   profiles: {
//     flex: 2,
//     justifyContent: 'space-between',
//     backgroundColor: 'red',
//     width: '100%',
//     maxHeight: '10%',
//     marginTop: 40,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },

//   player1: {
//     backgroundColor: 'red',
//     width: '38%',
//     //display: 'flex',
//     alignContent: 'center',
//     paddingLeft: '1%',
//     paddingRight: '1%',
//     alignItems: 'center',
//   },

//   player2: {
//     backgroundColor: 'green',
//     width: '38%',
//     //display: 'flex',
//     alignContent: 'center',
//     paddingLeft: '1%',
//     paddingRight: '1%',
//     alignItems: 'center',
//   },

//   time: {
//     backgroundColor: 'blue',
//     width: '24%',
//     //display: 'flex',
//     alignContent: 'center',
//     paddingLeft: '1%',
//     paddingRight: '1%',
//     alignItems: 'center',
//   },
//   mainContainer: {
//     flex: 1
//   },
//   ballContainer: {
//     height: 200
//   },
//   circle: {
//     backgroundColor: "skyblue",
//     width: CIRCLE_RADIUS * 2,
//     height: CIRCLE_RADIUS * 2,
//     borderRadius: CIRCLE_RADIUS
//   },
//   row: {
//     flexDirection: "row"
//   },
//   dropZone: {
//     height: 200,
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
//   },





// });