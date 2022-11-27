import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// https://planetcalc.com/5992/
const ProductImageAdjust = ({}) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  adjustImageSize(windowSize.innerWidth);

  return <></>;
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function adjustImageSize(width) {
  let element, x;

  switch (true) {
    case width < 576:
      element = document.getElementById(
        "image-banner-product-mobile"
      ).firstElementChild;
      x = 40;
      element.style.backgroundPosition = `${x}% 40%`;
      break;
    case width < 768:
      element = document.getElementById(
        "image-banner-product-mobile"
      ).firstElementChild;
      x = 55.6 - 0.03 * width;
      element.style.backgroundPosition = `${x}% 40%`;
      break;
    case width < 992:
      element = document.getElementById("image-banner-product-desktop");
      x = 0.15 * width - 54.5;
      element.style.backgroundPosition = `${x}% 36%`;
      break;
    case width < 1200:
      element = document.getElementById("image-banner-product-desktop");
      x = 0.135 * width - 65.4;
      element.style.backgroundPosition = `${x}% 36%`;
      break;
    case width < 1400:
      element = document.getElementById("image-banner-product-desktop");
      x = 0.04 * width + 13.3;
      element.style.backgroundPosition = `${x}% 66%`;
      break;
    default:
      element = document.getElementById("image-banner-product-desktop");
      x =
        0.00000169444168 * width ** 3 -
        0.0081035620928 * width ** 2 +
        12.91768128113472 * width -
        6784.22203493118286;

      element.style.backgroundPosition = `${x}% 66%`;
  }

  console.log(width, `${x}% 66%`);
}

ProductImageAdjust.propTypes = {};

export default ProductImageAdjust;
