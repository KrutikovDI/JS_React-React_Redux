import React, { Component, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { changeNumber, setUserValue } from '../redux/changeNumber'
import { CHANGE_NUMBER, SET_USER_VALUE } from '../redux/actions'
import { Linter } from 'eslint'


// class MainApp extends Component{
//   constructor(props) {
//     super(props);
//     this.submitHandler = this.submitHandler.bind(this)
//   }
//   submitHandler(e) {
//     e.preventDefault();
//     this.props.dispatch(
//       changeNumber()
//     )
//   }
//   render() {
//     return(
//       <>
//       </>
//     )
//   }
// }
// const mapStateToProps = (state, props) => {
//   return {
//     numberVelue: state.number.value,
//     userValue: state.number.userValue
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return(
//     dispatch
//   )
// }
// export default connect(
//   mapStateToProps, mapDispatchToProps
// )(MainApp)



export const MainApp = () => {
  // const dispatch = useDispatch();
  // const {value: numberValue, userValue } = useSelector((state)=>{state.number});
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changeNumber());
  }

  return (
    <div>
      <div className='form'>
        <input type="text" className='input'/>
        <input type="number" className='input'/>
        <button className='btn'>Save</button>
        <button className='btn'>Cancel</button>
      </div>
      <ul className='records'>
        {records.map((record, i)=>(
          <li key={i} className='li'>
            <Record item={record}/>
          </li>
        ))}
      </ul>
    </div>
  )
}
