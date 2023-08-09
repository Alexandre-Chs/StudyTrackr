"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const UpdatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const checkPasswordMatch = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    }
  };

  const handleShowPassword = () => {
    setShowPassword((current) => !current);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 backgroundColor">
      <div className="flex flex-col w-full overflow-hidden rounded-md shadow-lg bg-textViolet max md:flex-row sm:max-w-md">
        <div className="p-6 bg-white md:flex-1">
          <h3 className="mb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Update password
          </h3>

          <form
            action="/auth/update-password"
            method="post"
            className="flex flex-col space-y-5"
          >
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Password
              </label>
              <div className="relative w-full">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type={showPassword ? "text" : "password"}
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
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-black"
              >
                Confirm password
              </label>
              <div className="relative">
                <input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                onClick={checkPasswordMatch}
                type={password !== confirmPassword ? "button" : "submit"}
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#18074b] rounded-md shadow hover:bg-[#2c204d] focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Reset password
              </button>
              {error ? (
                <p className="font-medium text-red-600">{error}</p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
