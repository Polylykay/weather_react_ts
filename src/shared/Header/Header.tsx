import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import Select from 'react-select';

type Props = {}

export const Header = (props: Props) => {
  const options = [
    { value: 'city_1', label: 'Екатеринбург' },
    { value: 'city_2', label: 'Москва' },
    { value: 'city_3', label: 'Ереван' }
  ]

  const colorStyles = {
    control: (styles: any) => ({ ...styles, backgroundColor: 'rgba(71, 147, 255, 0.2)', width: '300px', height: '45px', border: 'none', borderRadius: '15px', zIndex: 100, })
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}> <GlobalSvgSelector id='header-logo' /> </div>
        <div className={s.title}> Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}> <GlobalSvgSelector id='change-theme' />
        </div>
        <Select defaultValue={options[0]} styles={colorStyles} options={options} />
      </div>

    </header>
  )
}