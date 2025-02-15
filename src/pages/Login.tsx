import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-y-hidden">
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
        className="absolute top-0 right-0 -z-10 w-1/2"
      />
      <h1 className="text-center text-4xl font-bold text-black uppercase">
        Be Graphy
      </h1>
      <form className="mt-8 flex flex-col items-center justify-center gap-4">
        <div className="relative w-1/3">
          <img src="/images/background/bg_input.png" alt="input background" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
            className="focus:shadow-outline absolute inset-0 rounded-full px-6 leading-tight font-extrabold text-black focus:outline-none"
          />
        </div>
        <div className="relative w-1/3">
          <img src="/images/background/bg_input.png" alt="input background" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
            className="focus:shadow-outline absolute inset-0 rounded-full px-6 leading-tight font-extrabold text-black focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="mt-4 cursor-pointer rounded-full bg-indigo-400 px-12 py-3 font-bold text-white uppercase active:bg-indigo-500"
        >
          Log in
        </button>
        <span className="font-bold text-black uppercase">
          Create account?{" "}
          <Link to="/signup" className="font-bold text-[#6AD3F3] underline">
            Sign up
          </Link>
        </span>
      </form>
    </div>
  );
}
