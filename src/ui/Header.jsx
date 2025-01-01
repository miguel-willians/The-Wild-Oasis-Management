import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: 1 solid var(--color-grey-100);
  padding: 1.2rem 4.8rem;
  background-color: var(--color-grey-0);
`;

function Header() {
  return <StyledHeader>header</StyledHeader>;
}

export default Header;
