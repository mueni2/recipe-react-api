import React from 'react'

const Cards = ({recipe}) => {
  const {label,image} = recipe

  return (
    <aside>
      <p>{label}</p>
    <img src={image} alt={label} />
    </aside>
  )
}

export default Cards