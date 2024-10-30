'use client';

import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Image from "next/image";
import Link from "next/link";
import { FC, Fragment, ReactElement } from "react";
import { FaEye } from "react-icons/fa";
import { useRegister } from "./useRegister";

const Register: FC = (): ReactElement => {
  const { onRegisterSubmit } = useRegister();

  return (
    <div className="relative flex flex-col h-screen mx-auto w-11/12 max-w-md rounded-lg bg-white md:w-2/3">
      <form action={onRegisterSubmit}>
        <div className="mt-12 w-full px-5">
          <div className="mb-5 flex flex-col justify-between text-gray-600">
            <Link href="/" className="w-24 flex mx-auto mb-4 cursor-pointer">
              <Image src="https://i.ibb.co/SBvxyHC/uptimer.png" alt="API Monitor" className="w-full" width={400} height={400}
                priority />
            </Link>
            <h1 className="flex w-full text-center justify-center text-3xl font-bold mb-2">Create your free Uptimer account
            </h1>
          </div>
          <Fragment>
            <label htmlFor="username" className="text-sm font-bold leading-tight tracking-normal text-gray-800">
              Username
            </label>
            <TextInput id="username" name="username" type="text"
              className="mt-2 mb-5 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-sky-500/50 focus:outline-none"
              placeholder="Enter username" />
          </Fragment>
          <Fragment>
            <label htmlFor="email" className="text-sm font-bold leading-tight tracking-normal text-gray-800">
              Email
            </label>
            <TextInput id="email" name="email" type="email"
              className="mt-2 mb-5 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-sky-500/50 focus:outline-none"
              placeholder="Enter email" />
          </Fragment>
          <Fragment>
            <label htmlFor="password" className="text-sm font-bold leading-tight tracking-normal text-gray-800">
              Password
            </label>
            <div className="relative mb-2 mt-2">
              <div className="absolute right-0 flex h-full cursor-pointer items-center pr-3 text-gray-600">
                <FaEye className="icon icon-tabler icon-tabler-info-circle" />
              </div>
              <TextInput id="password" name="password" type="password"
                className="flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-sky-500/50 focus:outline-none"
                placeholder="Enter password" />
            </div>
          </Fragment>
          <div className="flex justify-end">
            <div className="mb-4 ml-2 cursor-pointer text-sm text-blue-600 hover:underline dark:text-blue-500">
              <Link href="/login">Already have an account? Login</Link>
            </div>
          </div>
          <Button type="submit" disabled={false}
            className="bg-green-500 text-md block w-full cursor-pointer rounded px-8 py-2 text-center font-bold text-white hover:bg-green-400 focus:outline-none"
            label="CREATE FREE ACCOUNT" />
        </div>
      </form>
      <div className="px-5">
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-2">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
