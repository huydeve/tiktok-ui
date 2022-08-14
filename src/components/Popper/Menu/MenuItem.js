import Button from '@/components/Button'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
const cx = classNames.bind(styles);
export default function MenuItem({data, onClick, className}) {
    const {icon, title, to, separate} = data

    const classes = cx(className ||'menu-item', {
      separate: separate
    }) 


  return (
    
    <>
     
      <Button className={classes} leftIcon={icon} to={to} onClick={onClick}>{title}</Button> <br/>
    
    </>
  )
}
