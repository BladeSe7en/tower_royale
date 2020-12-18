import { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import debounce from "lodash/debounce";



export default useDimensions = () => {
  const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const [node, setNode] = useState();

const [dimensions, setDimensions] = useState({ window, screen });
let height = dimensions.window.height;
let width = dimensions.screen.width
// console.log('height in hook: ', height)
// console.log('width in hook: ',width)

const ref = useCallback(node => {
  setNode(node);
}, []);
return [ref, width, height];
}