import React from "react";
const page = ({ params }) => {
  const { id } = params;
  console.log(id);
  return (
    <div>
      <h1>blog {id}</h1>
    </div>
  );
};

export default page;
