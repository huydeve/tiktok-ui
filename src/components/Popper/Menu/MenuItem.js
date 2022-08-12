import Button from '@/components/Button'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
const cx = classNames.bind(styles);
export default function MenuItem({data}) {
    const {icon, title, to} = data
  return (
    <><Button className={cx('menu-item')} leftIcon={icon} to={to}>{title}</Button> <br/></>
  )
}
