import styled from "styled-components";

const HeaderWrapper = styled.header`
  .logo {
    height: 45px;
  }
background-image: ${props => props.colors.backgroundColor};
color: ${props => props.colors.color};
`;

export default HeaderWrapper;