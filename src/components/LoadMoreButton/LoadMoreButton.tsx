import React, { ForwardedRef } from 'react';
import { BeatLoader } from 'react-spinners';
import { LoadMoreButtonStyled } from './LoadMoreButton.styled';
import { ILoadMoreButtonProps } from './type';

export const LoadMoreButton = React.forwardRef(
  (
    { clickLoadMore, loading }: ILoadMoreButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <div>
        <LoadMoreButtonStyled type="button" onClick={clickLoadMore} ref={ref}>
          {loading ? (
            <>
              Loading <BeatLoader size={5} color="#ffffff" />
            </>
          ) : (
            'Load More'
          )}
        </LoadMoreButtonStyled>
      </div>
    );
  }
);
