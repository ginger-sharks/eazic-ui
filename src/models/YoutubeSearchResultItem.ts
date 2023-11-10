export interface YoutubeSearchResultItem {
  id: string
  snippet: {
    title: string
    description: string
    thumbnails: {
      high: {
        url: string
      }
    }
    publishedAt: string
  }
}
