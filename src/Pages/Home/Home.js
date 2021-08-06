import { faMapMarkerAlt, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Containers/Container/Container';
import data from "../../Data/Homedata/homedata";
import HomeWrapper from './HomeWrapper';
import ThemeContext from '../../ThemeContex';
const Home = () => {

    const { colors } = useContext(ThemeContext)

    const [inputvalue, setinputvalue] = useState("")
    const typing = (event) => {
        setinputvalue(event.target.value);
        console.log(inputvalue);
    }
    const clear = () => {
        setinputvalue("");
    }

    return (
        <Container>
            <HomeWrapper colors={colors}>
                <div className="searchbox">
                    <div className="container p-0 search__content">
                        <div className="row p-0 m-0">
                            <div className="col-md-12 col-lg-7  search__input-box p-0 m-0">
                                <input type="text" onChange={typing} value={inputvalue} className="form-control searchinput py-4 shadow-none border-0  rounded-0"
                                    placeholder="753 275 объявлений рядом" />
                                <span className="searchicon">
                                    <FontAwesomeIcon icon={faSearch} />
                                </span>
                                <span className={`searchtimes ${inputvalue == "" ? "" : "d-block"}`} onClick={clear}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </div>
                            <div className="col-md-12 bg-transparent col-lg-5">
                                <div className="row">
                                    <div className="col-9 py-4 px-0 search__gorod position-relative px-5">
                                        Весь Узбекистан
                                        <span className="searchicon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </span>
                                    </div>
                                    <div className="col-3 py-4 px-0 text-center search__btn">
                                        Поиск <FontAwesomeIcon icon={faSearch} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <h1 className="text-center">Главные категории</h1>
                    <div className="category__box">
                        {
                            data.map(v =>
                                <Link className="category text-center mb-3" to={v.to}>
                                    <div className="circle mx-auto mb-3" style={{ backgroundColor: v.color }}>
                                        <img src={v.img} className="w-100" alt="" />
                                    </div>
                                    <p>{v.title}</p>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </HomeWrapper>
        </Container>
    )
}

export default Home
