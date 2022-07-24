import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Product = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log('ERROR by ID', err);
            });
    }, [id]);
    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            navigate(`/`);
        })
        .catch((err) => console.log('Error',err));
    };
    const mainProductPage = () => {
        axios.get(`http://localhost:8000/api/products/`)
        .then((res) => {
            navigate(`/`);
        })
        .catch((err) => console.log('Error',err));
    };
    return (
        <div className="App">
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <br />
            <button onClick={deleteProduct}>Delete</button>
            <span> | </span>
            <button onClick={mainProductPage}>Go Back</button>
        </div>
    );
};

export default Product;