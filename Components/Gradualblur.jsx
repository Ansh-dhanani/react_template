import React from 'react';
import * as math from 'mathjs';

const GradualBlurEffect = () => {
  // The number of <div> elements inside <div class="top-blur">
  // (4 to 6 seems to be about the sweet spot)
  const divCount = 5;
  // How strong the blur is (default: 1)
  const blurStrength = 2;
  // Whether to blur the backdrop exponentially or linearly
  const exponentialBlur = true;
  // How tall the blur effect is
  const blurHeight = '7rem';

  const generateBlurDivs = () => {
    const divs = [];
    const increment = 100 / divCount;
    
    for (let i = 1; i <= divCount; i++) {
      // Color values on the gradient
      const c1 = '#0000';
      const c2 = '#000';
      
      // Stops (%) along the gradient (rounded to 1 decimal)
      const p1 = math.round((increment * i - increment) * 10) / 10;
      const p2 = math.round((increment * i) * 10) / 10;
      const p3 = math.round((increment * i + increment) * 10) / 10;
      const p4 = math.round((increment * i + increment * 2) * 10) / 10;
      
      // The linear-gradient values + points (default: 2 points)
      let gradient = `${c1} ${p1}%, ${c2} ${p2}%`;
      
      // If gradient has 3 points
      if (p3 <= 100) {
        gradient = `${c1} ${p1}%, ${c2} ${p2}%, ${c2} ${p3}%`;
      }
      
      // If gradient has all 4 points
      if (p4 <= 100) {
        gradient = `${c1} ${p1}%, ${c2} ${p2}%, ${c2} ${p3}%, ${c1} ${p4}%`;
      }
      
      // Blur calculation
      let blurValue;
      if (exponentialBlur) {
        blurValue = math.pow(2, i - 1) * 0.0625 * blurStrength;
      } else {
        blurValue = 0.0625 * i * blurStrength;
      }
      
      const divStyle = {
        position: 'absolute',
        inset: '0',
        maskImage: `linear-gradient(to bottom, ${gradient})`,
        WebkitMaskImage: `linear-gradient(to bottom, ${gradient})`,
        backdropFilter: `blur(${blurValue}rem)`
      };
      
      divs.push(<div key={i} style={divStyle}></div>);
    }
    
    return divs;
  };

  const styles = {
    nav: {
      height: blurHeight,
      left: 0,
      pointerEvents: 'none',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      zIndex: 1
    },
    topBlur: {
      position: 'relative',
      width: '100%',
      height: '100%'
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.topBlur}>
        {generateBlurDivs()}
      </div>
    </nav>
  );
};

export default GradualBlurEffect;