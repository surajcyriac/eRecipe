import React from 'react'
import { useDispatch } from 'react-redux'
import { searchProduct } from '../redux/slices/productSlice'
import { Link } from 'react-router-dom'

const Header = ({insideHome}) => {
    
  const dispatch = useDispatch()

  return (
    <nav className='flex bg-emerald-500 fixed w-full p-5'>
        <Link className='text-white text-2xl font-bold' to={'/'}> <i className="fa-solid fa-utensils me-1"></i> E Recipe</Link>
        <ul className='flex-1 text-right list-none'>
             {insideHome && <li className='list-none inline-block px-5'><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} className='rounded p-1' style={{width:'300px'}} type="text" placeholder='Search Products' name="" id="" /></li>}
        </ul>
    </nav>
  )
}

export default Header