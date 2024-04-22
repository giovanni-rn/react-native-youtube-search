import { Image } from "./VideoItem"

export interface VideoInfos {
    author: {
        avatar: Image[]
        channelId: string
        stats: {
            subscribers: number
            subscribersText: string
        }
        title: string
    }
    category: string
    description: string
    lengthSeconds: number
    publishedDate: string
    stats: {
        comments: number
        likes: number
        views: number
    }
    thumbnails: Image[]
    title: string
    videoId: string
}