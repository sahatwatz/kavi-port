import React from "react";
import * as Motion from "motion/react-client";

const Profile = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
          className="h-auto w-screen flex justify-center mb-24 items-center relative"
        >
          <div
            className=" bg-transparent max-lg:w-3/4
           max-xl:w-2/3 max-md:w-4/5 max-sm:w-6/7
         shadow-2xl mb-10 rounded-4xl w-1/3 h-auto text-blue-950 flex-col
         justify-center items-center"
          >
            <div className="overflow-auto text-base mt-5 flex-col justify-center items-center">
              <h1 className="text-6xl max-md:text-2xl p-5">
                <b>CONTACT</b>
              </h1>
              <h2 className="text-2xl p-2 max-md:text-lg max-sm:text-xs small-font">
                KavipatAkkabuth@outlook.com
              </h2>
              <h2 className="text-2xl p-2 max-md:text-lg max-sm:text-xs">
                (+66) 083-650-9940
              </h2>
            </div>
            <div className="flex justify-center items-center max-sm:gap-3 gap-8 p-10">
              <a
                data-social="Instagram"
                href="https://www.instagram.com/ka_guz_ak/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="w-12 h-auto min-w-4 opacity-75 hover:opacity-100"
                  src="/img/image/instagram.png"
                  alt="Instagram Icon"
                />
              </a>
              <a
                data-social="Facebook"
                href="https://www.facebook.com/guz.jung.16"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="w-12 h-auto  min-w-4 opacity-75 hover:opacity-100"
                  src="/img/image/facebook.png"
                  alt="Instagram Icon"
                />
              </a>
              <a
                data-social="Line"
                href="https://www.instagram.com/ploy_yolo/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="w-12 h-auto  min-w-4 opacity-75 hover:opacity-100"
                  src="/img/image/line.png"
                  alt="line Icon"
                />
              </a>
              <a
                data-social="Discord"
                href="https://www.youtube.com/watch?v=KT-YL7noSec"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <img
                  className="w-12 h-auto  min-w-4 opacity-75 hover:opacity-100"
                  src="/img/image/discord.png"
                  alt="/discord Icon"
                />
              </a>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-72 h-auto max-sm:w-24 rounded-full object-cover"
                src="/img/image/avatar.png"
                alt="Profile"
              />
            </div>
            <div className="">
              <h1 className="text-blue-950 text-5xl p-5 max-md:text-2xl">
                Kavipat Akkabuth
              </h1>
            </div>
            <div className="  flex justify-center items-center">
              <p className="w-96 p-5 overflow-auto text-left max-sm:text-xs text-base text-gray-600 leading-7 tracking-wide indent-4">
                I am architect that was graduated from Kasetsart University,
                Bangkok, Thailand
              </p>
            </div>
            <div className="flex justify-center items-center">
              <p className="w-100 p-5 overflow-auto text-left max-sm:text-xs text-base text-gray-600 leading-7 tracking-wide">
                I was born in Phuket a tropical island rich in colonial
                architecture, resorts, hotels and the cultural diversity of
                Phuket.
              </p>
            </div>
            <div className=" flex justify-center items-center">
              <p className="w-100 p-5 overflow-auto text-left max-sm:text-xs text-base text-gray-600 leading-7 tracking-wide ">
                I am a good-natured, responsible and diligent person, always
                ready to learn new things along with the people around me, and
                ready to help everyone and succeed together.
              </p>
            </div>
            <div className="  flex-col justify-items-center items-center ">
              <h1
                className="w-auto text-2xl max-sm:text-base p-5 text-center flex justify-center
               items-center "
              >
                <b>Languages</b>
              </h1>
              <ul className="list-disc text-left max-sm:text-xs pl-5 text-primary">
                <li>Thai - Native Language</li>
                <li>English - Well Communicated</li>
              </ul>
            </div>
            <div className="  flex-col justify-items-center max-sm:text-xs items-center mb-10">
              <h1
                className="w-auto p-5 text-2xl max-sm:text-base  flex justify-center
               items-center "
              >
                <b>Design Interests</b>
              </h1>
              <ul className="list-disc text-left max-sm:text-xs pl-5 text-primary">
                <li>Inclusive Design</li>
                <li>Passive Design</li>
                <li>Contemporary Architecture</li>
              </ul>
            </div>
          </div>
        </Motion.div>
      </div>
    </>
  );
};

export default Profile;
