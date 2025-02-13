import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex flex-col justify-between w-full h-full relative">
      <div className="flex w-1/2 flex-col">
        <img
          src="/images/home/img-1.png"
          alt="image1"
          className="aspect-[1366/512] h-full w-full"
        />
        <div className="mt-5 ml-20 flex w-full flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-nowrap text-black uppercase md:text-8xl">
            Be Graphy
          </h1>
          <span className="text-md md:text-2xl text-black">"Be your beautiful moment"</span>
        </div>
      </div>
      <div className="flex w-1/2 flex-col">
        <div
          style={{
            backgroundImage: "url(/images/home/img-2.png)",
          }}
          className="aspect-[1171/690] h-full w-full bg-cover bg-center p-4"
        >
          <div className="flex flex-col items-center justify-start gap-4">
            <div className="flex items-center justify-between gap-2 translate-x-1/4 mt-4 pl-2 border-1 rounded-full max-w-[200px] border-cyan-400">
              <span className="text-md font-semibold text-nowrap">
                Booking Now
              </span>
              <button className="w-full h-full relative cursor-pointer pl-1">
                <img src="/images/button/btn_gradient_blue-xs.png" alt="button" className="w-[89px] h-full" />
                <IoArrowForward className="absolute inset-0 left-8 top-3.5 size-5" />
              </button>
            </div>
            <div className="flex justify-around md:pt-12">
              <img src="/images/button/btn_signup.png" alt="signup" className="w-1/4 h-full cursor-pointer" />
              <img src="/images/button/btn_login.png" alt="login" className="w-1/4 h-full cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 flex items-end">
        <div className="relative w-1/2">
          <img src="/images/home/bg_gradient.png" alt="" className="absolute -z-10 right-0 bottom-0 w-2/3 translate-y-[-10%]" />
          <img src="/images/home/img-3.png" alt="image3" className="z-10 w-full" />
        </div>
      </div>
    </main>
  );
}