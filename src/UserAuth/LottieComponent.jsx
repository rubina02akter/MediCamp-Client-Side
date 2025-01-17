import React, { useRef } from 'react';
import Lottie from 'react-lottie'; // Import the Lottie component from 'react-lottie'
import animationData from "../assets/lottie/Animation - 1737112963260.json"; // Import your Lottie animation JSON

const LottieComponent = () => {  // Renamed the component to avoid conflict with imported Lottie

  const animationRef = useRef(null); // Create a reference to the Lottie component

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,  // Pass the animationData here
  };

  // Control the animation playback
  const handlePlay = () => {
    animationRef.current.play();
  };

  const handleStop = () => {
    animationRef.current.stop();
  };

  return (
    <div>
      
      <Lottie options={defaultOptions} height={400} width={400} ref={animationRef} />
     
    </div>
  );
};

export default LottieComponent;
