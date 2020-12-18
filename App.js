//   const window = Dimensions.get("window");
//   const screen = Dimensions.get("screen");
//     const [dimensions, setDimensions] = useState({ window, screen });


//import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import BFS from './src/Components/BFS';

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}

export default function App() {
  useEffect(() => {
    changeScreenOrientation()
  }, []);
    
    return (
      <View style={styles.container}>
        <View  style={styles.playerStats}></View>

   <BFS style={styles.BFS}></BFS >
   <View style={styles.playerCards}>
   <View style={styles.cards}></View>
   <View style={styles.cards}></View>
   <View style={styles.cards}></View>
   <View style={styles.cards}></View>

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
  
  const styles = StyleSheet.create({
    container: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
   borderColor: 'black',
   borderWidth: 1,
   borderStyle: "solid",
   width: '100%',
   height: '100%',
  // backgroundColor: 'green'
  
 },

 cards: {
  height: 65,
  width: 45,
  backgroundColor: 'green',
  marginVertical: 15,
  marginHorizontal: 20 
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
  paddingRight: 10
   
   },
 
   playerCards: {
    backgroundColor: 'blue',
    minHeight: '22%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50
     
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

 


});