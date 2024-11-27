'use client'

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default() => {
  const [dotLottie, setDotLottie] = useState(null);
  const [status, setStatus] = useState("idle");
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loop, setLoop] = useState(true);

  // Calculating total frames and progress
  const totalFrames = dotLottie?.isLoaded ? dotLottie.totalFrames : 0;
  const progress = dotLottie?.isLoaded ? (currentFrame / totalFrames) * 100 : 0;
 

  return (
    <div className="container">
      <DotLottieReact
        dotLottieRefCallback={setDotLottie}
        src="https://lottie.host/963d6c9c-187f-4507-afcc-c6f8e46911bb/Uj7E2gO9ef.lottie"
        autoplay
        loop={loop}
        style={{ maxWidth: "680px" }}
      />
      
    </div>
  );
};