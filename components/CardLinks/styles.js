import styled, { keyframes } from 'styled-components';

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;


const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;

const rubberBand = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

export const CardLinks = styled.section`
  width: 100%;
  margin-top: 1rem;

  .container {
    background: ${({ theme }) => theme.box};
    width: 100%;
    height: max-content;
    padding: 10px 0 0 10px;
    border-left: 3px solid ${({ theme }) => theme.textLow};
    position: relative;
    margin-top: 2rem;
    animation: ${fadeInDown} 400ms both;
    animation-iteration-count: 1;
    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      a {
        overflow: hidden;
        text-overflow: ellipsis;
        box-shadow: inset 0 -6px ${({ theme }) => theme.primary};
        font-family: 'Poppins_Bold', -apple-system, Roboto, Ubuntu, Cantarell,
          sans-serif;
        transition: box-shadow 0.4s ease-in-out;
        &:hover {
          box-shadow: inset 0 -6px ${({ theme }) => theme.primaryHover};
          animation: ${Pulse} 400ms both;
        }
      }
      img {
        display: block;
        position: absolute;
        top: 15px;
        right: 0;
        margin-right: 10px;
        outline: 0;
        border: 0;
        cursor: pointer;
        background: rgba(0, 0, 0, 0);
        &:hover {
          animation: ${rubberBand} 400ms backwards;
          transform-style: preserve-3d;
        }
      }
    }
    .added {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      p {
        font-size: clamp(10px, 2vw, 0.6rem);
        font-family: 'Poppins_Bold', -apple-system, Roboto, Ubuntu, Cantarell,
          sans-serif;
        margin-right: 10px;
      }
    }
  }
`;

export const HR = styled.hr`
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  height: 1px;
  border: none;
  opacity: 0.2;
  animation: ${zoomIn} 400ms both;
`;
