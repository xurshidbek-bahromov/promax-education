import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row items-center  mx-4 md:mx-[5rem] pt-32 lg:pt-4 xl:pt-0">
      <div>
        <p className="font-bold text-[30px] md:text-[54px] text-secondary">
         <span className="text-primary">ProMax Education</span> bilan bilimingizni o'shiring
        </p>
        <p className="text-[#464646] text-[20px] my-5 mb-8">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="flex gap-4 items-center">
          <MainButton text="Batafsil" classes="md:w-[150px]" />
          <div className="flex items-center gap-3">
            <img src="/images/play_icon.png" alt="play icon" width={50} />
            <p>Video orqali tanishib chiqing</p>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/happy_lady.png" alt="happy lady" />
      </div>
    </section>
  );
}

export default HeroSection;
