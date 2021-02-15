import React from 'react'

const Painting = (props) => {
    console.log(props);
    return  <div>
    <img
      src={props.url}
      alt={props.title}
      width="500" />
    <h2>{props.title}</h2>
    {/* <p>Автор: <a href={painting.author.url}
      target="_blanc">{painting.author.tag}</a></p> */}
    <p>Цена: {props.price} кредитов</p>
    <button type="button">Добавить в корзину</button>
  </div>
};

export default Painting;