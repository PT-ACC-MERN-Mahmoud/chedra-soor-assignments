import React, {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    const {productList, setProductList} = props;
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err) => console.log('Error',err));
    },[]);
    return (
    <div>
        <header>All Products</header>
        {
            productList.map((product, index) => (
                <div key ={index}>
                    <Link to={`/products/${product._id}`}>
                        {product.title}
                    </Link>
                </div>
            ))
        }
    </div>
    );
};

export default AllProducts;