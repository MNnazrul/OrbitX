import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

function Hero() {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-4 lg:pr-36">
            <h1 className="text-5xl font-bold uppercase">Orbite The Earth</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur et qui repudiandae sequi, tempora accusantium enim
              voluptas perspiciatis earum similique fugit sapiente veritatis,
              quas numquam alias? Voluptatem eligendi odit cupiditate.
            </p>
            <button className="primary-button">Learn More</button>
          </div>
        </div>
      </div>
      {/* surface section */}
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />
      {/* bottom gradient section */}
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px]"></div>
    </div>
  );
}

export default Hero;
