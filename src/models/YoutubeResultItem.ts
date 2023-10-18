export interface YoutubeResultItem {
  id: {
    kind: string
    videoId: string
  }
  kind: string
  snippet: {
    channelId: string
    channelTitle: string
    description: string
    publishedAt: Date
    thumbnails: {
      medium: {
        height: 180
        url: 'https://i.ytimg.com/vi/htgr3pvBr-I/mqdefault.jpg'
        width: 320
      }
    }
    title: string
    publishTime: Date
  }
}
