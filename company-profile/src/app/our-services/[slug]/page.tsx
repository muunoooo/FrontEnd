import Wrapper from "@/components/wrapper";
import { getServices, getServicesgSLug } from "@/libs/blog";
import { IServices } from "@/types/blog";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = async () => {
  const services: IServices[] = await getServices();

  return services.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const services: IServices = await getServicesgSLug(params.slug);

  return {
    title: services.fields.title,
    openGraph: {
      images: [`https:${services.fields.thumbnail.fields.file.url}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const services: IServices = await getServicesgSLug(params.slug);

  const options: Options = {
    renderMark: {
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="my-4">{children}</p>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h2 className="text-2xl my-4 font-bold text-white">{children}</h2>
      ),
    },
  };

  return (
    <Wrapper>
      <div className="flex mt-6 mx-5">
        <div className="flex-1 max-md:hidden sticky top-[100px]">
          <div className="flex flex-row gap-2">
            <Link
              href={"/our-services"}
              className="fixed top-[100px] font-bold"
            >
              {" "}
              back to services
            </Link>
          </div>
        </div>
        <div className="flex-[2] box-content pr-56 max-lg:pr-0">
          <div className="md:hidden flex flex-row gap-2">
            <Link
              href={"/our-services"}
              className="sticky top-[100px] font-bold"
            >
              {" "}
              back home
            </Link>
          </div>
          <div className="text-3xl max-md:text-2xl font-bold my-4">
            {services.fields.title}
          </div>
          <div className="h-[400px] max-md:h-[300px] max-sm:h-[250px] w-full relative my-4">
            <Image
              src={`https:${services.fields.thumbnail.fields.file.url}`}
              alt={services.fields.slug}
              fill
              className="object-fill"
              priority
            />
          </div>
          <div>
            {documentToReactComponents(services.fields.ourServices, options)}
          </div>
          <div className="md:hidden">
            <Link href={"/our-services"}>
              <button className="btn glass">Back To Services</button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
