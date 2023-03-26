import React from "react";
import { UserLogin } from "@/models/user";
import { useLoginMutation } from "@/services/login";
import { handleToast } from "@/utils/helper";
import classNames from "classnames";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useRouter } from "next/router";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>();

  //--------------------------------------------------------------

  const onSubmit: SubmitHandler<UserLogin> = async (data) => {
    login(data)
      .unwrap()
      .then(() => {
        handleToast("Login success!", "success");

        router.push("/home");
      })
      .catch((error) => {
        handleToast("Login failed!", "error");

        console.log(error);
      });
  };

  //--------------------------------------------------------------

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
            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className={classNames("input input-bordered w-full", {
                    "input-error": errors.email,
                  })}
                  {...register("email", { required: true })}
                />
                {errors.email ? (
                  <label className="label">
                    <span className="label-text text-red-500">
                      Please input your email!
                    </span>
                  </label>
                ) : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password:</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className={classNames("input input-bordered w-full", {
                    "input-error": errors.password,
                  })}
                  {...register("password", { required: true })}
                />
                {errors.password ? (
                  <label className="label">
                    <span className="label-text text-red-500">
                      Please input your password!
                    </span>
                  </label>
                ) : null}
              </div>

              <button
                type="submit"
                className={classNames("btn w-full my-5 normal-case", {
                  loading: isLoading,
                })}
              >
                Sign in
              </button>
            </form>
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
