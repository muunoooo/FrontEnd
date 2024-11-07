import Wrapper from "@/components/wrapper";
import { getBlogs, getBlogSLug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";

// Fetch static params for blog slugs
export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();
  return blogs.map((item) => ({ slug: item.fields.slug }));
};

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSLug(params.slug);
  return {
    title: blog.fields.title,
    description: blog.fields.title,
    authors: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`],
    },
  };
}

// Blog detail component
export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSLug(params.slug);

  if (!blog) return <p>Blog not found.</p>;

  // Destructure fields for convenience
  const { category, title, thumbnail, content } = blog.fields;
  const thumbnailUrl = `https:${thumbnail.fields.file.url}`;

  return (
    <div
      className="relative h-auto flex bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("/background.jpg")' }}
    >
      <Wrapper>
        <div className="flex flex-col gap-3 items-center text-center text-white">
          <CategoryLabel category={category} />
          <BlogTitle title={title} />
          <ThumbnailImage src={thumbnailUrl} alt="Blog Thumbnail" />
          <BlogContent content={content} />
        </div>
      </Wrapper>
    </div>
  );
}

// Subcomponents
function CategoryLabel({ category }: { category: string }) {
  return (
    <p className="bg-white text-black font-bold text-medium w-auto px-4 py-2 rounded-md">
      {category}
    </p>
  );
}

function BlogTitle({ title }: { title: string }) {
  return (
    <h1 className="bg-white text-black font-bold text-lg w-auto px-4 py-2 rounded-md">
      {title}
    </h1>
  );
}

function ThumbnailImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={400}
      className="object-cover rounded-md"
    />
  );
}

function BlogContent({ content }: { content: Document }) {
  return (
    <div className="prose lg:prose-xl mt-4">
      {documentToReactComponents(content)}
    </div>
  );
}
