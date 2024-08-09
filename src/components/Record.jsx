export const Record = (props) => {

  const { text, price, id } = props.item;

    return (
    <>
      <div className='record'>{text}</div>
      <div>{` ${price}`}</div>
      <img id={id} src="src/png/icons8-edit-26.png" alt="edit" className='btn' onClick={props.handler}/>
      <img src="src/png/icons8-delete-30.png" alt="delete" className='btn'/>
    </>
  )
}
