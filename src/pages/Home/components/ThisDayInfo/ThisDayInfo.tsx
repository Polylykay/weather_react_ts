import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';

type Props = {}

export const ThisDayInfo = (props: Props) => {
  const items = [{
    icon_id: '',
    name: '',
    value: ''
  }]
  return (
    <div className={s.this_day_info}>
          <div className={s.this_day_info_items}> </div>
          <img src={cloud} alt=''/>
    </div>
  )
}