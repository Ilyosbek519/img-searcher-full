import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} YourApp. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Privacy</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Terms</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </footer>
  );
}
