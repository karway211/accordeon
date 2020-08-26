import React from 'react';
import s from './ElemBlock.module.css';
import { useState } from 'react';

const ElemBlock = ({question}) => {
  let [plus, setPlus] = useState(false);
  return (
    <div className={s.wrapper}>
      <div className={s.accordion}>
        <div className={plus ? `${s.button} ${s.buttonActive}` : s.button} onClick={()=>setPlus(plus ? plus=false : plus=true)}>
          <div className={plus ? `${s.plus} ${s.plusActive}` : s.plus}>
            <div className={plus ? `${s.line} ${s.lineActive}`: s.line}></div>
            <div className={plus ? `${s.line} ${s.lineActive}`: s.line}></div>
          </div>
        </div>
        <div>
          <span className={s.question}>{question}</span>
          <div className={s.contentwrapper}>
            <p className={plus ? s.content :`${s.content} ${s.contentDefault}`}>
              При заказе до 17:00 доставка осуществляется в день заказа. Среднее время доставки 2 часа. Доставка осуществляется до 20:00 ежедневно.
              Мы работаем без выходных и праздников, чтобы Вы всегда могли кушать вкусную и здоровую еду!
              <span>Доставка осуществляется бесплатно  при заказе от 1500 руб. по г.Москва в пределах МКАД</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElemBlock;
