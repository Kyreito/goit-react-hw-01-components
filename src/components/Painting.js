import React from 'react'

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

export default Painting;