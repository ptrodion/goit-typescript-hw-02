import { GalleryItems } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGallerySt } from './ImageGallery.styled';
import { IImageGallery } from './types';

export const ImageGallery = ({
  images,
  handlerGetLargePhotoURL,
  handlerGetAlt,
  handlerOpenModal,
}: IImageGallery) => {

  return (
    <ImageGallerySt>
      {images.map((image, index) => (
        <GalleryItems
          key={`${image.id}-${index}`}
          images={image}
          handlerGetLargePhotoURL={handlerGetLargePhotoURL}
          handlerGetAlt={handlerGetAlt}
          handlerOpenModal={handlerOpenModal}
        />
      ))}
    </ImageGallerySt>
  );
};
