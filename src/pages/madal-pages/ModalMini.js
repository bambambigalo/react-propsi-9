import React from "react";
import "./style-modal/modal-mini.css";
import ReactDOM from "react-dom";

export default function ModalMini(props) {
  const { onClose } = props;

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
            <div className="view" />
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
