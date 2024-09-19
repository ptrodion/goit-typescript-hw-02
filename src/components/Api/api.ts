import axios from "axios";
import { IApiResponce } from "./type";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = "38394341-6bad80d83243545401e924dfe";

export const fetchImages = async (
  query: string,
  page: number
): Promise<IApiResponce> => {
  const params: Record<string, string> = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    page: String(page),
    per_page: "12",
  };

  const searchParams = new URLSearchParams(params).toString();

  const response = await axios.get(`?${searchParams}`);
  return response.data;
};
