import React from 'react'
import '../components/Promos.css'
// Import from MBD install//
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";


function Promos() {
    return (
        
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <MDBRow>
                                        <MDBCol lg="7">
                                            <MDBTypography tag="h5">
                                                <a href="#!" className="text-body">
                                                    <MDBIcon fas icon="long-arrow-alt-left me-2" /> PROMOS
                    
                                                </a>
                                            </MDBTypography>

                                            <hr />

                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-1">Shopping cart</p>
                                                    <p className="mb-0">You have 12 items in your cart</p>
                                                </div>
                                                <div>
                                                    <p>
                                                        <span className="text-muted">Sort by:</span>
                                                        <a href="#!" className="text-body">
                                                            price
                                                            <MDBIcon fas icon="angle-down mt-1" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>

                                            <MDBCard className="mb-3">
                                                <MDBCardBody>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <MDBCardImage
                                                                    src="https://ae01.alicdn.com/kf/Sf195866fb29340778bc6b13b51c952a6i/Tracksuits-Women-Casual-Solid-Warm-Suits-Hoodies-Sweatpants-Autumn-Winter-Pullover-Sweatshirts-Pants-Sports-Suit-Two.jpg_220x220q90.jpg_.webp"
                                                                    fluid className="rounded-3" style={{ width: "65px" }}
                                                                    alt="Shopping item" />
                                                            </div>
                                                            <div className="ms-3">
                                                                <MDBTypography tag="h5">
                                                                Ladies Sweaters and Joggers
                                                                </MDBTypography>
                                                                <p className="small mb-0">256GB, Navy Blue</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{ width: "50px" }}>
                                                                <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                    2
                                                                </MDBTypography>
                                                            </div>
                                                            <div style={{ width: "80px" }}>
                                                                <MDBTypography tag="h5" className="mb-0">
                                                                    R500
                                                                </MDBTypography>
                                                            </div>
                                                            <a href="#!" style={{ color: "#cecece" }}>
                                                                <MDBIcon fas icon="trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </MDBCardBody>
                                            </MDBCard>

                                            <MDBCard className="mb-3">
                                                <MDBCardBody>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <MDBCardImage
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                                                    fluid className="rounded-3" style={{ width: "65px" }}
                                                                    alt="Shopping item" />
                                                            </div>
                                                            <div className="ms-3">
                                                                <MDBTypography tag="h5">
                                                                    Samsung galaxy Note 10
                                                                </MDBTypography>
                                                                <p className="small mb-0">256GB, Navy Blue</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{ width: "50px" }}>
                                                                <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                    2
                                                                </MDBTypography>
                                                            </div>
                                                            <div style={{ width: "80px" }}>
                                                                <MDBTypography tag="h5" className="mb-0">
                                                                    R14 500
                                                                </MDBTypography>
                                                            </div>
                                                            <a href="#!" style={{ color: "#cecece" }}>
                                                                <MDBIcon fas icon="trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </MDBCardBody>
                                            </MDBCard>

                                            <MDBCard className="mb-3">
                                                <MDBCardBody>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <MDBCardImage
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                                                                    fluid className="rounded-3" style={{ width: "65px" }}
                                                                    alt="Shopping item" />
                                                            </div>
                                                            <div className="ms-3">
                                                                <MDBTypography tag="h5">
                                                                    Canon EOS M50
                                                                </MDBTypography>
                                                                <p className="small mb-0">Onyx Black</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{ width: "50px" }}>
                                                                <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                    1
                                                                </MDBTypography>
                                                            </div>
                                                            <div style={{ width: "80px" }}>
                                                                <MDBTypography tag="h5" className="mb-0">
                                                                    R11 199
                                                                </MDBTypography>
                                                            </div>
                                                            <a href="#!" style={{ color: "#cecece" }}>
                                                                <MDBIcon fas icon="trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </MDBCardBody>
                                            </MDBCard>

                                            <MDBCard className="mb-3">
                                                <MDBCardBody>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <MDBCardImage
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                                                                    fluid className="rounded-3" style={{ width: "65px" }}
                                                                    alt="Shopping item" />
                                                            </div>
                                                            <div className="ms-3">
                                                                <MDBTypography tag="h5">
                                                                    MacBook Pro
                                                                </MDBTypography>
                                                                <p className="small mb-0">1TB, Graphite</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{ width: "50px" }}>
                                                                <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                    1
                                                                </MDBTypography>
                                                            </div>
                                                            <div style={{ width: "80px" }}>
                                                                <MDBTypography tag="h5" className="mb-0">
                                                                    R 31 799
                                                                </MDBTypography>
                                                            </div>
                                                            <a href="#!" style={{ color: "#cecece" }}>
                                                                <MDBIcon fas icon="trash-alt" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>

                                        <MDBCol lg="5">
                                            <MDBCard className="bg-primary text-white rounded-3">
                                                <MDBCardBody>
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <MDBTypography tag="h5" className="mb-0">
                                                            Card details
                                                        </MDBTypography>
                                                        <MDBCardImage src="https://media.istockphoto.com/id/1403709099/photo/african-teenage.webp?b=1&s=170667a&w=0&k=20&c=b4ux5ZbPJFsSjo0b2-4PSXCuV5SdwuA6AQtI-mCUKoo="
                                                            fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                                                    </div>

                                                    <p className="small">Card type</p>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                                                    </a>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <MDBIcon fab icon="cc-visa fa-2x me-2" />
                                                    </a>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <MDBIcon fab icon="cc-amex fa-2x me-2" />
                                                    </a>
                                                    <a href="#!" type="submit" className="text-white">
                                                        <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                                                    </a>

                                                    <form className="mt-4">
                                                        <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                                                            placeholder="Cardholder's Name" contrast />

                                                        <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                                                            minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                                                        <MDBRow className="mb-4">
                                                            <MDBCol md="6">
                                                                <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                                                    minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                                                            </MDBCol>
                                                            <MDBCol md="6">
                                                                <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                                                    maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                                                            </MDBCol>
                                                        </MDBRow>
                                                    </form>

                                                    <hr />

                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Subtotal</p>
                                                        <p className="mb-2">R 76 498.00</p>
                                                    </div>

                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Shipping</p>
                                                        <p className="mb-2">R120.00</p>
                                                    </div>

                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Total(Incl. taxes)</p>
                                                        <p className="mb-2">R 76 618.00</p>
                                                    </div>

                                                    <MDBBtn color="info" block size="lg">
                                                        <div className="d-flex justify-content-between">
                                                            <span>R 76 618.00</span>
                                                            <span>
                                                                Checkout{" "}
                                                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                                            </span>
                                                        </div>
                                                    </MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        );
    }



























//     <div className='container'>
//         <img src="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3Z0h3T0F3Q1ZwNHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60" className="image-auto" alt="" />
//         <img src="https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className='saleImg-1' alt="" />
//         <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className='saleImg-2' alt="" />
//         <div class="btn-group">
//             <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                 PROMOS
//             </button>
//             <ul class="dropdown-menu">
//                 <li>
//                     <a class="dropdown-item" href="https://media.istockphoto.com/id/638162758/photo/girlfriends-going-shopping.jpg?s=612x612&w=0&k=20&c=8CSDJdAN_QMaAuD3ejiys9faRW0GdfG-ra9l4nbD5RM=">PROMOTIONS for Womens</a></li>
//                 <li><a class="dropdown-item" href="https://ae01.alicdn.com/kf/Sf195866fb29340778bc6b13b51c952a6i/Tracksuits-Women-Casual-Solid-Warm-Suits-Hoodies-Sweatpants-Autumn-Winter-Pullover-Sweatshirts-Pants-Sports-Suit-Two.jpg_220x220q90.jpg_.webp">2 Ladies Sweaters and Joggers for R500</a></li>
//                 <li><a class="dropdown-item" href="https://media.istockphoto.com/id/1085149318/photo/sale-sign-at-the-entrance-of-clothing-store.webp?b=1&s=170667a&w=0&k=20&c=ulyPJOrWKbpuOZjSjmROQjDBpTHGzAvt1C5m3dyL_rA=">2 ladies Knitwear for R 800</a></li>
//                 <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijmnqzNy-t2Zrrr6esfUo9UAZKpy9S2np5w&usqp=CAU">2 Ladies Bodycon Skirts for R650</a></li>
//                 <li><a class="dropdown-item" href="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MiUyMExhZGllcyUyMEplYW5zJTIwZm9yJTIwUjEwMDB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"> 2 Ladies Jeans for R1000</a></li>
//                 <li><a class="dropdown-item" href="https://images.unsplash.com/photo-1621665422246-fde75fb7e7f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xnOXpqODVsRExIRXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60">2 ladies Shoes Fashions for R1 800</a></li>
//                 <li><hr class="dropdown-divider" /></li>
//                 <li><a class="dropdown-item" href="https://assets.teenvogue.com/photos/6414dbe1a2320c0558051ca1/1:1/w_1171,h_1171,c_limit/Comm_PromSuitsMen_Mar2023_PROMO.jpg">PROMOTIONS for Mens</a></li>
//                 <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNlI7sb-6Y222vMJFW1v-kPyyne0CfHFiUMQ&usqp=CAU">2 mens Caps for R 1 000</a></li>
//                 <li><a class="dropdown-item" href="https://images.unsplash.com/photo-1515564242578-bbea07d21cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60">2 mens Shoes for R2 800</a></li>
//                 <li><a class="dropdown-item" href="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80">2 mens Jeans for R 1 100</a></li>
//                 <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfWIsGbc3ftoZgRQPt0G5R-QDAmSKzNov7Q&usqp=CAU">2 mens Shorts for R 800</a></li>
//                 <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsY3WyFknezOcnhY068_epIovxp727MsvYaAsn3-7kbGC_YpexagbPtvXDtJyebRrRxlQ&usqp=CAU">2 mens Sweater and fashions R 1 500</a></li>
//                 <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsY3WyFknezOcnhY068_epIovxp727MsvYaAsn3-7kbGC_YpexagbPtvXDtJyebRrRxlQ&usqp=CAU">1 mens Sweater and fashions R500</a></li>
//             </ul>
//         </div>

//     </div>
//     )
// }

export default Promos