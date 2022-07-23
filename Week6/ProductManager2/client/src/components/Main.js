import React, {useState} from 'react';
import NewProduct from './NewProducts';
import AllProducts from './AllProducts';

const Main = (props) => {
    const [productList, setProductList] = useState([]);
    return (
        <div>
            <NewProduct productList= {productList} 
            setProductList= {setProductList}/>
            <AllProducts productList= {productList} 
            setProductList= {setProductList}/>
        </div>
    );
};

export default Main;