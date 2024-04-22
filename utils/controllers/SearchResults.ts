import { VideoItem } from "../types/VideoItem";
/* MOCK-start */
import mockSearchResults from "../../assets/mock/SearchResults.json"
const typedMockSearchResults = mockSearchResults as unknown as { contents: VideoItem[] }
/* MOCK-end */

/**
 * Search list of videos
 * @fromInput Query string
 * @return List of found videos
 */
export const getSearchResults = async (query: string): Promise<VideoItem[] | []> => {
    console.log("QUERY : ", query);
    const url = `https://youtube138.p.rapidapi.com/search/?q=${query}&hl=fr&gl=FR`;
    console.log("URL : ", url);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '33a38a48e2msh345936a2215c570p1a003cjsn277d5a16ce04',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    try {
        // const response = await fetch(url, options);
        // const result = await response.json();
        // console.log(`Fetched ${result.contents.length} videos`);
        // return result.contents
        /* MOCK-start */
        console.log(`Mocked ${typedMockSearchResults.contents.length} videos`);
        return typedMockSearchResults.contents
        /* MOCK-end */
    } catch (error) {
        console.error(error);
        return []
    }
};