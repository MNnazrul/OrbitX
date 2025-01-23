import React from "react";
import sateliteImg from "../../assets/satelite2.jpg";

function Banner2() {
  return (
    <div className="bg-black text-white pb-10 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img src={sateliteImg} alt="" />
          </div>
          <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
            <p className="text-sky-800 uppercase">Our Mission </p>
            <h1 className="uppercase text-5xl">Rapidcast</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus molestiae magnam atque delectus quidem exercitationem
              maiores dolorum cumque nostrum error! Porro expedita dolorem
              blanditiis perspiciatis illo ipsa doloremque excepturi voluptate.
            </p>
            <button className="primary-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
