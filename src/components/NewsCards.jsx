import React from "react";

const NewsCards = () => {
  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 sm:items-center gap-8">
          <div className="sm:order-2">
            <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                alt="Image Description"
              />
            </div>
          </div>
          {/* End Col */}
          <div className="sm:order-1">
            <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              Business insight
            </p>
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
              <a
                className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                href="#"
              >
                How to get buy-in and budget for direct hiring
              </a>
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              necessitatibus tempora temporibus amet quas similique atque sint
              adipisci, commodi iure nostrum magnam quos architecto accusantium
              laudantium sed optio esse sit impedit quod quae labore. Non at
              perspiciatis delectus rerum qui ducimus totam dolor doloremque vel
              quia iste voluptatibus est, obcaecati fuga. Veritatis et nulla
              explicabo exercitationem itaque, laudantium animi est aspernatur
              porro excepturi doloribus quidem labore iure quo provident
              voluptate fugit consectetur. Nisi voluptas nemo adipisci impedit
              animi omnis neque, tempora amet a sunt tempore possimus reiciendis
              minima iste ipsum distinctio labore quasi facere molestiae saepe
              fuga libero commodi. Accusamus?
            </p>
            {/* Avatar */}
            <div className="mt-6 sm:mt-10 flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 sm:h-14 sm:w-14 rounded-full"
                  src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="sm:mb-1 font-semibold text-gray-800 dark:text-gray-200">
                  Louise Donadieu
                </p>
                <p className="text-xs text-gray-500">
                  Strategic Marketing Consultant
                </p>
              </div>
            </div>
            {/* End Avatar */}
            <div className="mt-5">
              <a
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                href="#"
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
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </>
  );
};

export default NewsCards;
