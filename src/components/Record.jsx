import React from 'react'

export const Record = (props) => {

  const { name, price } = props.item;

    return (
    <>
      <div className='record'>{name}</div>
      <div>{` ${price}`}</div>
      <img src="src/png/icons8-edit-26.png" alt="edit" className='btn'/>
      <img src="src/png/icons8-delete-30.png" alt="delete" className='btn'/>
    </>
  )
}
