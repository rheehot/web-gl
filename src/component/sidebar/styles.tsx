import styled from "styled-components/macro";

export const SideBar = styled.div`
  margin: 0rem 10rem;
`;

interface SideBarContainerProps {
  backgroundColor?: string;
}

export const SideBarContainer = styled.div<SideBarContainerProps>`
  height: 80rem;
  width: 20rem;

  display: flex;
  justify-content: center;

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "inherit"};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
`;
