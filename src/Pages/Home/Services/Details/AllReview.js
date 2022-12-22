import React from "react";

const AllReview = ({ reviews }) => {
  const { UserImage, title, date, rating, email, name } = reviews;
  return (
    <article className="p-5 w-full ">
      <div className="flex items-center mb-4 space-x-4">
        {UserImage ? (
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={UserImage} alt="" />
          </div>
        ) : (
          <>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
          </>
        )}
        <div className="space-y-1 font-medium dark:text-white">
          <p>
            {name ? name : "Abdullah"}{" "}
            <time
              datetime="2014-08-16 19:00"
              className="block text-sm  dark:text-gray-400"
            >
              Joined on August 2014 at {date}
            </time>
          </p>
        </div>
      </div>
      <div className="flex items-center mb-1">
        {[...Array(rating).keys()].map((i) => (
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
        <h3 className="ml-2 text-sm font-semibold  dark:text-white">{email}</h3>
      </div>

      <p className="mb-2   dark:text-gray-400">{title}</p>
      <aside>
        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
          <a
            href="#"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Helpful
          </a>
          <a
            href="#"
            className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Report abuse
          </a>
        </div>
      </aside>
    </article>
  );
};

export default AllReview;
