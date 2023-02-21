import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15rem;
  width: 100%;
  background-blend-mode: soft-light;
  background-size: cover;
  background-position: center center;
  padding: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  .bird {
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);
    background-size: auto 100%;
    width: 88px;
    height: 125px;
    will-change: background-position;
    animation-name: fly-cycle;
    animation-timing-function: steps(10);
    animation-iteration-count: infinite;
    pointer-events: none;

    &--one {
      animation-duration: 1s;
      animation-delay: -0.5s;
    }

    &--two {
      animation-duration: 0.9s;
      animation-delay: -0.75s;
    }

    &--three {
      animation-duration: 1.25s;
      animation-delay: -0.25s;
    }

    &--four {
      animation-duration: 1.1s;
      animation-delay: -0.5s;
    }
  }

  .bird-container {
    position: absolute;
    top: 20%;
    left: -10%;
    transform: scale(0) translateX(-10vw);
    will-change: transform;

    animation-name: fly-right-one;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    &--one {
      animation-duration: 15s;
      animation-delay: 0;
    }

    &--two {
      animation-duration: 16s;
      animation-delay: 1s;
    }

    &--three {
      animation-duration: 14.6s;
      animation-delay: 9.5s;
    }

    &--four {
      animation-duration: 16s;
      animation-delay: 10.25s;
    }
  }

  @keyframes fly-cycle {
    100% {
      background-position: -900px 0;
    }
  }

  @keyframes fly-right-one {
    0% {
      transform: scale(0.3) translateX(-10vw);
    }

    10% {
      transform: translateY(2vh) translateX(10vw) scale(0.4);
    }

    20% {
      transform: translateY(0vh) translateX(30vw) scale(0.5);
    }

    30% {
      transform: translateY(4vh) translateX(50vw) scale(0.6);
    }

    40% {
      transform: translateY(2vh) translateX(70vw) scale(0.6);
    }

    50% {
      transform: translateY(0vh) translateX(90vw) scale(0.6);
    }

    60% {
      transform: translateY(0vh) translateX(110vw) scale(0.6);
    }

    100% {
      transform: translateY(0vh) translateX(110vw) scale(0.6);
    }
  }

  @keyframes fly-right-two {
    0% {
      transform: translateY(-2vh) translateX(-10vw) scale(0.5);
    }

    10% {
      transform: translateY(0vh) translateX(10vw) scale(0.4);
    }

    20% {
      transform: translateY(-4vh) translateX(30vw) scale(0.6);
    }

    30% {
      transform: translateY(1vh) translateX(50vw) scale(0.45);
    }

    40% {
      transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
    }

    50% {
      transform: translateY(0vh) translateX(90vw) scale(0.45);
    }

    51% {
      transform: translateY(0vh) translateX(110vw) scale(0.45);
    }

    100% {
      transform: translateY(0vh) translateX(110vw) scale(0.45);
    }
  }

  @media (max-width: 570px) {
    display: none;
  }
`;
