import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import productsList from "../db.json";
import ProductCard from "../components/common/ProductCard";
import ProductSmall from "../components/common/ProductSmall";
import { createUseStyles } from "react-jss";
import Categories from "../components/ProductAll/Categories";
import paginate from "../helpers/paginate";
import Pagination from "../components/ProductAll/Pagination";
import { ProductsContext } from "../contexts/products.context.js";
import QuantityToShow from "../components/ProductAll/QuantityToShow.js";
import PriceRange from "../components/ProductAll/PriceRange.js";
import SearchBox from "../components/ProductAll/SearchBox";
const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 0
  },
  listItem: {
    flexBasis: "33%",
    padding: 10
  }
});

export default function ProductAll() {
  const filters = useContext(ProductsContext);
  const classes = useStyles();
  let productsToDisplay = productsList;

  function filterProducts() {
    productsToDisplay = productsToDisplay.filter(product => {
      return (
        // price range
        product.price >= filters.min &&
        product.price <= filters.max &&
        // selected category
        (filters.category.length > 0
          ? product.category === filters.category
          : product) &&
        // search query
        product.name.toLowerCase().includes(filters.searchQuery)
      );
    });
  }
  filterProducts();

  const pages = paginate(
    productsToDisplay.length, // Number of items
    filters.currentPage, // Current page
    filters.quantity //Number of items per page
  );

  const renderProducts = productsToDisplay
    .slice(pages.startIndex, pages.endIndex + 1)
    .map(product => {
      return (
        <li key={product.id} className={classes.listItem}>
          <ProductCard data={product} />
        </li>
      );
    });

  return (
    <Container>
      <Row>
        <Col md={3}>
          <div>
            <h3>Filter</h3>
            <SearchBox />
            <PriceRange />
            <QuantityToShow />
            <Categories productsToDisplay={productsToDisplay} />
            <div>
              <h4>Hot Sale</h4>
              <ProductSmall data={productsList[0]} />
              <ProductSmall data={productsList[1]} />
              <ProductSmall data={productsList[2]} />
            </div>
          </div>
        </Col>
        <Col md={9}>
          <Pagination productsToDisplay={productsToDisplay} pages={pages} />
          <ul className={classes.list}>{renderProducts}</ul>
        </Col>
      </Row>
    </Container>
  );
}
