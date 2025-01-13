import React from "react";
import bgVideo from "./assets/earth-bg.mp4";

function App() {
  return (
    <div>
      <div>
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
