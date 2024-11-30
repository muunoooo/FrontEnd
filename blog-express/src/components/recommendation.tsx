import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecommendationBlog({ blogs }: { blogs: IBlog[] }) {
  return (
    <div className="flex flex-col gap-5">
      <p>Read more...</p>
      {blogs.map((item, idx) => (
        <Link
          key={idx}
          href={`${item.slug}`}
          className="flex flex-row gap-2 text-sm relative"
        >
          <div className="w-[100px] h-[100px] relative">
            <Image
              className="object-fill hover:scale-110"
              src={`https:${item.thumbnail}`}
              alt={item.slug}
              fill
            />
          </div>
          <p className="line-clamp-2">{item.title}</p>
        </Link>
      ))}
    </div>
  );
}
