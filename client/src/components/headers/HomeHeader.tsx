import { IUser } from "@/interfaces/user.interface";
import clsx from "clsx";
import Link from "next/link";
import { FC, ReactElement, useState } from "react";
import { FaAlignJustify, FaTimes, FaUserAlt } from "react-icons/fa";

const HomeHeader: FC = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>();

  return (
    <div className="relative z-40 py-2.5 mt-1 w-full border-b border-[#e5f3ff]">
      <div className="m-auto px-6 xl:container md:px-12 lg:px-6">
        <div className="relative flex flex-wrap items-center justify-between gap-6 md:gap-0">
          <div className="flex w-full gap-x-4 lg:w-6/12">
            <div className="w-full md:flex">
              <div className="w-full gap-x-4 md:flex">
                <Link href="/status" className="relative z-10 flex cursor-pointer text-xl font-semibold text-[#4aa1f3]">
                  Uptime Tests
                </Link>
              </div>
            </div>
            <div
              className="peer-checked:hamburger relative z-20 block cursor-pointer lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="space-y-2">
                {!menuOpen ? (
                  <FaAlignJustify className="text-2xl block text-gray-600" />
                ) : (
                  <FaTimes className="text-2xl block text-gray-600" />
                )}
              </div>
            </div>
          </div>
          <div className={clsx('navmenu mb-16 w-full cursor-pointer flex-wrap items-center space-y-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl lg:m-0 lg:flex lg:w-6/12 lg:space-y-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none', {
            'flex justify-starts top-[38px] absolute': menuOpen,
            'hidden justify-end': !menuOpen
          })}>
            <div className="text-[#74767e] lg:pr-4">
              <ul className={clsx('flex text-base font-medium', {
                'flex-col': menuOpen,
                'gap-4': !menuOpen
              })}>
                <>
                  <li className={clsx('z-50 flex cursor-pointer font-bold items-center', {
                    'text-[#333333] text-[15px] py-2.5': menuOpen,
                    'gap-1': !menuOpen,
                  })}>
                    <FaUserAlt />
                    <div className={clsx('', { 'ml-4': menuOpen })}>Username</div>
                  </li>
                  <li className="lg:hidden">
                    Sidebar
                  </li>
                  <li
                    className={clsx('z-50 flex cursor-pointer items-center relative rounded-full font-bold', {
                      'text-[#333333] text-[15px] mt-5': menuOpen,
                      'ml-auto gap-1 h-9 justify-center bg-green-500 text-white font-bold sm:px-6 hover:bg-green-400': !menuOpen
                    })}
                  >
                    <FaUserAlt />
                    <Link href="/" className={clsx('', { 'ml-4': menuOpen })}>Logout</Link>
                  </li>
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
