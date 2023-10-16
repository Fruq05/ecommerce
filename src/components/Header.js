import React from 'react'
import { NavLink, Link} from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import "./../styles/header.css"

const Header = () => {
  return (
    <div>
        <header className='header-top-strip py-3'>
            <div className="container-xxl">
                <div className='row'>
                    <div className='col-6'>
                      <p className='text-white mb-0'>Free Shopping Over $100 & Free Returns</p>
                    </div>
                    <div className='col-6'>
                      <p className='text-end'>
                        Hotline: <a className='text-white' href='tel:+91 8264954234'>+91 8264954234</a>
                      </p>
                    </div>
                </div>
            </div>
        </header>
        <header className='header-upper py-3'>
            <div className='container-xxl'>
                <div className='row align-items-center'>
                    <div className='col-2'>
                    <h1>
                        <Link className='text-white'>DevCorner</Link></h1>
                    </div>
                    <div className='col-5'>
                    <div className="input-group mb-3">
  <input type="text" className="form-control py-2" placeholder="Search Product Here..."
   aria-label="Search Product Here..." aria-describedby="basic-addon2" />
    <span className="input-group-text p-3" id="basic-addon2">
    <BsSearch className='fs-5'/>
    </span>
        </div>
    </div>
<div className='col-6'></div>
</div>
</div>
</header>
</div>
  )
}

export default Header