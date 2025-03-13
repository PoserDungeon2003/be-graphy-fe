import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { object, ref, string } from "yup";
import { registerUser } from "../api/register";
import { SignupRQ } from "../types";

const schema = object({
  name: string().required("Tên là bắt buộc").trim(),
  email: string().email("Email không hợp lệ").required("Email là bắt buộc").trim(),
  password: string().required("Mật khẩu là bắt buộc").trim(),
  confirmPassword: string()
    .oneOf([ref("password")], "Mật khẩu không khớp")
    .required("Xác nhận mật khẩu là bắt buộc")
    .trim(),
});

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignupRQ>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: SignupRQ) => {
    setIsLoading(true);
    const result = await registerUser(data);
    setIsLoading(false);

    if (result.success) {
      toast.success("Đăng ký thành công!", { position: "top-right" });
      console.log('Đăng ký thành công:', result.data);
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } else {
      toast.error("Đăng ký thất bại! Vui lòng kiểm tra lại.", { position: "top-right" });
      console.log('Lỗi đăng ký:', result.message);

      if (result.errors) {
        Object.entries(result.errors).forEach(([field, messages]) => {
          setError(field.toLowerCase() as keyof SignupRQ, {
            type: 'manual',
            message: Array.isArray(messages) ? messages[0] : messages,
          });
        });
      }
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-y-hidden">
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <Link to="/" className="flex items-center gap-1 font-bold text-[#9681FA]">
          <IoChevronBackOutline className="mt-1 size-5" />
          Back
        </Link>
      </div>
      <img
        src="/images/effect/gradient_green_r.png"
        alt="effect"
        className="absolute bottom-0 left-0 -z-10 w-1/2 rotate-180"
      />
      <h1 className="text-center text-4xl font-bold text-black uppercase">Be Graphy</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col items-center justify-center gap-4"
      >
        <div className="w-1/3 space-y-1">
          <div className="relative">
            <img src="/images/background/bg_input.png" alt="input background" />
            <input
              {...register("name")}
              type="text"
              placeholder="NAME"
              className="absolute inset-0 rounded-full px-6 font-extrabold text-black focus:outline-none"
            />
          </div>
          {errors.name && <span className="text-sm font-bold text-red-500">{errors.name?.message}</span>}
        </div>

        <div className="w-1/3 space-y-1">
          <div className="relative">
            <img src="/images/background/bg_input.png" alt="input background" />
            <input
              {...register("email")}
              autoComplete="new-email"
              type="email"
              placeholder="EMAIL"
              className="absolute inset-0 rounded-full px-6 font-extrabold text-black focus:outline-none"
            />
          </div>
          {errors.email && <span className="text-sm font-bold text-red-500">{errors.email?.message}</span>}
        </div>

        <div className="w-1/3 space-y-1">
          <div className="relative">
            <img src="/images/background/bg_input.png" alt="input background" />
            <input
              {...register("password")}
              type="password"
              autoComplete="new-password"
              placeholder="PASSWORD"
              className="absolute inset-0 rounded-full px-6 font-extrabold text-black focus:outline-none"
            />
          </div>
          {errors.password && <span className="text-sm font-bold text-red-500">{errors.password?.message}</span>}
        </div>

        <div className="w-1/3 space-y-1">
          <div className="relative">
            <img src="/images/background/bg_input.png" alt="input background" />
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="CONFIRM PASSWORD"
              className="absolute inset-0 rounded-full px-6 font-extrabold text-black focus:outline-none"
            />
          </div>
          {errors.confirmPassword && (
            <span className="text-sm font-bold text-red-500">{errors.confirmPassword?.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`mt-4 rounded-full bg-transparent px-12 py-3 font-bold text-[#6AD3F3] uppercase underline ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Đang xử lý..." : "Be now"}
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
