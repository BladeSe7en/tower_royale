import React, { useRef, useState } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text } from 'react-native';

export default function App() {
    const [locationX, setLocationX] = useState(0);
    const [locationY, setLocationY] = useState(0);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event( [null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false } ),
      onPanResponderRelease: (event, gestureState) => {
        //After the change in the location
        setLocationX(event.nativeEvent.locationX.toFixed(2));
        setLocationY(event.nativeEvent.locationY.toFixed(2));
        pan.flattenOffset();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text name={locationX, locationY} style={styles.titleText}>Drag this box!{locationX}, {locationY}</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
    marginTop: -100

  },
  box: {
    height: 65,
    width: 45,
    backgroundColor: 'green',
    borderRadius: 5,
    marginTop: -100
  },
});