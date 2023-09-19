import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

const NewsCards = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1); // Initial page number
  const pageSize = 5; // Number of articles to load per page

  const options = {
    method: "GET",
    url: "https://real-time-news-data.p.rapidapi.com/top-headlines",
    params: {
      country: "IN",
      lang: "en",
      pageSize: pageSize,
      page: page, // Include the page parameter
    },
    headers: {
      "X-RapidAPI-Key": "5c1bfb2dd3msh55d7935bdb31452p10391djsnb356de7ac33d",
      "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.request(options);
        setArticles(res.data.data);
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []); // Include 'options' as a dependency to fetch data when it changes

  const loadMore = () => {
    // Increment the page number to load more data
    const nextPage = page + 1;
    setPage(nextPage);

    // Fetch the next page of articles
    axios
      .request({
        ...options,
        params: {
          ...options.params,
          page: nextPage,
        },
      })
      .then((res) => {
        // Append the new articles to the existing articles
        setArticles([...articles, ...res.data.data]);
      })
      .catch((err) => {
        console.error("Error fetching more data:", err);
      });
  };

  // Display only the first 'pageSize' articles
  const displayedArticles = articles.slice(0, pageSize);

  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        {displayedArticles.map((article) => (
          <div key={article.id}>
            <div className="grid sm:grid-cols-2 sm:items-center gap-8">
              <div className="sm:order-2">

              <div className="md:mb-5 mt-5 flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full">
                  <img
                    className="w-full h-full absolute top-0 left-0 object-cover"
                    src={article.photo_url}
                    alt="Image Description"
                  />
                </div>
                {/* <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
                  <img
                    className="w-100 h-100 absolute top-0 left-0 object-cover rounded-3xl lg:mt-200 min-w-200 max-w-200 min-h-200 max-h-200"
                    src={article.photo_url}
                    alt="Image Description"
                  />
                </div> */}
              </div>
              {/* End Col */}
              <div className="sm:order-1 lg:mb-20 md:mb-20">
                <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"></p>
                <h2 className="text-2xl font-bold md:text-2xl lg:text-2xl lg:leading-tight xl:text-3xl xl:leading-tight text-gray-800 dark:text-gray-200">
                  <a
                    target="blank"
                    className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                    href={article.link}
                  >
                    {article.title}
                  </a>
                </h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem eligendi asperiores dicta, veniam sit fugit fuga vel dolore quasi officia! Commodi ipsam quas accusamus voluptate facere, ipsa, nobis nam labore recusandae aperiam odit possimus dignissimos tempora consequuntur doloribus blanditiis?
                {/* <p>{"article.description.slice(0, 200)"}...</p> */}
                {/* Avatar */}
                <div className="mt-6 sm:mt-10 flex items-center">
                  <>
                  <a href={article.source_url}>
                    <div className="flex-shrink-0 relative w-[20]  overflow-hidden w-[20] h-[20px] before:absolute before:inset-x-0 before:w-full before:h-full">
                      <img
                        className="h-full w-full sm:h-full sm:w-full object-cover "
                        src={article.source_logo_url}
                        alt="Image Description"
                      />
                    </div>
                    </a>
                  </>
                </div>
                {/* End Avatar */}
                <div className="mt-5">
                  <a
                    className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                    href={article.link}
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
            <hr className="mb-20 mt-10 lg:mb-0 lg:mt-0 w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          </div>
        ))}
        {displayedArticles.length < articles.length && (
          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-pink-100 border border-transparent font-semibold text-pink-500 hover:text-white hover:bg-pink-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            onClick={loadMore}
          >
            Load More
          </button>
        )}

        {/* End Grid */}
      </div>

      {/* End Card Blog */}
    </>
  );
};

export default NewsCards;
