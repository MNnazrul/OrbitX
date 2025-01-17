import React from "react";

function Hero() {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h1 className="text-5xl font-bold">Orbite The Earth</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur et qui repudiandae sequi, tempora accusantium enim
              voluptas perspiciatis earum similique fugit sapiente veritatis,
              quas numquam alias? Voluptatem eligendi odit cupiditate.
            </p>
            <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
