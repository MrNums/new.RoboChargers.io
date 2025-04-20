import React from "react";
import { Helmet } from "react-helmet";

export default function Store() {
  return (
    <>
      <Helmet>
        <title>RoboChargers - Store</title>
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6">RoboChargers Store</h1>
        <div className="bg-white shadow-md rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
          <p className="text-gray-600 mb-8">
            Our team merchandise and products will be available here soon. Check back later!
          </p>
          <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">Store content under development</p>
          </div>
        </div>
      </div>
    </>
  );
}