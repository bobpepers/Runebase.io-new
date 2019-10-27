import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import '../assets/js/vanta/vanta.clouds.min.js';

export const Clouds = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(VANTA.CLOUDS({
        el: '#clouds',
        skyColor: 0x70a0c,
        cloudColor: 0x2f4d7a,
        sunColor: 0xae7e42,
        sunlightColor: 0x4f2e0e,
        scaleMobile: 1,
        scale: 1,
        speed: 0.5,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div id='clouds'>
    Foreground content goes here
  </div>
}
