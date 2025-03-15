import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { loginUser } from "../api/login";
import { LoginRQ } from "../types";

const schema = object({
  email: string().email().required().trim(),
  password: string().required().trim(),
});

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRQ>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginRQ) => {
    try {
      setIsLoading(true);
      setLoginError(null);

      const response = await loginUser(data);
      if (response.success) {
        if (response.data?.token) {
          localStorage.setItem("authToken", response.data.token);
        }
        if (response.data?.user?.role === "admin") {
          navigate("/admin/dashboard/customers");
        } else {
          navigate("/user/home");
        }
      } else {
        setLoginError(response.message || "Đăng nhập thất bại");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      setLoginError("Đã xảy ra lỗi. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
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
        {loginError && (
          <div className="w-1/3 rounded bg-red-100 p-3 text-center text-red-700 font-bold">
            {loginError}
          </div>
        )}
        
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
              disabled={isLoading}
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
              disabled={isLoading}
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
          disabled={isLoading}
          className={`mt-4 rounded-full px-12 py-3 font-bold text-white uppercase ${
            isLoading
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-indigo-400 cursor-pointer active:bg-indigo-500"
          }`}
        >
          {isLoading ? "Đang xử lý..." : "Log in"}
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