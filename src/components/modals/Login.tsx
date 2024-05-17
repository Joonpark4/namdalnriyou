'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import InputRHF from '@/components/forms/InputRHF';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/buttons/Button';
import { Label } from "@/components/ui/label";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  if (isLogin) {
    return <div></div>;
  }

  return (
    <div className="z-10 absolute flex justify-center items-center top-0 left-0 bg-gray-500 bg-opacity-40 w-full h-full">
      <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700 animate-fadeIn">
        <div className="space-y-2 text-center">
          <div className="flex justify-around gap-3 mb-5">
            <h1 className="text-3xl font-bold rounded-lg">Login</h1>
          </div>
          <h2 className="text-lg font-medium">
            Welcome! Pls login to your account.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            You can check the&nbsp;
            <Link className="text-blue-400 hover:text-blue-700" href="#">
              privacy policy
            </Link>
            .
          </p>
        </div>
        <form className="space-y-4">
          <div className="flex">
            <div className="flex flex-col grow gap-2">
              <InputRHF
                type="email"
                label="Email"
                id="email"
                watch={watch}
                {...register('email', {
                  required: '이메일을 입력해주세요!',
                  minLength: {
                    value: 4,
                    message: '최소 4글자를 입력해주세요',
                  },
                  maxLength: {
                    value: 15,
                    message: '15글자를 초과할 수 없습니다',
                  },
                })}
              />
              {errors?.email?.message && (
                <Label className=" text-red-600">
                  {errors?.email?.message as React.ReactNode}
                </Label>
              )}
              <InputRHF
                type="password"
                label="Password"
                watch={watch}
                id="password"
                {...register('password', {
                  required: '비밀번호를 입력해주세요!',
                  minLength: {
                    value: 6,
                    message: '최소 6글자를 입력해주세요',
                  },
                })}
              />
              {errors?.password?.message && (
                <Label className=" text-red-600">
                  {errors?.password?.message as React.ReactNode}
                </Label>
              )}
            </div>
            <div className="flex flex-col justify-center items-center w-24 px-2">
              <Button
                type="submit"
                variant="outline"
                size="sm"
                className="w-full h-full mt-2"
              >
                Login
              </Button>
            </div>
          </div>
          <div className="text-center">
            If you have not account
            <Link className="text-blue-400 hover:text-blue-700" href="#">
              &nbsp;Join here
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
            <span className="text-zinc-400 dark:text-zinc-300 text-sm">OR</span>
            <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full h-full p-1"
          >
            <div className="flex items-center justify-center">
              <svg
                className=" w-5 h-5 mr-2"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" x2="12" y1="8" y2="8" />
                <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
              </svg>
              Login with Google
            </div>
          </Button>
        </form>
        <div className="w-full flex justify-end items-center gap-2">
          <div className="font-bold">Powered by</div>{' '}
        </div>
      </div>
    </div>
  );
}
