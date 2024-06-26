import React from "react";

type Props = {};

export default function Login({}: Props) {
  return (
    <div>
      <div className="flex justify-center shadow-lg p-3 mb-5 bg-body rounded">
        <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl md:w-[50%]  m-2">
          <div className=" w-full md:w-3/4">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
              <h1 className="font-semibold text-xl md:text-3xl text-gray-600 m-2">
                Login to your account
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
              <div className="">
                <div className="m-1 text-lg text-gray-500 text-semibold">
                  Username
                </div>
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
                />
              </div>
              <div className="">
                <div className="m-1 text-lg text-gray-500 text-semibold">
                  Password
                </div>
                <input
                  type="password"
                  className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"
                />
              </div>
            </div>
            <div className="text-center mt-7">
              <button className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-stone-600 hover:bg-stone-500  font-medium m-2 mb-6 ">
                Sign In
              </button>
            </div>
          </div>
          <div className="h-[100%] w-full md:w-1/2 items-center flex justify-center">
            <div className="text-stone-700 text-base font-semibold text-center my-10 space-y-2 m-2 cursor-pointer">
              <div className="flex justify-between border-2 border-stone-700 px-6 py-2">
                <ion-icon
                  name="logo-google"
                  className="m-1 text-sm md:text-xl text-red-500"
                ></ion-icon>
                <div className="m-1 text-lg">Continue with Google</div>
              </div>
              <div className="flex justify-between border-2 border-stone-700 px-6 py-2">
                <ion-icon
                  name="logo-facebook"
                  className="m-1 text-sm md:text-xl text-blue-500"
                ></ion-icon>
                <div className="m-1 text-lg">Continue with Facebook</div>
              </div>
              <div className="flex justify-between border-2 border-stone-700 px-6 py-2">
                <ion-icon
                  name="logo-apple"
                  className="m-1 text-sm md:text-xl text-black"
                ></ion-icon>
                <div className="m-1 text-lg">Continue with Facebook</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
