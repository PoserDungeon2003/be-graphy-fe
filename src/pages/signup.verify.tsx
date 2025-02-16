import _ from "lodash";
import { useRef } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router";

export default function SignupVerify() {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      e.target.value = value;
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData("text");
    if (/^\d{4}$/.test(paste)) {
      paste.split("").forEach((char, index) => {
        if (inputRefs.current[index]) {
          inputRefs.current[index]!.value = char;
        }
      });
      inputRefs.current[3]?.focus();
    }
    e.preventDefault();
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-8 xl:gap-12 overflow-y-hidden">
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <Link
          to={"/"}
          className="flex items-center gap-1 font-bold text-[#9681FA]"
        >
          <IoChevronBackOutline className="mt-1 size-5" />
          Back
        </Link>
      </div>
      <img
        src="/images/effect/gradient_green_r.png"
        alt="effect"
        className="absolute bottom-0 left-0 rotate-180 -z-10 w-1/2"
      />
      <div className="relative w-1/2 flex flex-col items-center justify-center">
        <img
          src="/images/button/btn_gradient_blue_lg.png"
          alt="effect"
          className="absolute -z-10"
        />
        <img src="/images/icons/camera.png" alt="camera" className="absolute w-1/4 -left-5 -top-20" />
        <h1 className="relative text-center text-4xl font-bold text-black z-10">
          Account Verification
        </h1>
      </div>
      <span className="text-black text-lg">
        Please enter the 4 digit code sent to your email
      </span>
      <form className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-between gap-8">
          {_.map([0, 1, 2, 3], (index) => (
            <div key={index} className="relative w-32 h-16">
              <img
                src="/images/background/bg_otp_input.png"
                alt="otp_input"
                className="absolute inset-0"
              />
              <input
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                className="absolute inset-0 w-full h-full bg-transparent text-black font-bold text-center text-2xl px-3 border-0 focus:outline-none focus:ring-0 focus:shadow-none"
                maxLength={1}
                pattern="\d*"
                onChange={(e) => handleInputChange(e, index)}
                onPaste={handlePaste}
              />
            </div>
          ))}
        </div>
        <a href="" className="text-black underline uppercase font-bold mt-2">
          Resend code
        </a>
        <button type="submit" className="text-black text-2xl border-2 border-black px-8 py-6 rounded-lg uppercase font-bold">
          Verify
        </button>
      </form>
    </div>
  )
}