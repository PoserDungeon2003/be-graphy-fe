import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router";
import { object, string } from "yup";
import { RegisterRQ } from "../types";

const schema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRQ>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterRQ) => {
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col items-center justify-center gap-4"
      >
        <div className="w-1/3 space-y-1">
          <div className="relative">
            <img src="/images/background/bg_input.png" alt="input background" />
            <input
              {...register("name")}
              type="name"
              name="name"
              id="name"
              placeholder="NAME"
              className="focus:shadow-outline absolute inset-0 rounded-full px-6 leading-tight font-extrabold text-black focus:outline-none"
            />
          </div>
          {errors.name && (
            <span className="px-4 text-sm font-bold text-red-500">
              {errors.name?.message}
            </span>
          )}
        </div>

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
          className="cursor-pointer rounded-full bg-white px-12 py-3 text-2xl font-bold text-[#6AD3F3] uppercase underline active:bg-indigo-500"
        >
          Be now
        </button>
        <span className="font-bold text-black uppercase">
          ALREADY HAVE AN ACCOUNT?{" "}
          <Link to="/login" className="font-bold text-[#6AD3F3] underline">
            Sign in
          </Link>
        </span>
      </form>
    </div>
  );
}
