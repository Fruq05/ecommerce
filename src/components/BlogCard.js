import React from 'react'
import "./../styles/blogcard.css"
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' alt='blog' />
            </div>
            <div className='blog-content'></div>
                <p className='date'>1 Dec, 2022</p>
                <h5 className='title'>A beutiful sunday morning renaissance</h5>
                <p className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                    quaerat acusamus officia
                </p>
                <Link to='/' className= 'button'>Read More</Link>
        </div>
    </div>
  )
}

export default BlogCard