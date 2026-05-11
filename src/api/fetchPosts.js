import { client } from "../sanityClient";

export const fetchPosts = async () => {
  const query = `
    *[_type == "post"] | order(publishedAt desc){
      title,
      slug,
      category,
      excerpt,
      publishedAt,
      mainImage
    }
  `;

  return await client.fetch(query);
};