import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { LoginRQ } from "../types";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = object({
  email: string().email().required().trim(),
  password: string().required().trim(),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRQ>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginRQ) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col items-center justify-center gap-4"
      >
        <div className="w-1/3 space-y-1">
          <div className="relative">
            <img src="/images/background/bg_input.png" alt="input background" />
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              placeholder="EMAIL"
              className="focus:shadow-outline absolute inset-0 rounded-full px-6 leading-tight font-extrabold text-black focus:outline-none"
            />
          </div>
          {errors.email && (
            <span className="px-4 text-sm font-bold text-red-500">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className="w-1/3 space-y-1">
          <div className="relative">
            <img src="/images/background/bg_input.png" alt="input background" />
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              placeholder="PASSWORD"
              className="focus:shadow-outline absolute inset-0 rounded-full px-6 leading-tight font-extrabold text-black focus:outline-none"
            />
          </div>
          {errors.password && (
            <span className="px-4 text-sm font-bold text-red-500">
              {errors.password?.message}
            </span>
          )}
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
