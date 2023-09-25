import React from "react";
import dp from "../assets/dp.jpg";
import { Link } from "react-router-dom";

import muminbhat from '../assets/muminbhat.jpg'
import mumin from '../assets/mumin.jpg'
import bhatmumin from '../assets/bhatmumin.jpg'
import mumin_bhat from '../assets/mumin_bhat.jpg'


const AboutPage = () => {
  return (
    <>
      {/* Blog Article */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
          {/* Content */}
          <div className="lg:col-span-2">
            <div className="py-8 lg:pr-4 lg:pr-8">
              <div className="space-y-5 lg:space-y-8">
                <Link
                  to={"/"}
                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400"
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  Back to Home
                </Link>
                <h2 className="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white">
                  Mumin Bhat: From Beginnings to Now
                </h2>
                <div className="flex items-center gap-x-5">
                  <a
                    className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200"
                    href="https://muminbhat.com"
                    target="blank"
                  >
                    muminbhat.com
                  </a>
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    September 29, 2023
                  </p>
                </div>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  From being a school dropout to achieving the distinction of
                  becoming The Youngest Certified Ethical Hacker by EC-Council
                  in Jammu & Kashmir, my journey has been nothing short of
                  extraordinary. It all began with a single question that I
                  couldn't shake off during a FaceTime call with a friend.
                </p>
                <h3 className="text-2xl font-semibold dark:text-white">
                  The Spark of Curiosity
                </h3>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  As the call came in, I couldn't help but wonder: what if the
                  call connected instantly, without requiring me to grant
                  permission? Could technology make it happen seamlessly? This
                  one question sparked my voyage into the world of Information
                  Technology.
                </p>
                <div className="text-center">
                  <div className="grid lg:grid-cols-2 gap-3">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                      <figure className="relative w-full h-60">
                        <img
                          className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                          src={bhatmumin}
                          alt="Image Description"
                        />
                      </figure>
                      <figure className="relative w-full h-60">
                        <img
                          className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                          src={mumin}
                          alt="Image Description"
                        />
                      </figure>
                    </div>
                    <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                      <img
                        className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                        src={muminbhat}
                        alt="Image Description"
                      />
                    </figure>
                  </div>
                  <span className="mt-3 block text-sm text-center text-gray-500">
                    Discovering Passions
                  </span>
                </div>
                <h3 className="text-2xl font-semibold dark:text-white">
                  Goals Set in Stone
                </h3>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  Never have a lack of goals – that's my mantra. My sights were
                  set on discovering the answer to my first question. I aspired
                  to create an application that could access a victim's camera
                  and microphone with their consent. While Android addressed
                  this issue in later versions, it still lingers today. The key
                  to security? Avoid installing apps from unknown sources and
                  grant camera access judiciously.
                </p>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  My journey began with the basics of Information Security, and
                  with each passing day, my curiosity grew. I found myself
                  inching closer to my goal, one day at a time, which will allow
                  individual designers, startups and other small teams a chance
                  to create a culture of openness early on.
                </p>
                <blockquote className="text-center p-4 sm:px-7">
                  <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200">
                    You are a miracle, looking for a place to happen{" "}
                  </p>
                  <p className="mt-5 text-gray-800 dark:text-gray-200">
                    Mumin Bhat{" "}
                  </p>
                </blockquote>
                <figure>
                  <img
                    className="w-full object-cover rounded-xl"
                    src={mumin_bhat}
                    alt="Image Description"
                  />
                  <figcaption className="mt-3 text-sm text-center text-gray-500">
                    You are made of stardust and wished and magical things
                  </figcaption>
                </figure>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold dark:text-white">
                    Continuous improvement{" "}
                  </h3>
                  <p className="text-lg text-gray-800 dark:text-gray-200">
                    As time passed, my quest to answer that initial question
                    unknowingly laid the foundation for a promising career in
                    Information Systems Security. In 2018, after seven months of
                    unwavering dedication and hard work, I cracked the code.
                    Little did I know, this was just the beginning.
                  </p>
                </div>
                <ul className="list-disc list-outside space-y-5 pl-5 text-lg text-gray-800 dark:text-gray-200">
                  <h3 className="text-md font-semibold dark:text-white">
                    Awards & Honors
                  </h3>
                  <li className="pl-2">
                    Youngest Certified Ethical Hacker* in Jammu and Kashmir by
                    EC-Council.
                  </li>
                  <li className="pl-2">
                    One of the Youngest Entrepreneurs hailing from Jammu and
                    Kashmir.
                  </li>
                  <li className="pl-2">
                    Accomplished over 15 projects, collaborating with various
                    entities, including the government forest department.
                  </li>
                </ul>
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  I'm open to new challenges and freelance opportunities.
                  Whether you need a consultant, a developer, or a cybersecurity
                  expert, feel free to reach out. Let's discuss how we can work
                  together to bring your ideas to life and ensure the security
                  of your digital endeavors.
                </p>
                <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                  {/* Badges/Tags */}
                  <div>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Plan
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Web development
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Free
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                      href="#"
                    >
                      Team
                    </a>
                  </div>
                  {/* End Badges/Tags */}
                  <div className="flex justify-end items-center gap-x-1.5">
                    {/* Button */}
                    <div className="hs-tooltip inline-block">
                      <button
                        type="button"
                        className="hs-tooltip-toggle py-2 px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:focus:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-slate-900 dark:focus:ring-offset-blue-500"
                      >
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                        875
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-black"
                          role="tooltip"
                        >
                          Like
                        </span>
                      </button>
                    </div>
                    {/* Button */}
                    {/* Button */}
                    <div className="hs-tooltip inline-block">
                      <button
                        type="button"
                        className="hs-tooltip-toggle py-2 px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:focus:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-slate-900 dark:focus:ring-offset-blue-500"
                      >
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                        </svg>
                        16
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-black"
                          role="tooltip"
                        >
                          Comment
                        </span>
                      </button>
                    </div>
                    {/* Button */}
                    <div className="block h-3 border-r border-gray-300 mx-1.5 dark:border-gray-600" />
                    {/* Button */}
                    <div className="hs-dropdown relative inline-flex">
                      <button
                        type="button"
                        id="blog-article-share-dropdown"
                        className="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:focus:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-slate-900 dark:focus:ring-offset-blue-500"
                      >
                        <svg
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
                          />
                        </svg>
                        Share
                      </button>
                      <div
                        className="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-white shadow-2xl rounded-xl p-2 dark:bg-gray-800"
                        aria-labelledby="blog-article-share-dropdown"
                      >
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                          </svg>
                          Copy link
                        </a>
                        <div className="border-t border-gray-200 my-2 dark:border-gray-700" />
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                          Share on Twitter
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                          Share on Facebook
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                          Share on LinkedIn
                        </a>
                      </div>
                    </div>
                    {/* Button */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Content */}
          {/* Sidebar */}
          <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
            <div className="sticky top-0 left-0 py-8 lg:pl-4 lg:pl-8">
              {/* Avatar Media */}
              <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
                <a className="block flex-shrink-0" href="#">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={dp}
                    alt="Image Description"
                  />
                </a>
                <a className="group grow block" href="">
                  <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    Mumin Bhat
                  </h5>
                  <p className="text-sm text-gray-500">Full Stack Developer</p>
                </a>
                <div className="grow">
                  <div className="flex justify-end">
                    <a href="https://www.instagram.com/_.mumin/" target="blank">
                      <button
                        type="button"
                        className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded-full border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-xs"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fillRule="evenodd"
                            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                        Follow
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* End Avatar Media */}
              <div className="space-y-6">
                {/* Media */}
                <a className="group flex items-center gap-x-6" href="https://wanderblog.vercel.app" target="blank">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      Explore, Create, Share and Unleash Your Thoughts with WanderBlog
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Image Description"
                    />
                  </div>
                </a>
                {/* End Media */}
                {/* Media */}
                <a className="group flex items-center gap-x-6" href="#">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      If your UX Portfolio has this 20% Well Done, it Will Give
                      You an 80% Result
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Image Description"
                    />
                  </div>
                </a>
                {/* End Media */}
                {/* Media */}
                <a className="group flex items-center gap-x-6" href="#">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      7 Principles of Icon Design
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Image Description"
                    />
                  </div>
                </a>
                {/* End Media */}
              </div>
            </div>
          </div>
          {/* End Sidebar */}
        </div>
      </div>
      {/* End Blog Article */}
    </>
  );
};

export default AboutPage;
