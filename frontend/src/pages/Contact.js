import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { getContacts } from '../redux/actions/contactActions'

function Contact() {
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getContacts())
},[dispatch])

  return (
    <div>

      <p>Contact</p>
    </div>
  )
}

export default Contact
