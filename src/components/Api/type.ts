export interface IHit {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  webformatURL: string;
  largeImageURL: string;
  previewHeight: number;
  previewWidth: number;
  webformatHeight: number;
  webformatWidth: number;
  imageHeight: number;
  imageWidth: number;
  imageSize: number;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user: string;
  user_id: number;
  userImageURL: string;
  collections: number;
}

export interface IApiResponce {
  hits: IHit[];
  total: number;
  totalHits: number;
}
