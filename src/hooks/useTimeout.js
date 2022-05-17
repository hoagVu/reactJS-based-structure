/* eslint-disable consistent-return */
import React from "react";

const useTimeout = () => {
  const [timeout, setTime] = React.useState(undefined);
  const onDelayChange = (callback, delay) => {
    if (!delay && delay !== 0) {
      return;
    }
    if (timeout) clearTimeout(timeout);
    setTime(
      setTimeout(() => {
        callback();
      }, delay)
    );
  };
  return onDelayChange;
};

export default useTimeout;
