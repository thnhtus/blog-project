import { User, UserRegister } from "@/models/user";
import { useRegisterMutation } from "@/services/register";
import classNames from "classnames";
import Image from "next/image";
import React, { useEffect, useReducer, useState } from "react";

const RegisterPage: React.FC = () => {
  const initialRegisterUser: UserRegister = {
    name: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  };

  //--------------------------------------------------------------------

  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [register, { isLoading }] = useRegisterMutation();

  const registerReducer = (prev: UserRegister, next: Partial<UserRegister>) => {
    return { ...prev, ...next };
  };

  const [registerUser, updateRegisterUser] = useReducer(
    registerReducer,
    initialRegisterUser
  );

  useEffect(() => {
    if (registerUser.password !== registerUser.confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [registerUser.confirmPassword, registerUser.password]);

  const handleRegisterUser = async () => {
    delete registerUser.confirmPassword;

    await register(registerUser).unwrap();
    updateRegisterUser(initialRegisterUser);
  };

  //-------------------------------------------------------------------

  return (
    <div className="flex gap-10 p-10 mt-10 mx-36 h-[700px] border overflow-hidden rounded-lg bg-slate-50">
      <div className="flex-initial w-1/2 overflow-hidden rounded-lg">
        <Image
          alt="sign_up_image"
          src="https://images.unsplash.com/photo-1679045148090-520584b4ab03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          width={500}
          height={500}
          className="w-full h-auto object-scale-down"
          priority
        />
      </div>

      <div className="w-1/2 flex-initial flex gap-7 flex-col">
        <div>
          <h1 className="font-semibold text-[36px]">Get started</h1>
          <p className="mt-2">Create your account now</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              onChange={(e) =>
                updateRegisterUser({ ...registerUser, name: e.target.value })
              }
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              onChange={(e) =>
                updateRegisterUser({ ...registerUser, email: e.target.value })
              }
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              onChange={(e) =>
                updateRegisterUser({ ...registerUser, address: e.target.value })
              }
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password:</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className={classNames("input input-bordered w-full", {
                "input-error": passwordError,
                "input-success": !passwordError,
              })}
              onChange={(e) => {
                updateRegisterUser({
                  ...registerUser,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm password:</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className={classNames("input input-bordered w-full", {
                "input-error": passwordError,
                "input-success": !passwordError,
              })}
              onChange={(e) => {
                updateRegisterUser({
                  ...registerUser,
                  confirmPassword: e.target.value,
                });
              }}
            />
            <>
              {passwordError ? (
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    Password not matches!
                  </span>
                </label>
              ) : null}
            </>
          </div>
        </div>
        <div className="text-left">
          <button
            className={classNames("btn px-10 text", { loading: isLoading })}
            onClick={handleRegisterUser}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
