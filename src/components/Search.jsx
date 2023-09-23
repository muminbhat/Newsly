import { useState, useEffect } from "react";
import axios from "axios";
import key from "../api/key";
import PropagateLoader from 'react-spinners/PropagateLoader'
const swal = require("sweetalert2");

const Search = ({search}) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(search)
  
    useEffect(() => {
        // Create a separate function to handle the API request
        const fetchSearchResults = async () => {
          if (!search) {
            return;
          }
    
          setLoading(true);
          setArticles([]);
          const api = `https://gnews.io/api/v4/search?q=${search}&apikey=${key}`; 
    
          try {
            const res = await axios.get(api);
            setArticles(res.data.articles);
            setLoading(false);
            console.log(res.data.articles);
          } catch (err) {
            console.error("Error fetching data:", err);
            setLoading(false);
            swal.fire({
              title: "Something Went Wrong",
              icon: "error",
              toast: true,
              timer: 6000,
              position: "top-right",
              timerProgressBar: false,
              showConfirmButton: false,
            });
          }
        };
    
        fetchSearchResults(); // Call the function when search changes
      }, [search]); // Add search as a dependency    
  return (
    <>
      {loading ? (
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <PropagateLoader color="#3B82F6" speedMultiplier={1.5} />
        </div>
      ) : (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          {articles.map((article, index) => (
            <div key={index}>
              <div className="grid sm:grid-cols-2 sm:items-center gap-8">
                <div className="sm:order-2">
                  <div className="md:mb-5 mt-5 flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full">
                    <img
                      className="w-full h-full absolute top-0 left-0 object-cover"
                      src={article.image}
                      alt="Image Description"
                    />
                  </div>
                </div>
                {/* End Col */}
                <div className="sm:order-1 lg:mb-20 md:mb-20">
                  <h2 className="text-2xl font-bold md:text-2xl lg:text-2xl lg:leading-tight xl:text-3xlxl:leading-tight text-gray-800 dark:text-gray-200">
                    <a
                      target="_blank"
                      className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                      href={article.url}
                    >
                      {article.title}
                    </a>
                  </h2>
                  {/* Description */}
                  <p>{article.description}</p>
                  {/* Avatar */}
                  <div className="mt-6 sm:mt-10 flex items-center">
                    <a target="blank" href={article.source.url}>
                      <p className="text-xs text-gray-800">
                        Source:{" "}
                        <span className="text-gray-500 underline">
                          {article.source.name}
                        </span>
                      </p>
                    </a>
                  </div>
                  {/* End Avatar */}
                  <div className="mt-5">
                    <a
                      className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                      href={article.url}
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
          {/* End Grid */}
        </div>
      )}
    </>
  );
};

export default Search