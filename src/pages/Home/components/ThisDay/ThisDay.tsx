import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.scss';

type Props = {}

export const ThisDay = (props: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>10° </div>
          <div className={s.this_day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id='sun'/>
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}> Время: <span>22:54</span></div>
        <div className={s.this_city}> Город: <span>Екатеринбург</span></div>


      </div>
    </div>
  )
}