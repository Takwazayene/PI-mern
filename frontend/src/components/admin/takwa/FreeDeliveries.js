import React, { useEffect, useState } from "react";
import axios from 'axios'
import Cookies from 'js-cookie';
import {useDispatch ,useSelector } from "react-redux";
import {loginUserfind, selectConnectuser } from "../../../redux/slices/userSlice";
import "../../../styles/admin/Users.css";
import { Link } from "react-router-dom";
import { selectUsers } from "../../../redux/slices/admin/usersSlice";
import ReactPaginate from 'react-paginate'

import moment from "moment" ;


export default function Users(props) {
  
  const [connectUser, error] = useSelector(selectConnectuser);
  const dispatch = useDispatch();
  const [users, err] = useSelector(selectUsers);
  const [pageNumber, setPageNumber]= useState(0);
  const [deliveries,setDeliveries]= useState([]);

  console.log(users);
  var color ="0";
  useEffect(() => {
    axios.get('http://localhost:5000/freeDelivery').then(response => {
        setDeliveries(response.data)
        console.log(response.data)
    })
}, []);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
 

  const displayDeliveries = deliveries.slice(pagesVisited, pagesVisited + usersPerPage).map((delivery, index)=>
  (
      
   
    <tr  {...delivery.state == "valid" ? color="#80c1ff": color ="#ff8080"  }   style={{ background: color  }}  key={delivery._id}>
      <th  style={{ background: color  }} scope="row">{index}</th>
      <td  style={{ background: color  }}>{delivery.fromDate}</td>
      <td  style={{ background: color  }}>{delivery.toDate}</td>
      <td  style={{ background: color  }}>{delivery.governorate}</td>
      <td  style={{ background: color  }}>{delivery.ville}</td>
      <td  style={{ background: color  }}>{delivery.state}</td>
      <td  style={{ background: color  }}>{delivery.constraint}</td>
      <td  style={{ background: color  }}>
        <span className="icon mr-3">
          <Link to={`/homeuser/admin/update/${delivery._id}`}>
          <i className="fa fa-pencil" style={{color : "green"}}></i>
          </Link>
        </span>
        <span className="icon">
          <i className="fa fa-trash" style={{color : "red"}}></i>
        </span>
      </td>
    </tr>
      )
  )
  
const usersArray = []
users.map(delivery =>(usersArray.push(delivery)))
  
const pageCount = Math.ceil(usersArray.length / usersPerPage);
console.log(pageCount)

const changePage = ({selected})=>{
  setPageNumber(selected)
}

  return (
    <section style={{height:"1100px"}}>
      <div className="row" >
        
        <div className="col-sm-8 col-md-11 " id="tableUsers">
          <div className=" table-responsive-sm">
          <table className="table">
            <thead>
              <tr >
                <th scope="col">#</th>

                <th scope="col">fromDate</th>
                <th scope="col">toDate</th>
                <th scope="col">governorate</th>
                <th scope="col">ville</th>
                <th scope="col">state</th>
                <th scope="col">constraint</th>
                <th scope="col">Action</th>
              </tr>
              
            </thead>
            <tbody>
                {displayDeliveries}
                
            </tbody>
            
          </table>
          
          </div>
          <div style={{marginTop:"20px", display:"flex", justifyContent:"center"}} >
          <ReactPaginate 
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
            />
            </div>
        </div>
        
      </div>
    </section>
  );
}
