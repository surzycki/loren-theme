import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function formatForDisplay(number = 0) {
  return parseFloat(Math.max(number, 0)).toFixed(2).split("").reverse();
}

export default function AnimatedNumbers({ value }) {
  const numArray = formatForDisplay(value);


  function DecimalColumn() {
    return (
      <div>
        <span>.</span>
      </div>
    )
  }

  function NumberColumn({ digit }) {
    const [position, setPosition] = useState(0);
    const columnContainer = useRef();

    const setColumnToNumber = (number) => {
      setPosition(columnContainer.current.clientHeight * parseInt(number));
    };

    useEffect(() => setColumnToNumber(digit), [digit]);

    const spring = {
      type: "spring",
      damping: 20,
      stiffness: 200
    }

    return (
      <div className="ticker-column-container pe-none" ref={ columnContainer }>
        <motion.div transition={spring} animate={{ y: position }} className="ticker-column">
          {[9,8,7,6,5,4,3,2,1,0].map((num) => (
            <div key={num} className="ticker-digit">
              <span>{num}</span>
            </div>
          ))}
        </motion.div>
        <span className="number-placeholder">0</span>
      </div>
    );
  }

  return (
    <div className="ticker-view">
      { numArray.map((number, index) =>
        number === "." ? (
          <DecimalColumn key={index} />
        ): (
          <NumberColumn key={index} digit={number}/>
        )
      )}
    </div>
  );
}
