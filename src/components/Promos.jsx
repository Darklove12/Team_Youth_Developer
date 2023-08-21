import React from 'react'
import './Promos.css'

 function Promos () {
   return (
    <div>

<div className='Header_Promos'>
        <h1 className="Sub_header_Promos">PROMOS</h1>
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
      <h1 className="Sub_header_Promos">Women</h1>
      <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel"/>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="card-wrapper container-sm d-flex  justify-content-around">
      <div class="card  " >
  <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
          <div class="gift-card__name">2 Ladies Sweaters and Joggers</div>
          <div class="gift-card__amount-remaining">R750 Remaining</div>
  </div>
</div><div class="card">
  <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
        </div>
        <div class="card">
  <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
</div>
</div>
    </div>
    <div class="carousel-item">
      <div class="card-wrapper container-sm d-flex   justify-content-around">
      <div class="card  ">
  <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
</div><div class="card">
  <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
        </div>
        <div class="card" >
  <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
</div>
    </div>
    </div>
    <div class="carousel-item">
      <div class="card-wrapper container-sm d-flex  justify-content-around">
      <div class="card ">
  <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
</div>
        <div class="card">
  <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
        </div>
        <div class="card">
  <img src="https://source.unsplash.com/collection/190727/1600x900" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




      /* <div class='container-giftcard'>
      <article class="gift-card" id='gift_now'>
        <div class="gift-card__image">
        </div>
        <section class="gift-card__content">
        <h1 className="Sub_header_Promos">Women</h1>
          <div class="gift-card__name">2 Ladies Sweaters and Joggers</div>
          <div class="gift-card__amount-remaining">R750 Remaining</div>
        </section>
      </article>
      </div>
      <div class='container-giftcard'>
      <article class="gift-card" id='gift_now'>
        <div class="gift-card__image">
        </div>
        <section class="gift-card__content">
        <h1 className="Sub_header_Promos">Men</h1>
          <div class="gift-card__name">3 Mens Sweater and fashions</div>
          <div class="gift-card__amount-remaining">R1 550 Remaining</div>
          
        </section>
      </article>
      </div>

    
    </div>
    
    
   )
 }

 export default Promos






























// import React from 'react'
// import './Promos.css'

// const Promos = () => {
//     return (
      
//         <div className='container'>
//             <img src="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3Z0h3T0F3Q1ZwNHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60" className="image-auto" alt="" />
//             <img src="https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className='saleImg-1' alt="" />
//             <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className='saleImg-2' alt="" />
//             <div class="btn-group">
//                 <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                     PROMOS
//                 </button>
//                 <ul class="dropdown-menu">
//                     <li>
//                         <a class="dropdown-item" href="https://media.istockphoto.com/id/638162758/photo/girlfriends-going-shopping.jpg?s=612x612&w=0&k=20&c=8CSDJdAN_QMaAuD3ejiys9faRW0GdfG-ra9l4nbD5RM=">PROMOTIONS for Womens</a></li>
//                     <li><a class="dropdown-item" href="https://ae01.alicdn.com/kf/Sf195866fb29340778bc6b13b51c952a6i/Tracksuits-Women-Casual-Solid-Warm-Suits-Hoodies-Sweatpants-Autumn-Winter-Pullover-Sweatshirts-Pants-Sports-Suit-Two.jpg_220x220q90.jpg_.webp">2 Ladies Sweaters and Joggers for R500</a></li>


//                     <li><a class="dropdown-item" href="https://images.unsplash.com/photo-1621665422246-fde75fb7e7f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xnOXpqODVsRExIRXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60">2 ladies Shoes Fashions for R1 800</a></li>
//                     <li><hr class="dropdown-divider" /></li>
//                     <li><a class="dropdown-item" href="https://assets.teenvogue.com/photos/6414dbe1a2320c0558051ca1/1:1/w_1171,h_1171,c_limit/Comm_PromSuitsMen_Mar2023_PROMO.jpg">PROMOTIONS for Mens</a></li>
//                     <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNlI7sb-6Y222vMJFW1v-kPyyne0CfHFiUMQ&usqp=CAU">2 mens Caps for R 1 000</a></li>
//                     <li><a class="dropdown-item" href="https://images.unsplash.com/photo-1515564242578-bbea07d21cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60">2 mens Shoes for R2 800</a></li>
//                     <li><a class="dropdown-item" href="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80">2 mens Jeans for R 1 100</a></li>
//                     <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfWIsGbc3ftoZgRQPt0G5R-QDAmSKzNov7Q&usqp=CAU">2 mens Shorts for R 800</a></li>
//                     <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsY3WyFknezOcnhY068_epIovxp727MsvYaAsn3-7kbGC_YpexagbPtvXDtJyebRrRxlQ&usqp=CAU">2 mens Sweater and fashions R 1 500</a></li>
//                     <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsY3WyFknezOcnhY068_epIovxp727MsvYaAsn3-7kbGC_YpexagbPtvXDtJyebRrRxlQ&usqp=CAU">1 mens Sweater and fashions R500</a></li>
//                 </ul>
//             </div>

//         </div>
//     )
// }

// export default Promos