import Card from "@/components/card";
import Wrapper from "@/components/wrapper";
import { getServices } from "@/libs/blog";
import { IServices } from "@/types/blog";

export default async function servicesPage() {
  const data: IServices[] = await getServices();

  return (
    <div
      className="hero bg-base-100 min-h-screen"
      style={{
        backgroundImage: "url('/svg/waveAboutUs1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Wrapper>
        <div className="flex flex-col justify-center items-center text-center my-10">
          <div className="text-3xl md:text-4xl font-bold mb-8"><span className="text-[#2596be]">Our</span> Services</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item, idx) => (
              <div key={idx}>
                <Card
                  title={item.fields.title}
                  slug={item.fields.slug}
                  image={item.fields.thumbnail.fields.file.url}
                  input={item.fields.input}
                  output={item.fields.output}
                />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
