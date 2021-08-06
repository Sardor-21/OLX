import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Container from '../../Containers/Container/Container';
import './Category.css';
import datas from './../../Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartsolid } from '@fortawesome/free-solid-svg-icons';
const Category = () => {
    const { category } = useParams();
    const [like, setlike] = useState(true);

    const data = datas[category];
    console.log(data);
    const hearth = (i) => {
        let array = [...datas[category]];
        array[i].like = !array[i].like;
        console.log(array[i])
        setlike(!like);
        return { array };
    }
    return (
        <Container>
            <div className="py-5 container">
                <h1 className="mb-3">Category: {category}</h1>
                <div className="row">
                    {data?.map((v, i) => <div className="col-md-6 col-lg-4 col-xl-3 mb-5">
                        <div className="h-100 w-100 shadow p-3 rounded-3 d-flex flex-column justify-content-between">
                            <Link to={`/${category}/${v.id}`}>
                                <img src={v.img} className="w-100 mb-3 rounded-3 product__img" alt="" />
                                <p className="fw-bold"> {v.title}</p>
                                <span>{v.price}</span>
                                <br />
                                <p>
                                {like? "" : ""}
                                </p>
                            </Link>
                            <span className={`d-flex justify-content-between align-items-end`}>
                                {v.location} <span onClick={() => hearth(i)} style={{ cursor: "pointer" }}><FontAwesomeIcon icon={v.like ? heartsolid : faHeart} /></span>
                            </span>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </Container>
    )
}

export default Category
