// @flow
import * as React from 'react';
import { breakpoints } from '~/styles';
import styled, { css } from 'styled-components';

type Props = {
  modalOpen: boolean,
  onClose: Function,
  children?: React.Node,
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.7); */
  z-index: 10001;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  z-index: ${props => (props.isOpen ? 10000 : -1)};
`;

const ModalContent = styled.div`
  position: relative;
  /* min-width: 40rem;
  max-width: 50rem; */
  width: 50rem;
  padding: 2rem;
  border-radius: 3px;
  box-shadow: var(--box-shadow);
  background-color: var(--color-white);
  transition: transform 0.3s cubic-bezier(0, 0, 0.25, 1) 0s,
    opacity 0.3s cubic-bezier(0, 0, 0.25, 1) 0s;
  @media (max-width: ${breakpoints.small}) {
    min-width: auto;
    width: 100%;
    padding: 1rem;
  }
  ${props => (props.isOpen
    ? css`
          transform: translate3d(0, 0, 0);
          z-index: 10002;
          opacity: 1;
        `
    : css`
          z-index: -1;
          opacity: 0;
          overflow: hidden;
          transform: translate3d(0, 15rem, 0);
        `)};
`;

const ModalComponent = (props: Props) => {
  const { modalOpen, onClose, children } = props;
  return (
    <>
      <Modal isOpen={modalOpen}>
        <ModalContent isOpen={modalOpen}>{children}</ModalContent>
        <Overlay isOpen={modalOpen} onClick={onClose} />
      </Modal>
    </>
  );
};

ModalComponent.defaultProps = {
  children: null,
};

export default ModalComponent;
