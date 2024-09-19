export interface IGalleryItemsProps {
  images: {
    webformatURL: string;
    tags: string;
    largeImageURL: string;
  };
  handlerGetLargePhotoURL: (url: string) => void;
  handlerGetAlt: (tags: string) => void;
  handlerOpenModal: () => void;
}
