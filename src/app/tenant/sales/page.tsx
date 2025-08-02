import React from "react";

const page = () => {
  const passage = "I am Bro. i need red car";
  return (
    <div className="p-6 space-y-6 ">
      <h1 className="text-2xl font-bold">Welcome to the Sales Dashboard</h1>
      {Array.from({ length: 100 }).map((_, index) => (
        <p key={index} className="text-gray-700 leading-relaxed">
          {passage}
        </p>
      ))}
    </div>
  );
};

export default page;
