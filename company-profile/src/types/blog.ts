import { Document } from "@contentful/rich-text-types";

export interface IServices {
  fields: {
    title: string;
    ourServices: Document;
    slug: string;
    input: string;
    output: string;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
