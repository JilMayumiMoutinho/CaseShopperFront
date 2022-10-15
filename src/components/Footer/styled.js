import styled from "styled-components";

export const Container = styled.footer`
  background-image: linear-gradient(to bottom, #666666, #eaeaea, #ffffff);
  display: flex;
  align-items: center;
  padding: 0.625rem;
  margin-top: 1rem;
  width: 100%;
  height: 6.25rem;
  font-size: small;
  justify-content: space-evenly;
`;

export const DivContact = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  justify-content: space-between;
  img {
    width: 48px;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  justify-content: space-between;
`;
