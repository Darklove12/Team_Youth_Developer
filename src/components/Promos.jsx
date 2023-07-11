import React from 'react'
import '../components/Promos.css'

function Promos() {
    return (
        <div className='container'>
            <img src="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3Z0h3T0F3Q1ZwNHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60" className="image-auto" alt="" />
            <img src="https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className='saleImg-1' alt="" />
            <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className='saleImg-2' alt="" />
            <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    PROMOS
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="https://media.istockphoto.com/id/638162758/photo/girlfriends-going-shopping.jpg?s=612x612&w=0&k=20&c=8CSDJdAN_QMaAuD3ejiys9faRW0GdfG-ra9l4nbD5RM=">PROMOTIONS for Womens</a></li>
                    <li><a class="dropdown-item" href="https://ae01.alicdn.com/kf/Sf195866fb29340778bc6b13b51c952a6i/Tracksuits-Women-Casual-Solid-Warm-Suits-Hoodies-Sweatpants-Autumn-Winter-Pullover-Sweatshirts-Pants-Sports-Suit-Two.jpg_220x220q90.jpg_.webp">2 Ladies Sweaters and Joggers for R500</a></li>
                    <li><a class="dropdown-item" href="https://media.istockphoto.com/id/1085149318/photo/sale-sign-at-the-entrance-of-clothing-store.webp?b=1&s=170667a&w=0&k=20&c=ulyPJOrWKbpuOZjSjmROQjDBpTHGzAvt1C5m3dyL_rA=">2 ladies Knitwear for R 800</a></li>
                    <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijmnqzNy-t2Zrrr6esfUo9UAZKpy9S2np5w&usqp=CAU">2 Ladies Bodycon Skirts for R650</a></li>
                    <li><a class="dropdown-item" href="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MiUyMExhZGllcyUyMEplYW5zJTIwZm9yJTIwUjEwMDB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"> 2 Ladies Jeans for R1000</a></li>
                    <li><a class="dropdown-item" href="https://images.unsplash.com/photo-1621665422246-fde75fb7e7f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xnOXpqODVsRExIRXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60">2 ladies Shoes Fashions for R1 800</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="https://assets.teenvogue.com/photos/6414dbe1a2320c0558051ca1/1:1/w_1171,h_1171,c_limit/Comm_PromSuitsMen_Mar2023_PROMO.jpg">PROMOTIONS for Mens</a></li>
                    <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNlI7sb-6Y222vMJFW1v-kPyyne0CfHFiUMQ&usqp=CAU">2 mens Caps for R 1 000</a></li>
                    <li><a class="dropdown-item" href="https://images.unsplash.com/photo-1515564242578-bbea07d21cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60">2 mens Shoes for R2 800</a></li>
                    <li><a class="dropdown-item" href="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80">2 mens Jeans for R 1 100</a></li>
                    <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfWIsGbc3ftoZgRQPt0G5R-QDAmSKzNov7Q&usqp=CAU">2 mens Shorts for R 800</a></li>
                    <li><a class="dropdown-item" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsY3WyFknezOcnhY068_epIovxp727MsvYaAsn3-7kbGC_YpexagbPtvXDtJyebRrRxlQ&usqp=CAU">2 mens Sweater and fashions R 1 500</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Promos