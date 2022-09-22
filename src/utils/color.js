function extractHueFromRGB(red, green, blue) {
  // adapted from here https://gist.github.com/xenozauros/f6e185c8de2a04cdfecf

  if ( (red | green | blue ) == null){
    return null
  }
    // convert decimal to 255
    function convertColor(value){
      return Math.round(value*255)
    }

    // convert decimal value to 360
    function convertHue(value){
      return Math.round(value*360);
    }

    const r = convertColor(red)
    const g = convertColor(green)
    const b = convertColor(blue)


    // console.log("colours", JSON.stringify({red:r, green: g, blue: b}))
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    // console.log("max and min", JSON.stringify({max, min}))

    // var h, s, l = (max + min) / 2;
    var h = (max + min) / 2;

    if( max === min ){
      // h = s = 0; // achromatic
      h = 0; // achromatic
      return convertHue(h);
    }

    var d = max - min;
    // s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    if ( r > (g | b)) {
      h = (g - b) / d + (g < b ? 6 : 0);
    } else if ( g > ( r | b)) {
      h = (b - r) / d + 2;
    } else {
      h = (r - g) / d + 4;
    }

  return convertHue( h/6);
}

export { extractHueFromRGB }
