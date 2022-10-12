import styled from "styled-components";

export const ParallaxContainer = styled.div`
  height: 65vh;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 45vh;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 38vh;
  }
`;

export const ParallaxText = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  color: darkorange;
  width: 100%;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 0.50rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.50rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.50rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 0.9rem;
  }
`;
