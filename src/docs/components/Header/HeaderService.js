import React from 'react';
import style from './HeaderService.module.css';

// props by layout/CmpHeader
const HeaderService = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row border'>
        {props.services.map((sr) =>
          <div className={`col ${style.service}`} key={sr.icon}>
            <div className="card border-0">
              <div className="row g-0">
                <div className="col-md-3 pl-1">
                  <i className={` ${style.icon} ${sr.icon}`}></i>
                </div>
                <div className="col-md-9 px-2">
                  <div className="card-body px-0">
                    <h6 className="card-title mb-0 pb-0">{sr.title}</h6>
                    <p className="card-text"><small className="text-muted">{sr.desc}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderService;