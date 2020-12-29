import React, { useState, useEffect, createRef } from 'react';
import Constraints from '../functions.js/Constants'


export function useCanvas(){
    const canvasRef = createRef();
    const [coordinates, setCoordinates] = useState([]);

      const canvasObj = canvasRef.current;
      const ctx = canvasObj.getContext('2d');
      ctx.lineTo(50,50)

    return [ coordinates, setCoordinates, canvasRef, Constraints.MAX_WIDTH, Constraints.MAX_HEIGHT ];
}
