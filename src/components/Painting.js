import React from 'react'
import PropTypes from 'prop-types';

const Painting = ({url, title, profileUrl, tag, price, quantity}) => (
   
  <div>
    <img
      src={url}
      alt={title}
      width="500" />
    <h2>{title}</h2>
      {<p>
        Автор: <a href={profileUrl} target="_blank">{tag}</a>
      </p>}
    <p>Цена: {price} кредитов</p>
    <p>Статус: {quantity < 10 ? "заканчивается" : "есть в наличии"}</p> 
    <button type="button">Добавить в корзину</button>
  </div>
);

Painting.defaultProps = {
  url: "https://www.tkchocolate.ru/wp-content/uploads/default-image.png",
  
}

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;