import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

import klarnaLogo from '@/temp_images/Klarna.png';
import instacartLogo from '@/temp_images/instacart.svg';
import coinbaseLogo from '@/temp_images/coinbase.png';
import chart from '@/temp_images/chart.png';
import withdraw from '@/temp_images/withdraw.png';
import cardIcon from '@/temp_images/card_icon.png';
import guardIcon from '@/temp_images/guard.png';
import accountsIcon from '@/temp_images/acconts.png';
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <div className="font-helvetica">
      <div className="bg-[#f5f9f9]">
        <header className="m-auto xl:container px-6 py-4 w-full flex justify-between items-center">
          <Image src="https://res.cloudinary.com/dc3apwy48/image/upload/v1730382313/d33tzkwfyzex2naa7jgu.png" className="w-[5.5rem]" width={150} height={50} alt="logo" />
          <div className="flex gap-2">
            <Link href="/login" passHref>
              <button className="border rounded-xl py-2 px-6 hover:text-white hover:bg-[#71b3be] hover:border-[#71b3be]">Login</button>
            </Link>
            <Link href="/create-account" passHref>
              <button className="border rounded-xl py-2 px-6 border-none bg-[#2a8e9e] text-white hover:bg-[#71b3be]">Sign Up</button>
            </Link>

          </div>
        </header>
      </div>
      <main>
        <div className='bg-[#f5f9f9] pb-[12rem]'>
          <div className="m-auto px-6 lg:pt-[4rem] lg:pb-[10rem] xl:container grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-[#012332] text-3xl md:text-5xl lg:text-[4.1rem]">The best <br /> <b>uptime monitoring</b> service.</h2>
              <p className="py-7 text-lg md:text-xl">Our Uptime monitoring service helps you track uptime of your services in real-time, ensuring high availability and reliability for your applications.</p>
              <button className="flex items-center border rounded-xl py-3 px-6 border-none bg-[#2a8e9e] text-white hover:bg-blue-300">Get Started <GoArrowUpRight className="ml-2 w-5 h-5" /></button>
              <div className='mt-12 flex gap-4 items-center'>
                <Image className='h-[1.5rem] w-auto' src={klarnaLogo} width={400} height={100} alt="Klarna" />
                <Image className='h-[1.5rem] w-auto' src={instacartLogo} width={400} height={100} alt="Instacart" />
                <Image className='h-[1.5rem] w-auto' src={coinbaseLogo} width={400} height={100} alt="Coinbase" />
              </div>
            </div>
            <div>
              <Image src="https://res.cloudinary.com/dc3apwy48/image/upload/v1730503810/hvqurrfrv7fw8pwxzsi0.png" className="w-full md:w-auto" width={400} height={700} alt="Hero" />
            </div>
          </div>
        </div>
        <div className="mt-[-12rem] mx-5">
          <div className="mx-auto xl:container p-20 bg-white rounded-xl shadow-xl">
            <h4 className="text-[#0a6a7f] uppercase mb-4">Plan ahead</h4>
            <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[5%] justify-between">
              <h2 className="text-5xl">Website monitoring made extremely easy.</h2>
              <p className="text-[#344864] text-lg">Downtime happens even to the best of us. But it’s important to know it before customers are affected!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Image src={cardIcon} className="w-10 mb-7" width={300} height={300} alt="bank card" />
                <h3 className="text-2xl mb-2">Real-time Monitoring</h3>
                <p className="text-[#344864]">CMonitor service uptime in real-time and get instant notifications for downtime.</p>
              </div>
              <div>
                <Image src={accountsIcon} className="w-10 mb-7" width={300} height={300} alt="bank card" />
                <h3 className="text-2xl mb-2">Easy Integration</h3>
                <p className="text-[#344864]">Integrate seamlessly with your existing tools and workflows.</p>
              </div>
              <div>
                <Image src={guardIcon} className="w-10 mb-7" width={300} height={300} alt="bank card" />
                <h3 className="text-2xl mb-2">Alerting</h3>
                <p className="text-[#344864]">Get instant notification of potential issues before they impact your users.

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto xl:container mt-[8rem] px-6">
          <h4 className="text-[#0a6a7f] uppercase mb-4 text-center">Why Us</h4>

          <h2 className="text-5xl text-center mb-[8rem]">Why they prefer Relilert</h2>
          <div className="px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-16 bg-[#f5f9f9] rounded-3xl">
              <h1 className="text-8xl mb-14">3K+</h1>
              <h2 className="text-3xl">
                Businesses already running on Relilert
              </h2>
            </div>
            <div className="p-16 bg-[#f5f9f9] rounded-3xl">
              <h3 className="text-3xl mb-14">Instant Withdraw your funds at any time</h3>
              <Image className="w-[18rem] mx-auto" src={withdraw} width={500} height={200} alt="instant withdrawal" />
            </div>
            <div className="px-16 pt-16 bg-[#f5f9f9] rounded-3xl col-span-2 flex justify-between gap-8">
              <div>
                <h2 className="text-3xl mb-6">No asset volatility</h2>
                <p>Generate returns on you cash reserves without making any any investments</p>
              </div>
              <Image src="https://res.cloudinary.com/dc3apwy48/image/upload/v1730506081/cwnmwmgc30tnlpunrqnb.png" className="w-[60%]" width={400} height={300} alt='chart' />
            </div>
          </div>
        </div>
        <div className="mt-[7.5rem] py-[6rem] bg-[#023247] h-screen">
          <div className="m-auto xl:container px-6">
            <h4 className="mb-3 uppercase text-[#34a7b5]">Step</h4>
            <h2 className="w-[70%] text-5xl text-white">Maximize your returns with a Reserve account that generates</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0c3a4e] p-8 rounded-3xl">
                <div>
                  <h1 className="text-8xl text-gray-200">1</h1>
                </div>
                <p className="text-white text-xl">Open your account</p>
                <p className="mt-4 text-gray-200">Sign up to relilert and set up your account from the dashboard</p>
              </div>
              <div className="bg-[#0c3a4e] p-8 rounded-3xl">
                <div>
                  <h1 className="text-8xl text-gray-200">2</h1>
                </div>
                <p className="text-white text-xl">Transfer your money</p>
                <p className="mt-4 text-gray-200">Sign up to relilert and set up your account from the dashboard</p>
              </div>
              <div className="bg-[#0c3a4e] p-8 rounded-3xl">
                <div>
                  <h1 className="text-8xl text-gray-200">3</h1>
                </div>
                <p className="text-white text-xl">Watch your balance grow</p>
                <p className="mt-4 text-gray-200">Sign up to relilert and set up your account from the dashboard</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 xl:container px-6 text-center">
          <h4 className="mb-3 uppercase text-[#34a7b5]">our mission</h4>
          <h2 className="mx-auto w-[50%] text-5xl text-center">We've helped innovative companies</h2>
          <p className="mt-6 mx-auto w-[30%] text-[#344864] text-lg">Hundreds of all sizes and across all industries have made big improvements with us.</p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h1 className="text-6xl">24%</h1>
              <p>Renue business</p>
            </div>
            <div>
              <h1 className="text-6xl">180k</h1>
              <p>In annual revenue</p>
            </div>
            <div>
              <h1 className="text-6xl">10+</h1>
              <p>Months of runway</p>
            </div>
          </div>
        </div>
        <div className="mt-16 m-auto xl:container px-6">
          <h4 className="text-[#0a6a7f] uppercase mb-4 text-center">choose plan:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-[#033348] bg-[#eff5f5] p-12 rounded-3xl">
              <h1 className="text-5xl mb-24">Plus</h1>
              <div className="flex justify-between">
                <p className="text-3xl">$2.99/month</p>
                <span>
                  <GoArrowUpRight className="w-6 h-6" />
                </span>
              </div>
            </div>

            <div className="text-[#033348] bg-[#eff5f5] p-12 rounded-3xl">
              <h1 className="text-5xl mb-24">Premium</h1>
              <div className="flex justify-between">
                <p className="text-3xl">$6.99/month</p>
                <span>
                  <GoArrowUpRight className="w-6 h-6" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 mx-6">
          <div className="m-auto xl:container px-20 py-14 bg-[#023247] rounded-xl">
            <h4 className="text-[#36abb9] uppercase text-blue-900">Try it now</h4>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-5xl text-white">Ready to level up your payment process?</h2>
                <p className="mt-6 text-[#b9c6cb]">Supports small businesses with simple invicing, powerful integrations, and cahs flow management tools</p>
              </div>
              <div className="flex justify-end items-start">
                <button className="border rounded-xl py-3 px-6 border-none bg-blue-300 text-white hover:bg-blue-200 mr-4">Get Started Now
                </button>
                <button className="flex items-center border rounded-xl py-3 px-6 text-white hover:bg-blue-300 hover:border-blue-300">Learn More <GoArrowUpRight className="ml-2 w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 mx-auto xl:container px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Image src="https://res.cloudinary.com/dc3apwy48/image/upload/v1730382313/d33tzkwfyzex2naa7jgu.png" className="w-[5.5rem]" width={150} height={50} alt="logo" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="mb-5 font-bold text-lg">Solutions</h3>
              <ul className="text-[#4e6078] flex flex-col gap-2">
                <li className="text-sm">Small Businness</li>
                <li className="text-sm">Freelancers</li>
                <li className="text-sm">Customers</li>
                <li className="text-sm">Taxes</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 font-bold text-lg">Company</h3>
              <ul className="text-[#4e6078] flex flex-col gap-2">
                <li className="text-sm">About Us</li>
                <li className="text-sm">Career</li>
                <li className="text-sm">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 font-bold text-lg">Learn</h3>
              <ul className="text-[#4e6078] flex flex-col gap-2">
                <li className="text-sm">Blog</li>
                <li className="text-sm">Ebooks</li>
                <li className="text-sm">Guides</li>
                <li className="text-sm">Templates</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="mb-5 font-bold text-lg">Follow us on</h3>
            <ul className="flex gap-4 text-[#023247]">
              <li className="text-sm">
                <FaTwitter className="w-6 h-6" />
              </li>
              <li className="text-sm">
                <FaLinkedin className="w-6 h-6" />
              </li>
              <li className="text-sm">
                <FaFacebook className="w-6 h-6" />
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="mt-16 border-t border-gray-300">
        <div className="m-auto xl:container px-6 py-6">
          <p className="text-center">&copy; Relilert 2024. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Page;