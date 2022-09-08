import React, { useRef, useEffect, useState } from "react";
import eventBus from "Components/EventBus";
import PropTypes from "prop-types";
import classNames from "classnames";

const TextMorph = ({ textValue1, textValue2 }) => {
  const text1El = useRef(null);
  const text2El = useRef(null);
  const requestRef = useRef(null);
  const [texts, setTexts] = useState([textValue1, textValue2])


  useEffect(() => {
    setTexts([textValue1, textValue2])

    eventBus.on("itemAdded", () => {
      console.log('itemAdded')
      console.log(textValue1)
      animate()
    })

    console.log(`useeffect ${textValue1}`)

    return () => {
      cancelAnimationFrame(requestRef.current);
      eventBus.remove("itemAdded");
      console.log("removing stuff")
    }
  }, [textValue1, textValue2]);

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
    console.log("setMorph")
    console.log(texts)
    //console.log(texts[textIndex % texts.length])
	  //console.log(texts[(textIndex + 1) % texts.length])
    //console.log("----")
  }

  const doCooldown = () => {
    morph = 0;

    if(text2El.current && text1El.current) {
      text2El.current.style.filter = "";
      text2El.current.style.opacity = "100%";

      text1El.current.style.filter = "";
      text1El.current.style.opacity = "0%";
    }
  }

  // Animation loop, which is called every frame.
  const animate = () => {

    requestRef.current = requestAnimationFrame(animate);
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

  // Controls the speed of morphing.
  const morphTime = 1;
  const cooldownTime = 0.25;


  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;


  return (
    <span id="text-morph-container">
      { console.log(`render text morph ${textValue1}`) }
      <span ref={ text1El } className="text1">{textValue1}</span>
      <span ref={ text2El } className="text2"></span>
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
};

export default TextMorph;
