import React from "react";
import backgroundVideo from "../resources/back.mp4";

const BackVideo = () => {
  return (
    <video
      className="absolute inset-0  lg:w-full xl:h-full md:w-full md:h-[29rem] lg:h-[30rem] mb-10 object-cover sm:w-auto sm:h-auto sm:max-w-none"
      autoPlay
      loop
      muted
    >
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  );
};

export default BackVideo;