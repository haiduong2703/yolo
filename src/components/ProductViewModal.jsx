import React from "react";

import ProductView from "./ProductView";
import Button from "./Button";

import productData from "../assets/fake-data/products";

const ProductViewModal = () => {
  const product = productData.getProductBySlug("quan-jean-phong-cach-18");
  return (
    <div
      className={`product-view___modal ${
        product === undefined ? "" : "active"
      }`}
    >
      <div className="product-view___modal__content">
        <ProductView product={product} />
        <div className="product-view___modal__content__close">
          <Button size="sm">Đóng</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
