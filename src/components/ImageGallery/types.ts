import { IHit } from "../Api/type";

export interface IImageGallery {
  images: IHit[];
  handlerGetLargePhotoURL: (value: string) => void;
  handlerGetAlt: (value: string) => void;
  handlerOpenModal: () => void;
}
