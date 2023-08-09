"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((current) => !current);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 backgroundColor">
      <div>
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          Study Trackr
        </Link>
      </div>
      <div className="flex flex-col w-full overflow-hidden rounded-md shadow-lg bg-textViolet max md:flex-row sm:max-w-md">
        <div className="p-6 bg-white md:flex-1">
          <h3 className="mb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Log in
          </h3>

          <form
            action="/auth/sign-in"
            method="post"
            className="flex flex-col space-y-5"
          >
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <a
                  href="/auth/forgotPassword"
                  className="text-sm text-[#18074b]"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
                <div
                  onClick={handleShowPassword}
                  className="absolute top-[10px] right-5 cursor-pointer outline-none"
                >
                  {showPassword ? (
                    <EyeOff color="#b6b8bd" />
                  ) : (
                    <Eye color="#b6b8bd" />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full mx-auto">
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#18074b] rounded-md shadow hover:bg-[#2c204d] focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
              {error ? (
                <p className="font-medium text-red-600">
                  Invalid email or password, retry.
                </p>
              ) : null}
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4 w-[250px] mx-auto">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                >
                  <span>
                    <svg
                      className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                      viewBox="0 0 16 16"
                      version="1.1"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                    Github
                  </span>
                </a>
              </div>
            </div>
          </form>

          <div className="flex items-center justify-center w-full mx-auto mt-4 text-sm font-light text-black">
            <p>
              Don&apos;t have an account ?{" "}
              <Link
                href="/auth/register"
                className="font-medium text-main_color hover:underline"
              >
                Register !
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
