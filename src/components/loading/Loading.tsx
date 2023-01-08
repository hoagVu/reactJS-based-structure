import { useAppSelector } from "hooks/redux";
import * as React from "react";
import "./Loading.scss";

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  const isLoading = useAppSelector((state) => state.systemReducer.isLoading);

  return (
    <div
      className={`loading-wrapper ${
        isLoading ? "ld-show" : "ld-hide"
      } ${"ld-dim-light"}`}>
      <div className="middle-sreen">
        <div className="loader" />
      </div>
    </div>
  );
};

export default Loading;
