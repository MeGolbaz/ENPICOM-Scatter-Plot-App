import styled from "styled-components";

export const StyledAbout = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.dark}; 
  color: ${({ theme }) => theme.color.lightGray};
`;

export const AboutContent = styled.div`
  display: flex;
  gap: 5%;
  margin-top: 6.5rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const AboutImageContainer = styled.div`
  position: relative;
  width: 45%;
  height: 28rem;
  z-index: 3;

  &::after {
    content: "";
    position: absolute;
    top: -1rem;
    left: -1rem;
    background: #fcdf3e;
    width: 100%;
    height: 100%;
    border-radius: 1px;
    z-index: -2;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 0 0;
    background: rgb(13, 14, 14, 0.199);
    z-index: 2;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    height: 20rem;
    margin-bottom: 1.75rem;

    &::after {
      content: "";
      top: -0.5rem;
      left: -0.5rem;
    }
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 1px;
`;

export const AboutDetailsContainer = styled.div`
  position: relative;
  width: 50%;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`;
