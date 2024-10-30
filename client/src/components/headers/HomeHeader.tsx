import clsx from "clsx";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { FaAlignJustify, FaTimes, FaUserAlt } from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";

const HomeHeader: FC = (): ReactElement => {

  const renderSkeleton = (): JSX.Element => {
    return (
      <>
        <li
          className="z-50 py-5 px-20 flex cursor-pointer items-center relative ml-auto justify-center rounded-full bg-[#f0f0f0]
  text-white font-bold"
        ></li>
        <li
          className="z-50 py-5 px-20 flex cursor-pointer items-center relative ml-auto justify-center rounded-full bg-[#f0f0f0]
  text-white font-bold"
        ></li>
      </>
    );
  };

  return (
    <div className="relative z-40 py-2.5 mt-1 w-full border-b border-[#e5f3ff]">
      <div className="m-auto px-6 xl:container md:px-12 lg:px-6">
        <div className="relative flex flex-wrap items-center justify-between gap-6 md:gap-0">
          <div className="flex w-full gap-x-4 lg:w-6/12">
            <div className="w-full md:flex">
              <div className="w-full gap-x-4 md:flex">
                <Link
                  href="/status"
                  className="relative z-10 flex cursor-pointer text-xl font-semibold text-[#4aa1f3]"
                >
                  {'Uptime Tests'}
                  {'Test Details'}
                  {'SSL Tests'}
                  {'Contact Groups'}
                </Link>
              </div>
            </div>
            <div
              className="peer-checked:hamburger relative z-20 block cursor-pointer lg:hidden"
            >
              <div className="space-y-2">
                <FaAlignJustify className="text-2xl block text-gray-600" />
                <FaTimes className="text-2xl block text-gray-600" />
              </div>
            </div>
          </div>
          <div
            className="navmenu mb-16 w-full cursor-pointer flex-wrap items-center space-y-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl lg:m-0 lg:flex lg:w-6/12 lg:space-y-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none flex justify-starts top-[38px] absolute"
          >
            <div className="text-[#74767e] lg:pr-4">
              <ul
                className={clsx("flex text-base font-medium")}
              >
                <>

                  <>
                    <li
                      className={clsx("z-50 flex cursor-pointer font-bold items-center",
                        "text-[#333333] text-[15px] py-2.5")}
                    >
                      <FaUserAlt />
                      <div className="ml-4">
                        Username
                      </div>
                    </li>
                    <li className="lg:hidden">
                      <Sidebar type="header" />
                    </li>
                    <li
                      className="z-50 flex cursor-pointer items-center relative rounded-full font-boldtext-[#333333] text-[15px] mt-5"
                    >
                      <FaUserAlt />
                      <Link
                        href="/"
                        className="ml-4"
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                </>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
