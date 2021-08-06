import React from 'react'
import Container from '../../Containers/Container/Container';
import { useParams } from 'react-router-dom';
import datas from '../../Data';

const Products = (props) => {
  const { category, id } = useParams();
  const data = datas[category];
  const details =  data.filter(v => v.id == id)[0].details;
  console.log(details)

  return (
      <Container>

<div className={`container py-5`}>
    { details ?  <div className="row">
            {
                <div className={`col-12`}>
                    <div className="d-flex">
                        <img src={details.img} className={`w-25 product__img`} alt=""/>
                        <div>
                            <p>{details.title}</p>
                            <p>{details.price}</p>
                            <p>{details.location}</p>
                        </div>
                    </div>
                </div>
            }
        </div> : <p>Bunday Product Yoq</p>
    }
</div>
      </Container>
  )
}

export default Products;
