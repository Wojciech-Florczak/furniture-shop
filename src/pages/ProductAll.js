import React, { useContext } from "react";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import productsList from "../db.json";
import ProductCard from "../components/common/ProductCard";
import ProductSmall from "../components/common/ProductSmall";
import { createUseStyles } from "react-jss";
import Categories from "../components/ProductAll/Categories";
import paginate from "../helpers/paginate";
import Pagination from "../components/ProductAll/Pagination";
import {
  ProductsContext,
  DispatchContext
} from "../contexts/products.context.js";
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
  },
  priceFilter: {
    "& input": {
      maxWidth: 60,
      marginRight: 10
    }
  }
});

export default function ProductAll() {
  const filters = useContext(ProductsContext);
  const dispatch = useContext(DispatchContext);
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
          : product)
      );
    });
  }
  filterProducts();
  const pages = paginate(productsToDisplay.length, filters.currentPage, filters.quantity);
  return (
    <Container>
      <Row>
        <Col md={3}>
          <div>
            <h3>Filter</h3>
            <div className={classes.priceFilter}>
              <h4>Filter by Price</h4>
              <input
                type="number"
                min={1}
                max={filters.max}
                placeholder={filters.min}
                onChange={e =>
                  dispatch({
                    type: "minPrice",
                    payload: parseInt(e.target.value)
                  })
                }
              />
              <input
                type="number"
                min={1}
                placeholder={filters.max}
                onChange={e =>
                  dispatch({
                    type: "maxPrice",
                    payload: parseInt(e.target.value)
                  })
                }
              />
            </div>
            <div>
              <h3>Show</h3>
              <DropdownButton title={filters.quantity}>
                <Dropdown.Item
                  onClick={e =>
                    dispatch({
                      type: "quantity",
                      payload: parseInt(e.target.text)
                    })
                  }
                >
                  5
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={e =>
                    dispatch({
                      type: "quantity",
                      payload: parseInt(e.target.text)
                    })
                  }
                >
                  10
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={e =>
                    dispatch({
                      type: "quantity",
                      payload: parseInt(e.target.text)
                    })
                  }
                >
                  20
                </Dropdown.Item>
              </DropdownButton>
            </div>
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
          <ul className={classes.list}>
            {productsToDisplay
              .slice(pages.startIndex, pages.endIndex + 1)
              .map(product => {
                return (
                  <li key={product.id} className={classes.listItem}>
                    <ProductCard data={product} />
                  </li>
                );
              })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
