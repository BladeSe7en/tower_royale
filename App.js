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

   <BFS></BFS>
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
   backgroundColor: 'green'
  
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