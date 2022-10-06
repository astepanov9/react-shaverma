import React from "react";

function ShavermaBlock({ title, price, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  return (
    <div className="shaverma-block">
      <img className="shaverma-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="shaverma-block__title">{title}</h4>
      <div className="shaverma-block__selector">
        <ul>
          {types.map((types, index) => (
            <li
              key={index}
              onClick={() => setActiveType(index)}
              className={activeType === index ? "active" : ""}
            >
              {types}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((sizes, index) => (
            <li
              key={index}
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? "active" : ""}
            >
              {sizes}
            </li>
          ))}
        </ul>
      </div>
      <div className="shaverma-block__bottom">
        <div className="shaverma-block__price">{price} руб.</div>
        <button className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>0</i>
        </button>
      </div>
    </div>
  );
}

export default ShavermaBlock;