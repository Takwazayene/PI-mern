import React, { useEffect, useState } from "react";
import axios from 'axios'
import Cookies from 'js-cookie';
import {useDispatch ,useSelector } from "react-redux";
import {loginUserfind, selectConnectuser } from "../../../redux/slices/userSlice";
import "../../../styles/admin/Users.css";
import { Link } from "react-router-dom";
import { selectUsers } from "../../../redux/slices/admin/usersSlice";
import ReactPaginate from 'react-paginate'
import { ToastContainer, toast ,Zoom,Bounce} from 'react-toastify';
import { jsPDF } from "jspdf";
 
import moment from "moment" ;


export default function Users(props) {
  
  const [connectUser, error] = useSelector(selectConnectuser);
  
  const dispatch = useDispatch();
  const [users, err] = useSelector(selectUsers);
  const [pageNumber, setPageNumber]= useState(0);
  const [claims,setClaims]= useState([]);

  console.log(users);
  var color ="0";
  useEffect(() => {
    axios.get('http://localhost:5000/claim').then(response => {
        setClaims(response.data)
        console.log(response.data)

    })
}, []);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

function jsPdfGenerator(date,QRcode,type,description) {
 var doc = new jsPDF('p','pt');
  
  doc.setFont('courier');
  doc.setFontSize(18);
  doc.text(10,10, "\n"+ doc.internal.getCurrentPageInfo().pageNumber + "/" + pageCount+  "\n" + "\n"+ "\n" ,{align: "left"});



 
 // doc.setFont('normal');
  doc.text(15,15,  "\n" + "\n"+ "\n"+"date : "+" "+ date +"\n"+"QR code : "+" " +QRcode+"\n"+"type : "+" "+ type  +"\n"+ "description : "+" "+ description )
  doc.save('reclamation.pdf')

}



  function accept (id,etat) {
    if (etat != "treated")
{
    console.log(id)
    axios.put('http://localhost:5000/claim/accept/'+id).then(response => {
      console.log(response.data);
      toast.success('The complaint is treated successfully',{position:toast.POSITION.BOTTOM_RIGHT});
    })
}
else 
{
    toast.error('This complaint has already been treated !',{position:toast.POSITION.BOTTOM_RIGHT});

}

}
function refuse (id,etat) {
    if (etat != "refused")
{
    console.log(id)
    axios.put('http://localhost:5000/claim/refuse/'+id).then(response => {
      console.log(response.data);
      toast.success('The complaint is refused successfully',{position:toast.POSITION.BOTTOM_RIGHT});
    })
}
else 
{
    toast.error('This complaint has already been refused !',{position:toast.POSITION.BOTTOM_RIGHT});

}

}

  const displayDeliveries = claims.slice(pagesVisited, pagesVisited + usersPerPage).map((claim, index)=>
  (        

      
    <tr  {...claim.etat == "pending" ? color="#ff8080": color ="#80c1ff"  }   key={claim._id}>
      <th  scope="row">{index}</th>
      <td>{claim.dateClaim}</td>
      <td>{claim.date}</td>
      <td>{claim.QRcode}</td>
      <td>{claim.type}</td>
      <td>{claim.description}</td>
      <td>{claim.etat}</td>
      <td>{claim.user}</td>

       

      <td >
        <span className="icon mr-3">
        <button  onClick={()=>accept( claim._id,claim.etat)} > 

          <i class="fa fa-check-circle" style={{color : "green"}}></i>
          </button> 
        </span>
        <span className="icon mr-3">
        <button  onClick={()=>refuse( claim._id,claim.etat)} > 

        <i class="fa fa-ban"  style={{color : "red"}} ></i>
        </button> 
        </span>
        <span className="icon mr-3" >
        <button  onClick={()=>jsPdfGenerator(claim.date,claim.QRcode,claim.type,claim.description )} > 

        <i class="fa fa-upload"  style={{color : "blue"}}></i>
        </button> 
        </span>
      </td>
    </tr>
      )
  )
  
const usersArray = []
users.map(claim =>(usersArray.push(claim)))
  
const pageCount = Math.ceil(usersArray.length / usersPerPage);
console.log(pageCount)

const changePage = ({selected})=>{
  setPageNumber(selected)
}

  return (

    <section style={{height:"1100px"}}>
            <ToastContainer/>

      <div className="row" >
        
        <div className="col-sm-8 col-md-11 " id="tableUsers">
          <div className=" table-responsive-sm">
          <table className="table">
            <thead>
              <tr >
                <th scope="col">#</th>
                <th scope="col">Date claim</th>
                <th scope="col">Date delivery</th>
                <th scope="col">QR code</th>
                <th scope="col">Type</th>
                <th scope="col">description</th>
                <th scope="col">etat</th>
                <th scope="col">customer</th>

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
