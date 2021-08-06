import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ContainerWrapper';
import React, { useContext } from 'react';
import ContainerWrapper from "./ContainerWrapper";
import ThemeContext from '../../ThemeContex';
const Container = (props) => {
    const { colors } = useContext(ThemeContext);
    return (
        <ContainerWrapper colors={colors} >
            <Header />
            <div className="content">{props.children} </div>
            <Footer />
        </ContainerWrapper >
    )
}

export default Container


