export interface Video {
    type: "video"
    video: {
        lengthSeconds: number
        movingThumbnails: Thumbnail[]
        publishedTimeText: string
        stats: {
            views: number
        }
        thumbnails: Thumbnail[]
        title: string
        videoId: string
        author: {
            avatar: Thumbnail
            channelId: string
            title: string
        }
    }
}

type Thumbnail = {
    height: number
    url: string
    width: number
}