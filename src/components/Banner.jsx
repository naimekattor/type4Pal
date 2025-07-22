import React from "react";
import bannerImg from "../assets/img/banner.png";
import Storebutton from "../assets/img/Storebutton.png";
import Applebutton from "../assets/img/Applebutton.png";
import fbIcon from "../assets/img/fbIcon.png";
import XIcon from "../assets/img/XIcon.png";
import instaIcon from "../assets/img/instaIcon.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#EAD9B7]">
      <div className="2xl:max-w-[1536px] xl:max-w-7xl lg:max-w-[992px] md:max-w-[768px] md:mx-auto">
        <div className="flex lg:flex-row flex-col-reverse items-center">
          <div className="place-items-center md:place-items-start">
            <h1 className="xl:text-[70px] md:text-[52px] text-[32px] font-bold md:px-0 px-4">
              Caring for Curls  Coils & Culture
            </h1>
            <p className="md:text-[20px] text-[16px] font-medium text-black/60 w-70/100">
              Unlock the secret to healthy, vibrant hair with products designed
              for Nigerian People — infused with nature, backed by science, and
              made with love.
            </p>
            <div className="flex gap-4 items-center pt-6">
              <img
                src={Storebutton}
                alt="Storebutton"
                className="md:w-[187px] w-[127px] h-[56px]"
              />
              <img
                src={Applebutton}
                alt="Applebutton"
                className="md:w-[187px] w-[127px] h-[56px]"
              />
            </div>
            <div className="flex gap-4 items-center pt-4 pb-12 ">
              <Link to={'/'}><img src={fbIcon} alt="fbIcon" className="" /></Link>
              <Link to={'/'}><img src={XIcon} alt="XIcon" className="" /></Link>
              <Link to={'/'}><img src={instaIcon} alt="instaIcon" className="" /></Link>
            </div>
          </div>
          <div>
            <img
              src={bannerImg}
              alt=" banner image"
              className="xl:max-w-none max-w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
