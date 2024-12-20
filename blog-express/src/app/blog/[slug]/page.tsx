import ShareButton from "@/components/share";
import Wrapper from "@/components/wrapper";
import { formatDate } from "@/helpers/formatDate";
import { getBlogs, getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();

  return blogs.map((item) => ({
    slug: item.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  return {
    title: blog.title,
    description: blog.title,
    authors: blog.user.username,
    openGraph: {
      images: [`https:${blog.thumbnail}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  const options: Options = {
    renderMark: {
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
    },
    renderNode: {
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal mx-6">{children}</ol>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="my-4">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-2xl my-4">{children}</h2>
      ),
    },
  };

  return (
    <div
      className="z-10  h-auto"
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: "cover",
      }}
    >
      <Wrapper>
        <div className="flex mt-6 w-full ">
          <div className="flex-1 max-md:hidden sticky top-[100px]">
            <div className="flex flex-row gap-2">
              <FaArrowLeft />
              <Link href={"/"} className="sticky top-[100px] font-bold">
                {" "}
                back home
              </Link>
            </div>
            <ShareButton slug={blog.slug} />
          </div>
          <div className="flex-[2] box-content pr-56 max-lg:pr-0">
            <div className="text-sm font-bold text-green-700 uppercase">
              {blog.category}
            </div>
            <div className="text-3xl max-md:text-2xl font-bold my-4">
              {blog.title}
            </div>
            <div className="flex gap-2 text-sm">
              <span className="font-bold">{blog.user.username}</span>
              <span>∙</span>
              <span>{formatDate(blog.createdAt)}</span>
            </div>
            <div className="md:hidden">
              <ShareButton slug={blog.slug} />
            </div>
            <div className="h-[400px] max-md:h-[300px] max-sm:h-[250px] w-full relative my-4">
              <Image
                src={`${blog.thumbnail}`}
                alt={blog.slug}
                fill
                className="object-fill"
                priority
              />
            </div>
            {documentToReactComponents(blog.content, options)}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
