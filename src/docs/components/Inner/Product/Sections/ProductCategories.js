import React from "react";

const ProductCategories = (props) => {
  return (
    <p>
      Categories:
      {props.categories.length !== 0 ? (
        props.categories.map((ct, index) => {
          return (
            <small key={index} className="pl-1">
              {index !== 0 && ","}{" "}
              <span className="txt-secondary">{ct.name}</span>
            </small>
          );
        })
      ) : (
        <small>
          <span className="txt-secondary">Not found</span>
        </small>
      )}
    </p>
  );
};

export default ProductCategories;
