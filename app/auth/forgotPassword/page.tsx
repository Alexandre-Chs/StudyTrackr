import React from "react";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 backgroundColor">
      <div className="flex flex-col w-full overflow-hidden rounded-md shadow-lg bg-textViolet max md:flex-row sm:max-w-md">
        <div className="p-6 bg-white md:flex-1">
          <h3 className="mb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Forgot Password
          </h3>

          <form
            action="/auth/forgot-password"
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
            <div className="w-full mx-auto">
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#18074b] rounded-md shadow hover:bg-[#2c204d] focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
