import React, { useEffect, useState } from "react";
import { Table, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment" ;
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {loginUserfind, selectConnectuser } from "../../../redux/slices/userSlice";
import "../../../styles/user/style.css";

//import { getAllPrestataire } from "../JS/Actions";
//import "../styles/login.css";



function ListFreeDelivery2(props) {
  const [deliveries,setDeliveries]= useState([]);
  const [search,setSearch]= useState("");
  const [SearchTerms,setSearchTerms] = useState("");
  const [connectUser, error] = useSelector(selectConnectuser);
  const user=connectUser.id;
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('http://localhost:5000/freeDelivery/findByUser/'+user).then(response => {
        setDeliveries(response.data)
        console.log(response.data)
    })
}, []);

function update (id) {
    console.log(id)
   props.history.push("/homeuser/user/editDelivery/"+id)

}
function remove(id){

    axios.delete('http://localhost:5000/freeDelivery/'+id).then(response => {
        props.history.push("/homeuser/user/listDeliveries")
        console.log(response.data);
    })

}

const onChangeSearch = (event) => {
   console.log(event.currentTarget.value)
}






  //   const Presta = useSelector(state => state.Presta)
  return (
<div>

    <section className="breadcrumb_part">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner">
                        <h2>My Post deliveries</h2>
                    </div>
                </div>
            </div>
        </div>
        
    </section>


    <section className="news section">
        
    <div className="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
        <div  className="input-group rounded"  htmlFor="search-input">
        <input
        className="form-control"
        type="text"
        placeholder="Search here by governorate.."
        name="searchTerm"
        onChange={e=>{setSearch(e.target.value)}}>
        </input>
        <span class="input-group-text border-0" id="search-addon">
        <i className="fa fa-search" aria-hidden="true"/>
        </span>
        </div>
       </div> 
    <div className="container">
        <div className="row mt-30">
        {deliveries == null
                  ? "wait"
                  : deliveries.filter(el => {
                      if (search=="") {
                          return el
                      }
                      else if (el.governorate.toLowerCase().includes(search.toLowerCase())) {
                          return el
                      }
                  }).
                  map((el, index) => (

                    
            <div className="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
                <div className="blog-post">
                    <div className="post-thumb">
                        <a href="news-single.html">
                            <img src="/image/delivery1.jpg" alt="post-image" className="img-fluid"/>
                        </a>
                    </div>
                    <div className="post-content">
                        <div className="date">
                            <h4><span>{ moment(el.fromDate).format("MMM Do YY") }</span></h4>
                        </div>
                        <div className="post-title">
                            <h3><a href="news-single.html"> {el.governorate} -- {el.destination} </a>  
                            <button className="btn btn-dark"  onClick={()=>update( el._id)} >edit <i className="fa fa-angle-right" /> </button> 
                            &nbsp;&nbsp;  <button  onClick={()=>remove( el._id)}  className="btn btn-danger"  > <FontAwesomeIcon icon={faTrash} /> </button> </h3>
                                       

                            <details>
                                state: {el.state} <br/>
                                to date: {el.toDate} <br/>
                                ville: {el.ville} <br/>
                                vehicle: {el.vehicle}<br/>
                                quantite: {el.quantite}<br/>
                                quantite available: {el.quantiteDispo}<br/>

                                package size: {el.packageSize}<br/>
                                constraint: {el.constraint}<br/>


                                </details>

                               
                        </div>
                        <div className="post-meta">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <i className="fa fa-user-o"></i>
                                    <a href="#">Admin</a>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fa fa-heart-o"></i>
                                    <a href="#">350</a>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fa fa-comments-o"></i>
                                    <a href="#">30</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            ))}
           
                      
            
                   


                  
        
         
                                   
            <div className="col-12 text-center">
                <nav className="d-flex justify-content-center">
                  <ul className="pagination">
                      <li className="page-item">
                      <a className="page-link" href="#" aria-label="prev">
                        <span aria-hidden="true"><i className="fa fa-angle-left"></i></span>
                        <span className="sr-only">prev</span>
                      </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true"><i className="fa fa-angle-right"></i></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
    </div>
</section>
<MessengerCustomerChat
    pageId="100394015508212"
    appId="149623060322688"
   
  />


</div>
);
}

const details = styled.h2`
  text-transform: uppercase;
  color: #7A7B7B;
`;

export default ListFreeDelivery2;