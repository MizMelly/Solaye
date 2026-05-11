import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";


export const client = createClient({
  projectId: "5aio0jd9",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-01",
});
// IMAGE BUILDER (VERY IMPORTANT)
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);