import Image from "next/image";
import Link from "next/link";

interface ICardBlog {
  title: string;
  thumbnail: string;
  avatar: string;
  email: string;
  author: string;
  slug: string;
  category: string;
}

export default function Card({
  title,
  thumbnail,
  avatar,
  author,
  slug,
  category,
}: ICardBlog) {
  return (
    <div className="bg-black border border-gray-200 rounded-lg shadow w-full hover:scale-105">
      <div className="rounded-t-lg h-[200px] w-full relative overflow-hidden">
        <Image
          className="object-cover rounded-t-lg"
          src={`https:${thumbnail}`}
          alt="Neil image"
          fill
          priority
        />
      </div>

      <div className="p-4">
        <h5 className="mb-2 text-md font-bold tracking-tight
         text-black dark:text-white line-clamp-2">
          {title}
        </h5>
        <h2 className="mb-2 text-md tracking-tight
         text-white dark:text-white line-clamp-2">
          tema: {category}
        </h2>
        <div className="flex items-center my-2">
          <div className="w-10 h-10 relative">
            <Image
              className="rounded-full object-cover"
              src={`https:${avatar}`}
              alt={author}
              fill
              priority
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              by : {author}
            </p>
            {/* <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {email}
            </p> */}
          </div>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center px-3 py-2 
          text-sm font-medium text-center text-black 
          bg-white rounded-lg hover:bg-teal-80
          0 focus:ring-4 focus:outline-none focus:ring-teal-300
           dark:bg-white dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
