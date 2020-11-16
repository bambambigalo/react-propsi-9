import React, { useState } from "react";
import "./style-pages/style-apple.css";
import ModalMini from "./madal-pages/ModalMini.js";

export default function Apple() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div>
      {open && <ModalMini onClose={closeModal} />}

      <div className="apple">
        <h1 className="title"> Новая линейка смартфонов iPhone 12</h1>

        <div className="card-box">
          <div className="card">
            <h2 className="title">iPhone 12 mini</h2>
            <div className="image-mini" />
            <div className="box-button">
              <p className="delivery"> Бесплатная доставка</p>
              <button onClick={openModal} className="by">
                Купить
              </button>
            </div>
          </div>
          <div className="card">
            <h2 className="title">iPhone 12</h2>
            <div className="image" />
            <div className="box-button">
              <p className="delivery"> Бесплатная доставка</p>
              <button className="by">Купить</button>
            </div>
          </div>
          <div className="card">
            <h2 className="title">iPhone 12 Pro</h2>
            <div className="image-pro" />
            <div className="box-button-pro">
              <p className="delivery"> Бесплатная доставка</p>
              <button className="by">Купить</button>
            </div>
          </div>
          <div className="card">
            <h2 className="title">iPhone 12 Pro Max</h2>
            <div className="image-promax" />
            <div className="box-button-promax">
              <p className="delivery"> Бесплатная доставка</p>
              <button className="by"> Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
