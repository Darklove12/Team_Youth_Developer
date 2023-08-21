import React from "react"
import { Link } from "react-router-dom"
import Viewdata from "../pages/Viewdata";
import '../components/Ladies.css'

const Ladies = () => {

  return (
    <div>
      <div className='Header_Ladies'>
        <h1 className="Sub_header_Ladies">Ladies</h1>
        <ul>
          <li>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
              </svg>
            </button>

          </li>

          <li>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </button>

          </li>
        </ul>
      </div>
      <div className="grid-container">
        {
          Viewdata.map((view, index) => {
            return (
              <div key={index} className="card" >
                <img src={view.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{view.name}</h5>
                  <p className="card-text">{view.price}</p>
                  <Link to={`/card/${view.name}`}>
                    <a href="#" className="btn btn-primary">
                      Click Me
                    </a>
                  </Link>
                </div>
              </div>
            )
          })

        }

      </div>
    </div>

  )
}

export default Ladies