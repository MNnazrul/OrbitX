import React from "react";
import { FaFacebook, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-gray-800 text-white px-5">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-3">
          {/* first col */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </h1>
            <p>
              Get Exclusive <span className="font-bold">Update</span> straigt to
              your inbox.
            </p>
            <br />
            <div className="flex items-center h-10">
              <input
                type="text"
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2"
                placeholder="Email"
              />
              <button className="primary-button">OK</button>
            </div>
          </div>
          {/* second col */}
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3 ">Quick Links </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3 ">Quick Links </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3 ">Contact US </h1>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <HiLocationMarker />
                  <p>Badarganj, Rangpur</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <MdMessage />
                  <p>mnnazrul@gmail.com</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <MdCall />
                  <p>+8801738430336</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="hidden sm:block">
          <div className="flex justify-between items-center py-6 border-t-2 border-gray-400 ">
            <span className="text-sm text-gray-400">
              copyright &copy; MNnazrul
            </span>
            <div className="flex items-center justify-center gap-4 pb-4">
              <a
                href="https://web.facebook.com/nazrulislam.islam.7587/"
                target="_blank"
              >
                <FaFacebook className="text-4xl" />
              </a>
              <a href="https://www.linkedin.com/in/mnnazrul/" target="_blank">
                <FaLinkedin className="text-4xl" />{" "}
              </a>
              <a href="https://codeforces.com/profile/MNnazrul" target="_blank">
                <FaHackerrank className="text-4xl" />
              </a>
            </div>
            <span className="text-sm text-gray-400">
              <ul className="flex gap-3">
                <li>Privacy Policy</li>
                <li>Term & Conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
