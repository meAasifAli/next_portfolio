"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="hero" className="w-full sm:h-screen flex justify-center items-center">
      <div className="flex flex-col sm:flex-row-reverse gap-8 sm:gap-0 justify-between items-center max-h-auto max-w-full w-full">
        <div className="flex flex-col gap-2 justify-start items-start max-w-full sm:max-w-[544px] mt-8 sm:mt-0">
          <h1 className="text-[57px] sm:text-[101px] font-bold leading-[100%] text-white uppercase font-amenti">
            Hi, I am <br /> Aasif <span className="text-[#d3e97a]">Ali.</span>
          </h1>
          <p className="text-[18px] font-regular text-[#C7C7C7] leading-[150%] mt-[16px] font-amenti">
            Passionate Web and App Developer crafting seamless digital
            experiences. Specializing in modern web technologies and mobile
            applications to bring innovative ideas to life., let&apos;s connect!
          </p>
          <div className="flex items-center w-full gap-6 mt-[32px]">
            <Link
              href={"#contact"}
              className="bg-[#d3e97a] flex items-center gap-2 p-3 rounded-full"
            >
              <p className="uppercase text-[16px] font-regular font-amenti">
                Contact
              </p>
              <div className="p-1 rounded-full bg-[#222222]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_7_370)">
                    <path
                      d="M4.99138 16.0146L13.5863 7.41974L13.5863 13.6576L15.2527 13.6576L15.2527 4.57482L6.16989 4.57482L6.16989 6.24123L12.4077 6.24123L3.81287 14.8361L4.99138 16.0146Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_370">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
            <a
              href="https://www.linkedin.com/in/meaasifali/"
              target="_blank"
              className="p-3 bg-[#222222] rounded-full"
            >
              <FaLinkedinIn color="#D3E97A" size={30} />
            </a>
            <a
              href="https://www.github.com/meAasifAli"
              target="_blank"
              className="p-3 bg-[#222222] rounded-full"
            >
              <FaGithub color="#D3E97A" size={30} />
            </a>
          </div>
        </div>
        <div className="">
          <Image
          loading="lazy"
            width={1000}
            height={1000}
            src={"/assets/bg2.png"}
            alt="err"
            className="w-full h-[500px] object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
