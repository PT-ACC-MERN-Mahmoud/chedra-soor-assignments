import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

    const EditProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
    },[]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        axios.put(`http://localhost:8000/api/products/${id}`,{
        title, 
        price, 
        description
        })
        .then((res)=>{
        console.log(res.data);
        navigate('/');
        })
        .catch((err)=>{
        console.log('POST ERROR', err);
        })
    };

    return (
        <div>
        <header>
            Edit Product
        </header>

        <form onSubmit={handleSubmit}>
            <div className="form-fields">
                <label>Title: </label>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    name="title"
                    type="text"
                />
            </div>

            <br />

            <div className="form-fields">
                <label>Price: $</label>
                <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    name="price"
                    type="number"
                />
            </div>

            <br />

            <div className="form-fields">
                <label>Description: </label>
                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    name="description"
                    type="text"
                />
            </div>

            <br />
            <button type="submit">Submit Update</button>
        </form>
    </div>
    );
};

export default EditProduct;