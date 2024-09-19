import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
import { IGalleryItemsProps } from './types';

export const GalleryItems = ({
  images: { webformatURL, tags, largeImageURL },
  handlerGetLargePhotoURL,
  handlerGetAlt,
  handlerOpenModal,
}: IGalleryItemsProps) => {
  return (
    <GalleryItem>
      <GalleryItemImg
        src={webformatURL}
        alt={tags}
        width="350"
        onClick={() => {
          handlerGetLargePhotoURL(largeImageURL);
          handlerGetAlt(tags);
          return handlerOpenModal();
        }}
      />
    </GalleryItem>
  );
};
