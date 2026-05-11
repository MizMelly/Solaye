import { client } from "../sanityClient";

export const fetchPosts = async () => {
  const query = `
    *[_type == "post"] | order(publishedAt desc){
      title,
      slug,
      excerpt,
      category,
      mainImage,
      publishedAt
    }
  `;

  return await client.fetch(query);
};