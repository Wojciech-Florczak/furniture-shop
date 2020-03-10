import React, { useContext } from "react";
import productsList from "../../db.json";
import getCategories from "../../helpers/getCategories";
import { ListGroup } from "react-bootstrap";
import {
  DispatchContext,
  ProductsContext
} from "../../contexts/products.context.js";

export default function Categories({ productsToDisplay }) {
  const dispatch = useContext(DispatchContext);
  const filters = useContext(ProductsContext);

  const categoriesList = Object.keys(getCategories(productsList));
  const displayed = getCategories(productsToDisplay);

  function countQuantity() {
    const counted = {};
    for (let cat of categoriesList) {
      counted[cat] = displayed[cat] || 0;
    }
    return counted;
  }
  const countedList = countQuantity();

  const renderCategories = Object.entries(countedList).map(category => {
    const isActive = filters.category === category[0];
    return (
      <ListGroup.Item
        style={{ textTransform: "capitalize" }}
        active={isActive}
        key={category[0]}
        onClick={() => dispatch({ type: "CATEGORY", payload: category[0] })}
      >
        {category[0]} ({category[1]})
      </ListGroup.Item>
    );
  });

  return (
    <div>
      <h4>Categories</h4>
      <ListGroup>{renderCategories}</ListGroup>
    </div>
  );
}
