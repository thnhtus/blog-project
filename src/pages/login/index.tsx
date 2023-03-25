import Image from "next/image";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="basis-1/2 p-5 flex flex-col">
        <div>
          <div className="font-semibold text-2xl">LOGO.</div>
        </div>
        <div className="grow flex items-center justify-center">
          <div className="w-1/2">
            <div className="my-7">
              <h1 className="font-semibold text-4xl py-5">Welcome back</h1>
              <p className="text-slate-400">
                Welcome back! Please enter your details
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password:</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <button className="btn w-full my-5 normal-case">Sign in</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>&#169; thnhtus 2023</p>
        </div>
      </div>
      <div className="basis-1/2 bg-slate-400 overflow-hidden">
        <Image
          alt="login_bg"
          src="https://images.unsplash.com/photo-1679641050348-ce42fa064f2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          height={0}
          width={0}
          priority
          className="w-full h-auto object-fill"
          sizes="100vh"
        />
      </div>
    </div>
  );
};

export default LoginPage;
