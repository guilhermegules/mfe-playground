import React from "react";

const WcWrapper = (props) => {
  const { wcTag, children, ...restProps } = props;
  const wcRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const wc = wcRef.current;

    for (const [key, value] of Object.entries(restProps)) {
      if (key in wc) {
        if (wc[key] !== value) {
          wc[key] = value;
        }
      } else {
        if (wc.getAttribute(key) !== value) {
          wc.setAttribute(key, value);
        }
      }
    }
  });

  return React.createElement(wcTag, { ref: wcRef });
};

export default React.memo(WcWrapper);
