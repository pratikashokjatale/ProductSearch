import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import{useForm} from 'react-hook-form';

function Alldata() {
  
    
      const[user, setUsers] = useState([]);
    function fetchUser() {
      axios.get('http://localhost:8080/products').then((response) => {   
        setUsers(response.data);
      console.log(response.data);
        console.log(response.name)
      }).catch((error) => {
        console.log(error);
      });  
    
    }
    useEffect(()=>{
    fetchUser();
    }
  );

  const{register,handleSubmit}=useForm();
  
  function viewprdouct() {
    axios.get('http://localhost:8080/products/searchs').then((response) => { 
     
      setUsers(response.data);
    console.log(response.data);
  
    }).catch((error) => {
      console.log(error);
    });  
  
  }
  useEffect(()=>{
  viewprdouct();
  }
  
);

  

  return (
    
    
    
    

<div>
<div className="header-1 bg-light py-3 px-4 d-flex justify-content-between align-items-center shadow-sm">

  <a href="#" className="logo text-decoration-none text-dark h4 mb-0">
   
  </a>

  <form onSubmit={handleSubmit(viewprdouct)} className="search-form d-flex" style={{ maxWidth: "500px", width: "100%" }}>
    <input
      type="search"
      {...register('name')}
      className="form-control me-2"
      placeholder="Search Products using title here..."
      required
      id="search-box"
    />
    <button className="btn btn-outline-primary" type="submit">
    <i class="bi bi-search">Search</i>
    </button>
  </form>

  <div className="icons d-flex align-items-center gap-3">
    <div id="search-btn" className="fas fa-search text-primary fs-5 cursor-pointer"></div>
    <a href="#" className="fas fa-heart text-danger fs-5 text-decoration-none"></a>
    <a href="#" className="fas fa-shopping-cart text-success fs-5 text-decoration-none"></a>
    <div id="login-btn" className="fas fa-user text-secondary fs-5 cursor-pointer"></div>
  </div>

</div>

<h1 className="mt-3  mb-4 text-center text-uppercase fw-bold text-primary display-5 heading-underline">
  View All Products
</h1>
  
{user.map((user) => (
  <div key={user.id} className="container mb-4">
    <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
      <div className="row g-0">
        
        {/* Product Image */}
        <div className="col-md-4 bg-light d-flex align-items-center justify-content-center p-0">
          <img
            src={user.imageUrl}
            className="img-fluid rounded-start h-50"
            alt={user.title}
            style={{ objectFit: 'cover', height: '100%' }}
          />
        </div>

        {/* Product Content */}
        <div className="col-md-5 p-4 d-flex flex-column justify-content-between">
          <div>
            <h4 className="fw-bold text-primary">{user.title}</h4>
            <div className="d-flex align-items-center mb-2">
              <div className="text-warning me-2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

           

            <p className="text-muted">{user.description}</p>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="col-md-3 bg-light d-flex flex-column justify-content-center align-items-center p-4 border-start">
          <h4 className="text-dark mb-0">${user.price}</h4>
          <small className="text-muted mb-2">
            <s>${user.originalPrice || (user.price + 7)}</s>
          </small>
          <span className="badge bg-success mb-3">Free Shipping</span>
          <div className="d-grid gap-2 w-100">
            <button className="btn btn-primary btn-sm w-100">Details</button>
            <button className="btn btn-outline-secondary btn-sm w-100">Add to Wishlist</button>
          </div>
        </div>

      </div>
    </div>
  </div>
))}


</div>

    
    
  )
  
  
}

export default Alldata
