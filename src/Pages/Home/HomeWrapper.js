import styled from "styled-components";


const HomeWrapper = styled.div`

.searchbox {
    padding: 40px 0;
    background-color: ${props => props.colors.searchBox};
    color: ${props => props.colors.color};
}
.search__content {
    color: ${props => props.colors.color};
    background-color: ${props => props.colors.whiteColor} !important;
}
.searchinput {
    background-color: transparent;
    padding: 0 60px;
    color: ${props => props.colors.color};
}

.search__input-box {
    position: relative;
}

.search__gorod {
    background-image: ${props => props.colors.bacgroundColor};
    border-left: 0.5px solid #b6b6b685;
}

.search__gorod .searchicon {
    left: 5%;
}

.search__btn {
    background-image: ${props => props.colors.bacgroundColor};
    border-left: 0.5px solid #b6b6b685;
    font-weight: 700;
}

.search__btn:hover {
    background-color: #002F34;
    color: white;
}

.searchtimes, .searchicon {
    position: absolute;
    font-size: 22px;
}

.searchicon {
    top: 50%;
    left: 3%;
    transform: translate(-3%, -50%);
}

.searchtimes {
    top: 50%;
    right: 3%;
    transform: translate(-3%, -50%);
    display: none;
}

.category__box {
    margin-top: 39px;
    display: flex;
    flex-wrap: wrap;
    overflow-wrap: anywhere;
}

.category {
    max-width: 137px;
    flex: 0 0 137px;
    position: relative;
    padding: 0 6px;
 
}
.category p {
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.colors.color};
}

.category:hover p{
    background-color: ${p => p.colors.color};
    color: ${p => p.colors.hovercolor};
}

.category .circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
  
  @media screen and (max-width: 768px) {
    .category__box{
      justify-content: center;
    }
  }


`

export default HomeWrapper;