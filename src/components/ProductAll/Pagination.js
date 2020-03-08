import React, { useContext } from "react";
import PaginationBs from "react-bootstrap/Pagination";
import { DispatchContext } from "../../contexts/products.context.js";

export default function Pagination({ productsToDisplay, pages }) {
  const dispatch = useContext(DispatchContext);
  let totalItems = productsToDisplay.length;
  let notEmpty = productsToDisplay.length > 0;

  let active = pages.currentPage;
  let items = [];
  for (let num = 1; num <= pages.pages.length; num++) {
    items.push(
      <PaginationBs.Item
        key={num}
        active={num === active}
        onClick={() => dispatch({ type: "pageChange", payload: num })}
      >
        {num}
      </PaginationBs.Item>
    );
  }
  return (
    <div>
      {notEmpty ? (
        <>
          <h3>
            Displaying {pages.startIndex + 1}-{pages.endIndex + 1} of{" "}
            {totalItems} products.
          </h3>
          <PaginationBs>{items}</PaginationBs>
        </>
      ) : (
        <h3>No products to show</h3>
      )}
    </div>
  );
}
