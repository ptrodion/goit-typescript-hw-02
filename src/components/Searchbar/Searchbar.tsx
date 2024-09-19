import { Formik } from 'formik';
import {
  InputStyled,
  ButtonStyled,
  FormWrapper,
  SearchForm,
} from './Searchbar.styled';
import { LuSearch } from 'react-icons/lu';
import { ISearchbarProps } from './type';

export const Searchbar = (
  { onSubmit }: ISearchbarProps,
) => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={values => {
          onSubmit(values.query.trim());
        }}
      >
        <SearchForm>
          <ButtonStyled type="submit">
            <LuSearch size={19} />
          </ButtonStyled>
          <InputStyled
            name="query"
            type="text"
            // autocomplete="off"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </FormWrapper>
  );
};
