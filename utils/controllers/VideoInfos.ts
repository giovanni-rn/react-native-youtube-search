import { VideoInfos } from "../types/VideoInfos";
/* MOCK-start */
import mockVideoInfos from "../../assets/mock/VideoInfos.json"
const typedMockVideoInfos = mockVideoInfos as unknown as VideoInfos
/* MOCK-end */

/**
 * Search list of videos
 * @fromInput Query string
 * @return List of found videos
 */
export const getVideoInfos = async (videoID: string): Promise<VideoInfos | null> => {
    console.log("QUERY : ", videoID);
    const url = `https://youtube138.p.rapidapi.com/video/details/?id=${videoID}&hl=fr&gl=FR`;
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
        // const result: VideoInfos = await response.json();
        // console.log(`Fetched infos from ${result.title}`);
        // return result
        /* MOCK-start */
        console.log(`Mocked infos from ${typedMockVideoInfos.title}`);
        return typedMockVideoInfos
        /* MOCK-end */
    } catch (error) {
        console.error(error);
        return null
    }
};