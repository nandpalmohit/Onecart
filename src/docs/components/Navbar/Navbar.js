import React from 'react';
import style from './Navbar.module.css'

// props by layout/CmpNavbar
const Navbar = (props) => {
  const mostSearched = props.mostSearched;
  const mostSearch = mostSearched.map((keyword) => <a className={`${style.search_keyword}`} href={keyword.slug} key={keyword.name}>{keyword.name}</a>)

  return (
    <>
      <div className={` container-fluid ${style.navbar} `}>
        <div className='row'>
          <div className={` col-sm-2 px-3 ${style.logo}`}>
            <img src="/assets/logo/logo-black.png" alt="" />
          </div>
          <div className={` col-sm-8 ${style.search} mt-3`}>
            <div className={` ${style.searchbox} `}>
              <div className="d-flex p-1">
                <input type="search" className="form-control border-0" placeholder="Search for products" />
                <div className="btn-group mx-3">
                  <button type="button" className="btn btn-white btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    All categories
                  </button>
                  <ul className="dropdown-menu shadow-sm border dropdown-menu-end">
                    <li><a className="dropdown-item" href="#"><small>Action</small></a></li>
                    <li><a className="dropdown-item" href="#"><small>Another action</small></a></li>
                  </ul>
                </div>
                <button type="submit" className='btn my-bg-secondary rounded-0 text-white'><i className="fas fa-search"></i></button>
              </div>
            </div>
            <div className="justify-content-center pt-2 d-flex">
              <p className='txt-secondary me-2'>Most Searched: </p>
              {mostSearch}
            </div>
          </div>
          <div className={` col-sm-2 ${style.cartbox} mt-3`}>
            <div className="row pt-1">
              <div className="col-sm-3 text-center">
                <a className="btn btn-white position-relative" href="#">
                  <h5 className='mb-0'>
                    <i className="d-block fas fa-user-circle"></i>
                  </h5>
                  <span className={`badge rounded-pill ${style.badge_mark}`}>
                    1
                  </span>
                </a>
              </div>
              <div className="col-sm-3 text-center">
                <a className="btn btn-white position-relative" href="#">
                  <h5 className='mb-0'>
                    <i className="d-block fas fa-heart"></i>
                  </h5>
                  <span className={`badge rounded-pill ${style.badge_mark}`}>
                    1
                  </span>
                </a>
              </div>
              <div className="col-sm-3 text-center">
                <a className="btn btn-white position-relative" href="#">
                  <h5 className='mb-0'>
                    <i className="fas fa-shopping-bag"></i>
                  </h5>

                  <span className={`badge rounded-pill ${style.badge_mark}`}>
                    1
                  </span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;