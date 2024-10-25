import React from 'react'
import { useState, useEffect } from "react";
import ItemList from './ItemList'
import { getAlimentos } from "../../services/services";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { clase } = useParams();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);

    getAlimentos(clase).then((response) => {
      setItems(response);
      setIsLoading(false);

    });
  }, [clase]);

  return <ItemList productos={items} isLoading={isLoading} />;
};

export default ItemListContainer;