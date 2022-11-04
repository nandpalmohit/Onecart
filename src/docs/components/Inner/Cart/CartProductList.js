import React from "react";

const CartProductList = (props) => {
  props.cartContainer.forEach((value) => {
    console.log(value);
  });

  console.log(props.cartContainer);

  return (
    <>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">IMAGE</th>
            <th scope="col">PRODUCT NAME</th>
            <th scope="col"> UNIT PRICE</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">TOTAL</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default CartProductList;
