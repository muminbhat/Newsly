import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import api from "../store/api";


const NewsCards = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await axios.get(api);
                setArticles(res.data.articles);
                console.log(res.data);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
    
        fetchArticles();
    }, []);
    
  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        {articles.map((articles) => (
            <div key={articles.id}>
        <div className="grid sm:grid-cols-2 sm:items-center gap-8">
          <div className="sm:order-2">
            <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
              <img
                className="w-md h-md absolute top-0 left-0 object-cover rounded-3xl lg:mt-20 md:max-h-80 max-h-64"
                src={articles.urlToImage}
                alt="Image Description"
                />
            </div>
          </div>
          {/* End Col */}
          <div className="sm:order-1 lg:mb-20 md:mb-20">
            <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              
            </p>
            <h2 className="text-2xl font-bold md:text-2xl lg:text-2xl lg:leading-tight xl:text-3xl xl:leading-tight text-gray-800 dark:text-gray-200">
              <a
                target="blank"
                className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                href={articles.url}
                >
                {articles.title}
              </a>
            </h2>
            <p>
              {articles.description.slice(0, 100)}
            </p>
            {/* Avatar */}
            <div className="mt-6 sm:mt-10 flex items-center">
              <div className="">
                <p className="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
                  Author: {articles.author}
                </p>
                <p className="text-xs text-gray-500">
                  Source: {articles.source.name}
                </p>
                <p className="text-xs text-gray-500">
                  Published on: {articles.publishedAt.slice(0, 10)}
                </p>
              </div>
            </div>
            {/* End Avatar */}
            <div className="mt-5">
              <a
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                href={articles.url}
              >
                Read more
                <svg
                  className="w-2.5 h-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    />
                </svg>
              </a>
            </div>
          </div>
          {/* End Col */}
        </div>
        <hr className="mb-20 mt-10 md:mb-0 md:mt-0 md:relative md:bottom-20 lg:mb-0 lg:mt-0 w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>

        ))}
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </>
  );
};

export default NewsCards;
