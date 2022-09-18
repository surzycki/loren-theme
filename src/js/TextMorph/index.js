import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TextMorph = ({ textValue1, textValue2, shouldAnimate }) => {
  const text1El = useRef(null);
  const text2El = useRef(null);
  const requestRef = useRef(null);

  // Controls the speed of morphing.
  const morphTime = 1;
  const cooldownTime = 0.25;
  let texts = [textValue1, textValue2];
  let textIndex = texts.length - 1;

  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;

  useEffect(() => {
    // cancel running animation
    if(requestRef.current) {
      cancelAnimationFrame(requestRef.current)
    }

    // animate
    if(shouldAnimate) {
      texts = [textValue1, textValue2];
      animate()
    }

    return () => {
      cancelAnimationFrame(requestRef.currest)
    }
  }, [textValue1]);


  const doMorph = () => {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }

    setMorph(fraction);
  }

  const setMorph = (fraction) => {
    text2El.current.style.filter = `blur(${Math.min(4 / fraction - 8, 100)}px)`;
    text2El.current.opacity = `${Math.pow(fraction, 0.2) * 100}%`;

    fraction = 1 - fraction;
    text1El.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    text1El.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    text1El.current.textContent = texts[textIndex % texts.length];
    text2El.current.textContent = texts[(textIndex + 1) % texts.length];
  }

  const doCooldown = () => {
    morph = 0;
    if(text2El.current.textContent && text1El.current.textContent) {
      text2El.current.style.filter = "";
      text2El.current.style.opacity = "100%";

      text1El.current.style.filter = "";
      text1El.current.style.opacity = "0%";
    }
  }

  const reset = () => {
      textIndex = texts.length - 1;
      text2El.current.textContent = ''
      cancelAnimationFrame(requestRef.current)
  }

  //Animation loop, which is called every frame.
  const animate = () => {
    if(textIndex >= 4) {
      reset();
      return;
    } else{
      requestRef.current = requestAnimationFrame(animate);
    }

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

      doMorph();
    } else {
      doCooldown();
    }
  }


  return (
    <span id="text-morph-container">
      <span ref={text1El} className="text1">{textValue1}</span>
      <span ref={text2El} className="text2"></span>
      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140" />
          </filter>
        </defs>
      </svg>
    </span>
  );
};


TextMorph.propTypes = {
  textValue1: PropTypes.string.isRequired,
  textValue2: PropTypes.string.isRequired,
  shouldAnimate: PropTypes.bool.isRequired
};

export default TextMorph;
