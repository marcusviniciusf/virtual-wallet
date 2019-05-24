import styled, { css } from 'styled-components';

const Button = styled.a`
  &,
  &:visited,
  &:link {
    text-transform: capitalize;
    text-decoration: none;
    position: relative;
    font-size: 1.8rem;
    border-radius: 3rem;
    border-radius: 5px;
    padding: 1.3rem 3rem;
    cursor: pointer;
    transition: all 0.2s;
    display: inline-block;
    ${props => (props.outlined
    ? css`
            border: 0.5px solid var(--color-grey);
            color: var(--color-greyDark);
            &:hover {
              border-color: var(--color-primary);
            }
          `
    : css`
            background: var(--color-primary);
            color: var(--color-white);
            &:hover {
              background: var(--color-primary-dark);
            }
          `)};
    ${({ disabled, outlined }) => disabled
      && !outlined
      && css`
        cursor: not-allowed;
        opacity: 0.3;
      `}
  }
`;

Button.defaultProps = {
  disabled: false,
  outlined: false,
};

export const ButtonSecondary = styled.a`
  &,
  &:visited,
  &:link {
    text-transform: capitalize;
    text-decoration: none;
    font-size: 2.2rem;
    color: var(--color-primary);
    padding: 1rem 2.5rem;
    border: 1px solid var(--color-primary);
    transition: all 0.3s;
    cursor: pointer;
  }
  &:hover {
    transform: translateY(-3px);
    background-color: var(--color-primary);
    color: var(--color-white);
  }
  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  }
`;

export default Button;
