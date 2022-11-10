import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

type ShavermaObj = {
  title: string;
  imageUrl: string;
  price: number;
}

const FullShaverma: React.FC = () => {
  const [shaverma, setShaverma] = React.useState<ShavermaObj>({
    title: '',
    imageUrl: '',
    price: 0,
  });
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`https://632864fba2e90dab7bdf12d2.mockapi.io/items/${id}`)
      .then((res) => setShaverma(res.data));
  }, []);

  return (
    <>
      <h2 className="content__title">{shaverma.title}</h2>
      <div className="full">
        <div className="shaverma-block">
          <img className="shaverma-block__image" src={'/' + shaverma.imageUrl} alt="Pizza" />
        </div>
        <div className="full__desc">
          <p>
            Сытное, мясное блюдо, которое покорило миллионы сердец. Сотни вариаций приготовления, но
            итог всегда один - божественный вкус!
          </p>
          <p>
            <b>Факт: </b>впервые в России блюдо под названием "Шаурма" появилось в Москве в 1989
            году;
          </p>
          <div className="shaverma-block__selector">
            <ul>
              <li className="active">обычный лаваш</li>
              <li className="">сырный лаваш</li>
            </ul>
            <ul>
              <li className="active">mini</li>
              <li className="">medium</li>
              <li className="">big</li>
            </ul>
          </div>
          <div className="shaverma-block__bottom">
            <div className="shaverma-block__price">{shaverma.price} руб.</div>
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
      </div>
    </>
  );
};

export default FullShaverma;
