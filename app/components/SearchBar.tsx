import React from "react";
import Form from "next/form";

const SearchBar = () => {
  return (
    <Form
      action="/search"
      className="relative w-full max-w-md mx-auto"
    >
      <input
        type="text"
        name="query"
        placeholder="Enter phone name..."
        className="w-full rounded-full border border-gray-300 pl-5 pr-20 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
      />
      <button
        type="submit"
        className="absolute right-1 top-1 bottom-1 px-5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 hover:shadow-md transition-all duration-200"
      >
        Find
      </button>
    </Form>
  );
};

export default SearchBar;
