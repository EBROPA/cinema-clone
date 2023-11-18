import React, { useState } from "react";
import VideoComponent from "../components/VideoComponent";

const HomePage = () => {
  const [isTrue, setIsTrue] = useState(false);

  const changeState = () => {
    setIsTrue(!isTrue);
  };

  return isTrue ? (
    <div>
      <button className="home__page__btn" onClick={changeState}>
        Выключить
      </button>
      <VideoComponent />
    </div>
  ) : (
    <div>
      <button className="home__page__btn" onClick={changeState}>
        Включить
      </button>
    </div>
  );
};

export default HomePage;
