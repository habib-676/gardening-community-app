import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterCom = () => {
  return (
    <div className="p-8 text-2xl font-bold">
      <h1>
        <span className="text-accent">Here is </span>
        <span style={{ color: "green" }}>
          <Typewriter
            words={[
              "Our Organic Gardeners",
              "the People Who Grow Green",
              "The Skilled Hands Behind the Garden",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWriterCom;
