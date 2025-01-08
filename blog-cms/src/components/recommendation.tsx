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
          href={`${item.fields.slug}`}
          className="flex flex-row gap-2 text-sm relative"
        >
          <div className="rounded-t-lg h-[80px] w-full relative overflow-hidden">
            <Image
              className="object-cover rounded-t-lg"
              src={`https:${item.fields.thumbnail.fields.file.url}`}
              alt={item.fields.slug}
              fill
              priority
            />
          </div>
          <p className="line-clamp-2">{item.fields.title}</p>
        </Link>
      ))}
    </div>
  );
}
