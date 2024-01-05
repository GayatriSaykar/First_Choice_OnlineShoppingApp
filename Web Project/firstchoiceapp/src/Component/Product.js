import img from '../image/1.jpg'
import img1 from '../image/2.jpg'
import img2 from '../image/3.jpg'
import { Link } from 'react-router-dom'

export default function Product(){
    return(
        <div>
<section id="featured" class="my-2 py-2">
        <div class="container mt-5 py-5">
          <h2 class="font-weight-bold">Our Product</h2>
          <Link to="/home" className="nav-link" style={{color:"white",marginLeft:"95%",backgroundColor:"blue",padding:"5px 10px"}}>BACK</Link>
          <hr/>
          <p>Here you can check out our new products with fair price on First Choice</p>
        </div>
        <div class="row mx-auto container">
          <div class="product text-center col-lg-3 col-md-4 col-12">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h5 class="p-name">CatWalk</h5>
            <h4 class="p-price">₹429</h4>
            <button class="buy-btn">Buy now</button>
          </div>
          <div class="product text-center col-lg-3 col-md-4 col-12">
            <img className="img-fluid mb-3" src={img1} alt=""/>
            <h5 class="p-name">Herschel</h5>
            <h4 class="p-price">₹429</h4>
            <button class="buy-btn">Buy now</button>
          </div>
          <div class="product text-center col-lg-3 col-md-4 col-12">
            <img class="img-fluid mb-3" src={img2} alt=""/>
            <h5 class="p-name">Prada</h5>
            <h4 class="p-price">₹429</h4>
            <button class="buy-btn">Buy now</button>
          </div>
        
        </div>
            </section>
           
        </div> 
        
    )
}