import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        console.log("useEffect", categoryId);
        
        setIsLoading(true);
        getProducts(categoryId)
            .then((response) => {
                setItems(response);
                setIsLoading(false);
            });
    }, [categoryId]);

    return (
        <div>
            <ItemList items={items} isLoading={isLoading} />
        </div>
    );
};

export default ItemListContainer;