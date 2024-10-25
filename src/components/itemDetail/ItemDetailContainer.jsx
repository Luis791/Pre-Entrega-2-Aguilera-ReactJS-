import React from 'react'
import ItemDetail from './ItemDetail'
import { getAlimento } from "../../services/services";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getAlimento(id).then((response) => {
       setItem(response);
    });
  }, [id]);

  return <ItemDetail producto={item} />;
}

export default ItemDetailContainer