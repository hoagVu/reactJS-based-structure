/* eslint-disable consistent-return */
import React from "react";

const useTimeout = () => {
  const [timeout, setTime] = React.useState<any>(undefined);
  const onDelayChange = (
    callback: (val?: any) => void,
    delay: number | null
  ) => {
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
