import React from 'react'

import classes from './Card.module.css'

const Card = props => {
  const classCSS = `${classes.card} ${props.className}`

  return <div className={classCSS}>{props.children}</div>
}

export default Card
