import React from "react";
import "./style-modal/modal-mini.css";
import ReactDOM from "react-dom";

export default function ModalMini(props) {
  const { onClose } = props;
  let colors = [
    {white : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-white-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343707000'},
    {black : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343705000'},
    {blue : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-blue-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343706000'},
    {green : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-green-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343706000'},
    {red :  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-red-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343707000"}
    
  ]

  return ReactDOM.createPortal(
    <div>
      <div className="modal-overlay">
        <div className="modal-window">
          <div className="header">
            <h1 className="title-modal">Купить iPhone 12 Mini </h1>
            <p onClick={onClose} className="close">
              Выбрать другой iPhone
            </p>
          </div>

          <div className="content">
          <div className="view">
          {colors.map (color => {
            return (
              <div  key={color.red} > {color.red} </div>
            )
          })}
            </div>
            <div className="colors">
              <h2> Выберите цвет</h2>
              <button className="button-color">Графитовый</button>
              <button className="button-color">Серебристый</button>
              <button className="button-color">Золотой</button>
              <button className="button-color">Тихоокеанский синий</button>
              <button className="button-color">(PRODUCT)RED</button>
            </div>
          </div>

          <div className="footer">
            <button onClick={onClose}> Закрыть</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root-portal")
  );
}
