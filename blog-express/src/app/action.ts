import { revalidateTag } from "next/cache";

export default async function action(tags: string) {
  revalidateTag(tags);
}
