import Image from "next/image";
import Link from "next/link";
import React from "react";
import photo from "@/public/photo.png";

const page = () => {
  const blog = [
    {
      id: 1,
      title: "Blog 1",
      content: "This is the content of blog 1.",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "This is the content of blog 2.",
    },
    {
      id: 3,
      title: "Blog 3",
      content: "This is the content of blog 3.",
    },
  ];
  return (
    <div>
      {blog.map((item, index) => {
        return (
          <div key={index}>
            <Link href={`/blog/${item.id}`}>
              <h1>{item.title}</h1>
            </Link>

            <p>{item.content}</p>
          </div>
        );
      })}

      <Image src={photo} alt="Vercel Logo" />
    </div>
  );
};

export default page;
