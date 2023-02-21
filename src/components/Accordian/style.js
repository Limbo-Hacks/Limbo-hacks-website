import styled from 'styled-components';

export const Panel = styled.div`
  background-color: #c8ccf4;
  border-radius: 12px;
  margin-top: 10px;

  .panel__label {
    display: block;
    width: 100%;
    background: none;
    border-radius: 12px;
    border: none;
    text-align: left;
    padding: 27px 65px 27px 30px;
    font-weight: 400;
    font-size: 18px;
    font-family: inherit;
    transition: color 0.1s linear;
    cursor: pointer;
    color: black;
    height: fit-content;
    position: relative;
  }
  .panel__label:focus {
    outline: none;
  }
  .panel__label:after,
  .panel__label:before {
    content: '';
    position: absolute;
    right: 25px;
    top: 50%;
    width: 22px;
    height: 2px;
    margin-top: -2px;
    background-color: #372717;
  }
  .panel__label:before {
    transform: rotate(-90deg);
    transition: transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  &[aria-expanded='true'] .panel__content {
    opacity: 1;
  }
  &[aria-expanded='true'] .panel__label:before {
    transform: rotate(0deg);
  }
  .panel__inner {
    overflow: hidden;
    will-change: height;
    transition: height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  .panel__content {
    margin: 5px 25px 25px;
    font-size: 17px;
    color: #494948;
    opacity: 0;
    transition: opacity 0.3s linear 0.18s;
  }
  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

export const Accordion = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
`;
