 // Code from https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs/36862446#36862446

// import { useState, useEffect } from 'react';
//
// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }
//
// export default function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
//
//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }
//
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//
//   return windowDimensions;
// }

// From here - https://gist.github.com/joshcawthorne/0a518b164658510f4eed74d0c4e8d003
import { useState, useEffect } from "react";
import { window } from "browser-monads"; //npm i browser-monads

function useWindowsDimension() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowsDimension;
