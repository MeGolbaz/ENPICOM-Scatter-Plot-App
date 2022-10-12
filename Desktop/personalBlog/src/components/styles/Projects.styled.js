import styled, { css } from "styled-components";

export const HoverStyle = css`
  content: "";
  position: absolute;
  bottom: -0.3rem;
  right: 0;
  left: 0;
  width: 0;
  // height: 0.10px;
  background: ${({ theme }) => theme.backgroundColor.light};
  transition: 0.2s ease-in-out;
`;

export const Flex = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledProjects = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.light};
  color: ${({ theme }) => theme.color.darkGray};
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 3rem;
`;



export const ProjectDetails = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 2.5rem 1rem;
  color: #fff;
  background: linear-gradient(
    250deg,
    transparent,
    rgba(13, 14, 14, 0.97),
    rgba(0, 0, 0, 0.9)
  );
  transform: translateY(80%);
  opacity: 0;
  pointer-events: none;
  transition: 0.9s ease;
  margin-top: .5rem;
  z-index: 5;
`;

export const ProjectTitle = styled.span``;

export const LinkName = styled.span``;

export const ProjectpublisherLink = styled.a`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: ${({ theme }) => theme.color.light};
  font-size: 14px;
  ${Flex}

  ${LinkName}::after {
    ${HoverStyle}
  }

  ${LinkName}:hover::after {
    width: 100%;
  }
`;


export const ProjectCard = styled.article`
  background: #fff;
  width: 32rem;
  height: 23rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    inset: 0 0 0 0;
    background: rgb(13, 14, 14, 0.1);
    z-index: 2;
  }

  &:hover {
    box-shadow: 0 2px 15px rgba(13, 14, 14) 15%;
  }

  &:hover ${ProjectDetails} {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }


  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 25rem;
  }
  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;
