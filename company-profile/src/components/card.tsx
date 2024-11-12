import Image from "next/image";
import Link from "next/link";

interface ICardBlog {
  title: string;
  image: string;
  slug: string;
  input: string;
  output: string;
}

export default function Card({ title, image, slug, input, output }: ICardBlog) {
  return (
    <div
      className="bg-black border flex flex-col 
    justify-center items-center object-center border-gray-200 rounded-lg shadow w-[200px] h-[440px] hover:scale-95"
    
    >
      <div className="rounded-t-lg h-[200px] w-full relative">
        <Image
          className="rounded-t-lg"
          src={`https:${image}`}
          alt="Neil image"
          fill
          priority
        />
      </div>
      <div className="p-4">
        <h5 className="mb-2 text-md font-bold tracking-tight text-black dark:text-white line-clamp-1">
          {title}
        </h5>
        <p className="text-sm">
          {" "}
          <span className="text-white">Input</span> : {input}
        </p>
        <p className="text-sm">
          {" "}
          <span className="text-white">Output</span> : {output}
        </p>

        <Link
          href={`/our-services/${slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
