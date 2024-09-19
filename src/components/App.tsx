import { useState, useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { fetchImages } from './Api/api';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';
import { CustomModal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { IHit } from './Api/type';


export const App = () => {
  const scrollLoadMoreButtonRef = useRef<HTMLButtonElement>(null);

  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<IHit[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [largePhotoURL, setLargePhotoURL] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async (): Promise<void> => {
      setLoading(true);
      setError(false);
      try {
        const currentQuery = String(query.split('/')[1]);
        const response = await fetchImages(currentQuery, page);

        const { totalHits: totalImages, hits: data } = response;

        if (totalImages === 0) {
          toast.error('Nothing found for this query.');
          setImages([]);
          setQuery('');
        } else {
          setImages(prevState => [...prevState, ...data]);
          setIsLoadMore(page < Math.ceil(totalImages / 12));
        }
      } catch (error: unknown) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, query]);

  const onSubmit = (query: string) => {
    setImages([]);
    setIsLoadMore(false);
    if (query) {
      setQuery(`${Date.now()}/${query}`);
      setPage(1);
    } else {
      setQuery('');
      setPage(0);
      toast('Fill in the search word', {
        icon: '👈',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  };

  const handlerLoadMore = (): void => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    const buttonRef = scrollLoadMoreButtonRef.current;
    if (images.length && page !== 1) {
      window.scrollTo({
        top: buttonRef?.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [images, page]);

  const openModal = (): void => {
    setShowModal(prevState => !prevState);
  };

  const handlerGetLargePhotoURL = (value: string): void => {
    setLargePhotoURL(value);
  };

  const handlerGetDescription = (value: string): void => {
    setDescription(value);
  };

  return (

    <Layout>
      <Searchbar onSubmit={onSubmit} />
      {page === 0 && isLoading && <Loader />}

      {isError && <Error message={'What went wrong, try again.'} />}

      {images.length > 0 && (
        <>
          <ImageGallery
            images={images}
            handlerGetLargePhotoURL={handlerGetLargePhotoURL}
            handlerGetAlt={handlerGetDescription}
            handlerOpenModal={openModal}
          />

          {isLoadMore && (
            <LoadMoreButton
              clickLoadMore={handlerLoadMore}
              ref={scrollLoadMoreButtonRef}
              loading={isLoading}
            />
          )}
        </>
      )}
      {isShowModal && (
        <CustomModal
          modalIsOpen={isShowModal}
          src={largePhotoURL}
          alt={description}
          closeModal={openModal}
        />
      )}
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </Layout>
  );
};
