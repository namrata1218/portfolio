// src/hooks/useNeonCursor.js

import { useEffect } from 'react';
import { neonCursor } from 'threejs-toys';

const useNeonCursor = () => {
  useEffect(() => {
    neonCursor({
      el: document.getElementById('app'),
      shaderPoints: 16,
      curvePoints: 20,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 10,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.0025,
    });
  }, []);
};

export default useNeonCursor;
