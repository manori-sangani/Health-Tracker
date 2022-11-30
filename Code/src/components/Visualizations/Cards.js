import React from 'react'
import PropTypes from 'prop-types'
// import icon from './arrows-fullscreen.svg'
import Modals from './Modals'
import { Link } from 'react-router-dom'

function Cards(props) {
  return (
    <>
    <div className='card shadow-sm' style={{backgroundColor: '#303030'}}>
      <button type="button" className='btn card-body' data-bs-toggle="modal" data-bs-target="#exampleModal">
        <p className='card-title text-uppercase font-weight-bold' style={{fontSize: '15px', color: 'rgb(149 192 162)', textAlign: 'left'}}>{props.title}&emsp;&emsp;&emsp;&emsp;&ensp;
        {/* <button className='btn btn-light btn-outline-none' style={{backgroundColor: 'white'}}><img src={icon} /></button> */}
        </p>
        <div>
          <p className='card-text' style={{fontSize: '29px', color: ' #BEBEBE', textAlign: 'left'}}>{props.value}</p> 
        </div>
      </button>
    </div>
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

Cards.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string 
}
Cards.defaultProps = {
    title: 'Add title',
    value: '00'
}

export default Cards
