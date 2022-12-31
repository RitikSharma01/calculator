import React, { useEffect, useRef } from "react";

import "../Header/Header.css";

function Header(props) {
  const resultRef = useRef();
  const expressionRef = useRef();

  useEffect(() => {
    resultRef.current.scrollIntoView();
  }, [props.history]);

  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [props.expression]);
  return (
    <div className="header custom-scroll">
      <div className="header_history">
        {props.history.map((item, index) => (
          <p key={item + "" + Math.random() * 2}>{item}</p>
        ))}
      </div>
      <div ref={expressionRef} className="header_expression custom-scroll">
        <p>{props.expression}</p>
      </div>
      <br />
      <div ref={resultRef} className="header_result">
        <p>{props.result}</p>
      </div>
    </div>
  );
}

export default Header;
