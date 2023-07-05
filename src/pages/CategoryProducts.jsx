import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {data} from "../data";
import Product from '../components/Product'

const CategoryProducts = () => {
  const { name } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let p = data.filter((product) => product.category === name);

    setProducts(p);
  }, []);


};

export default CategoryProducts;
