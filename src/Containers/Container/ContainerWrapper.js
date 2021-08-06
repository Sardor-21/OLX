import styled from "styled-components";
const ContainerWrapper = styled.div`
.content {
  min-height: 450px;
}
background-image: ${props => props.colors.backgroundColor};  
color: ${props => props.colors.color};
`;
export default ContainerWrapper;