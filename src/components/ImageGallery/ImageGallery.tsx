import { IHit } from '../Api/type';
import { GalleryItems } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGallerySt } from './ImageGallery.styled';
import { IImageGallery } from './types';

export const ImageGallery = ({
  images,
  handlerGetLargePhotoURL,
  handlerGetAlt,
  handlerOpenModal,
}: IImageGallery) => {

  const uniqueImages: IHit[] = images.reduce<IHit[]>((acc, current) => {
    const exists = acc.find(item => item.id === current.id);
    if (!exists) {
      acc.push(current);
    }
    return acc;
  }, []);

  return (
    <ImageGallerySt>
      {uniqueImages.map(({ id, ...images }) => (
        <GalleryItems
          key={id}
          images={images}
          handlerGetLargePhotoURL={handlerGetLargePhotoURL}
          handlerGetAlt={handlerGetAlt}
          handlerOpenModal={handlerOpenModal}
        ></GalleryItems>
      ))}
    </ImageGallerySt>
  );
};
