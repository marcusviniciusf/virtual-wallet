import styled from 'styled-components';
import { breakpoints } from '~/styles';

export default styled.div`
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 100rem;
  @media (max-width: ${breakpoints.medium}) {
    padding: 2rem;
  }
  @media (max-width: ${breakpoints.small}) {
    padding: 1rem;
  }
`;
