import { ErrorSt, ErrorWrapper } from './Error.styled';
import { IError } from './type';

export const Error = (
  { message }: IError
) => {
  return (
    <ErrorWrapper>
      <ErrorSt>{message}</ErrorSt>
    </ErrorWrapper>
  );
};
