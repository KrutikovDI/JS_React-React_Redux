import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_TEXT, CHANGE_PRICE, CHANGE_RECORDS, CHANGE_ID } from '../redux/actions'
import { Record } from './Record'


export const MainApp = () => {
  const dispatch = useDispatch();
  const { text, price, id, records } = useSelector((state) => state.writing)

  const hendleSave = () => {
    if(id == '') {
      dispatch({type: CHANGE_RECORDS})
    } else {
      Array.from(records).map(item => {
        if (item.id==id) {item.text = text; item.price = price}
      })
    }
    dispatch({type: CHANGE_TEXT, payload: ''});
    dispatch({type: CHANGE_PRICE, payload: 0});
    dispatch({type: CHANGE_ID, payload: ''});
  }

  const handleCorrect = (e) => {
    const { text, price } = records.find(item => item.id == e.target.id)
    dispatch({type: CHANGE_TEXT, payload: text});
    dispatch({type: CHANGE_ID, payload: price});
    dispatch({type: CHANGE_ID, payload: e.target.id})
  }

  const handleDelete = () => {
    records = []
    dispatch({type: CHANGE_TEXT, payload: ''});
    dispatch({type: CHANGE_PRICE, payload: 0});
    dispatch({type: CHANGE_ID, payload: ''});
  }

  return (
    <div>
      <div className='form'>
        <input name='text' type="text" className='input' value={text} onChange={(e)=>{dispatch({type: CHANGE_TEXT, payload: e.target.value})}}/>
        <input name='price' type="number" className='input' value={price} onChange={(e)=>{dispatch({type: CHANGE_PRICE, payload: e.target.value})}}/>
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
