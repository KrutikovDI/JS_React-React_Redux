import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_RECORDS, CHANGE_ID } from '../redux/actions'
import { Record } from './Record'


export const MainApp = () => {
  const [ form, setForm ] = useState({
    text: '',
    price: 0
  })

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => (
      {
      ...prevForm, [name]: value
    }))
  }

  const dispatch = useDispatch();
  const { id, records } = useSelector((state) => state.writing)

  const hendleSave = () => {
    if(id == '') {
      dispatch({type: CHANGE_RECORDS, payload: form})
    } else {
      Array.from(records).map(item => {
        if (item.id==id) {item.text = form.text; item.price = form.price}
      })
    }
    setForm(prevForm => ({
      ...prevForm, text: '', price: 0
    }))
    dispatch({type: CHANGE_ID, payload: ''});
  }

  const handleCorrect = (e) => {
    const { text, price } = records.find(item => item.id == e.target.id)
    setForm(prevForm => ({
      ...prevForm, text: text, price: price
    }))
    dispatch({type: CHANGE_ID, payload: e.target.id})
  }

  const handleDelete = () => {
    setForm(prevForm => ({
      ...prevForm, text: '', price: 0
    }))
    dispatch({type: CHANGE_ID, payload: ''});
  }

  return (
    <div>
      <div className='form'>
        <input name='text' type="text" className='input' value={form.text} onChange={handleNameChange}/>
        <input name='price' type="number" className='input' value={form.price} onChange={handleNameChange}/>
        <button className='btn' onClick={hendleSave}>Save</button>
        <button className='btn' onClick={handleDelete}>Cancel</button>
      </div>
      <ul className='records'>
        {Array.from(records).map((record)=>(
          <li key={record.id} className='li'>
            <Record item={record} handler={handleCorrect}/>
          </li>
        ))}
      </ul>
    </div>
  )
}
