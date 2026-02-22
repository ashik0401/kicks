import React from "react";
import logo from "../../../public/logo2.png";
import logo2 from "../../../public/Logo3.png";
import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="md:w-10/12 mx-auto px-4 mt-5  ">
      <section className="bg-[#4A69E2] md:flex justify-between md:rounded-t-[48px] rounded-t-3xl pb-15 ">
        <div className="md:px-18 p-4 md:py-16 space-y-3 md:space-y-5">
          <h1 className="font-semibold text-white text-[32px] md:text-5xl uppercase">
            Join our KicksPlus Club & get 15% off
          </h1>
          <p className="md:text-xl font-semibold font-sans text-[#E7E7E3]">
            Sign up for free! Join the community.
          </p>
          <div className="space-x-1">
            <input
              className=" border rounded-lg text-white border-white outline-0 px-2 py-2"
              type="email"
              name=""
              id=""
              placeholder="Email address"
            />
            <button className="uppercase  bg-[#232321] rounded-lg py-2 px-6 text-white cursor-pointer">
              submit
            </button>
          </div>
        </div>
        <div className="w-full flex items-center md:justify-center px-4 md:px-0">
          <Image
            className="md:w-91.75 md:h-28 w-50 h-[61.04px]"
            src={logo}
            alt="Logo"
            width="367px"
            height="112px"
          />
        </div>
      </section>

      <section className="bg-[#232321] md:px-10 md:pt-10 px-4 pt-4 md:rounded-[48px] rounded-3xl md:-mt-20 -mt-5">
        <div className="footer sm:footer-horizontal text-white  md:flex  gap-8">
          <nav className="flex-1 min-w-87.5">
            <h1 className="text-[#FFA52F] md:text-4xl text-2xl font-semibold">
              About us
            </h1>
            <p className="text-[#E7E7E3] md:text-xl  font-semibold  tracking-wider">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </nav>

          <nav className="flex-1 min-w-25 justify-end">
            <h6 className=" text-[#FFA52F] md:text-2xl text-xl  font-semibold">
              Categories
            </h6>
            <a className="link link-hover block text-[#E7E7E3] md:text-xl font-semibold font-sans">
              Branding
            </a>
            <a className="link link-hover block text-[#E7E7E3] md:text-xl font-semibold font-sans">
              Design
            </a>
            <a className="link link-hover block text-[#E7E7E3] md:text-xl  font-semibold font-sans">
              Marketing
            </a>
            <a className="link link-hover block text-[#E7E7E3] md:text-xl  font-semibold font-sans">
              Advertisement
            </a>
          </nav>

          <nav className="flex-1 min-w-25 justify-end">
            <h6 className="text-[#FFA52F] md:text-2xl text-xl  font-semibold">
              Company
            </h6>
            <a className="link link-hover block text-[#E7E7E3] md:text-xl  font-semibold font-sans">
              About us
            </a>
            <a className="link link-hover block text-[#E7E7E3] md:text-xl  font-semibold font-sans">
              Contact
            </a>
            <a className="link link-hover block text-[#E7E7E3] md:text-xl  font-semibold font-sans">
              Jobs
            </a>
            <a className="link link-hover block text-[#E7E7E3] md:text-xl  font-semibold font-sans">
              Press kit
            </a>
          </nav>

          <nav className="flex-1 min-w-25 md:justify-end">
            <h6 className="text-[#FFA52F] md:text-2xl text-xl  font-semibold">
              Social
            </h6>
            <div className="grid grid-flow-col gap-4">
              <a>
                <MdFacebook size={24} />
              </a>
              <a>
                <FaInstagram size={24} />
              </a>
              <a>
                <FaTwitter size={24} />
              </a>
              <a>
                <FaTiktok size={24} />
              </a>
            </div>
          </nav>
        </div>
        <div className="mt-15">
          <Image
            className="md:w-full md:h-full "
            src={logo2}
            alt="Logo"
            width="1262px"
            height="383px"
          />
        </div>
      </section>
      <p className="text-[#232321] text-center py-5">© All rights reserved </p>
    </section>
  );
}
