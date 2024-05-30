function ProductList(props) {
  return (
    <div>
      <h2>Products</h2>
      <div className="list flex gap-15">
        {props.list.map((product) => (
          <div key={product.id} className="product">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
