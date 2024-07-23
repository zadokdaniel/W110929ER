import Counter from "./counter";

function Product({
  onChange,
  product: {
    id,
    title,
    category,
    description,
    image: { url, alt },
    price,
    discount,
    instock,
    quantitiy,
  },
}) {
  const discountedPrice = price * (1 - discount);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={url} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
        <p className="card-text">{description} </p>
      </div>

      <div className="card-body">
        <span className="fs-3 text-danger text-decoration-line-through">
          {price.toLocaleString()}$
        </span>
        <span className="ms-4 fs-1">{discountedPrice.toLocaleString()}$</span>

        {instock ? (
          <Counter
            onChange={onChange}
            min={0}
            max={instock}
            initialCounter={quantitiy}
          />
        ) : (
          <div>Out of Stock.</div>
        )}
      </div>
    </div>
  );
}

export default Product;
