import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"; // keep default import

export const client = createClient({
  projectId: "5aio0jd9", 
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-01",
});

// image builder
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
