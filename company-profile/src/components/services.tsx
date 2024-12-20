import { getServices } from "@/libs/blog";
import { IServices } from "@/types/blog";
import React from "react";
import Card from "./card";

export default async function servicesPage() {
  const data: IServices[] = await getServices();

  return (
    <div>
      {data.map((item, idx) => {
        return (
          <div key={idx}>
            <Card
              title={item.fields.title}
              image={item.fields.thumbnail.fields.file.url}
              slug={item.fields.slug}
              input={item.fields.input}
              output={item.fields.output}
            />
          </div>
        );
      })}
    </div>
  );
}
