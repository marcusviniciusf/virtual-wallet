import styled from 'styled-components';

export const Select = styled.div`
  height: 3rem;
  border-bottom: 2px solid var(--color-primary);
  select {
    height: 3rem;
    border: none;
    width: 100%;
    font-size: 1.6rem;
    background: transparent;
    &:focus {
      outline: none;
    }
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid var(--color-primary);
  margin: 0 1rem;
  font-size: 1.6rem;
  padding: 0rem 0.5rem;
  width: 10rem;
  height: 3rem;
  &:focus {
    outline: none;
  }
`;
