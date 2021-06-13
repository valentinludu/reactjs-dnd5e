import { get } from "axios";

export const fetchData = async ({ queryKey }) => {
  const [, url] = queryKey;
  if (!url.includes("undefined")) {
    try {
      const baseUrl = process.env.REACT_APP_DND_API;
      const { data } = await get(`${baseUrl}/api/${url}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
