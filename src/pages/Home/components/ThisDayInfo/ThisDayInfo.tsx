import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItems } from './ThisDayItems';

type Props = {}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = (props: Props) => {
  const items = [{
    icon_id: 'temp',
    name: ' Температура',
    value: ' +10° - ошущается как +8°'
  }, {
    icon_id: 'pressure',
    name: 'Давление',
    value: ' 568 мм ртутного столба - нормальное '
  }, {
    icon_id: 'precipitation',
    name: 'Осадки',
    value: 'Без осадков'
  }, {
    icon_id: 'wind',
    name: 'Ветер',
    value: '3 м/с северо-запад - лёгкий ветер'
  }

  ]
  return (
    <div className={s.this_day_info}>
      <div className={s.this_day_info_items}> 
      {items.map((item: Item) => (
          <ThisDayItems key={item.icon_id} item={item} />
        ))}
      </div>
      <img src={cloud} alt='облако' />
    </div>
  )
}