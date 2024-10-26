import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ height: '300px' }} className='bg-emerald-500 container flex flex-col mt-10'>
      <div className='flex text-white justify-between  w-full p-5'>

        <div style={{ width: '400px' }}>
          <Link className='text-white text-2xl font-bold' to={'/'}> <i className="fa-solid fa-utensils me-1"></i> E Recipe</Link>
          <p className='mt-3'>Designed and build with all the love in the world by the June 2024 Batch student with the help of our contributors.</p>
          <p>Code licensed Tony, docs CC BY 3.0</p>
          <p>Currently v1.0.0</p>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-xl font-bold mb-2'>Links</h1>
          <Link to={'/'}>Home</Link>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-xl font-bold mb-2'>Guides</h1>
          <Link to={'https://react.dev/'}>React</Link>
          <Link to={'https://react-bootstrap.github.io/'}>React Bootstrap</Link>
          <Link to={'https://reactrouter.com/en/main'}>React Router</Link>
        </div>

        <div className="flex flex-col">
          <h5 className='text-xl font-bold mb-2'>Contact Us</h5>
          <div className='d-flex'>
            <input placeholder='Enter your email here' type="text" name="" id="" className='text-black rounded' />
            <button style={{width:'30px'}} className='rounded bg-orange-500 ms-3'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className='icons flex justify-between mt-3'>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-facebook'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-brands fa-github'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className='fa-solid fa-phone'></i></a>
          </div>
        </div>
      </div>
      <p className='text-center text-white mt-3'>Copyright &copy; 2024 E-Recipe June24 Batch Student. Built with React.</p>
    </div>
    
  )
}

export default Footer