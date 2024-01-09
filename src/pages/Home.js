



import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import {FaSearch} from "react-icons/fa";

// import { SliderComponent } from '@syncfusion/ej2-react-inputs';

const Home = () => {
  const API_URL = "https://dummyjson.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [input,setInput] = useState("");
  const [results,setResults] = useState([]);


  const [sliderValue, setSliderValue] = useState(2000);
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  // console.log(sliderValue);
  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      

      setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
    
  }

  useEffect( () => {
    fetchProductData();
  },[]) 
  
  // console.log(posts.products);
 
  const handleChange = (value) => {
    setInput(value);
    const result = posts.products.filter((user) => {
      return user && user.title && user.title.toLowerCase().includes(value);
    })
    console.log("lelo result");
    // console.log(result);
    setResults(result);
  
    
  }
 
 
  return (
<div>

   <div className="h-[100px] flex items-center justify-evenly text-white ">
         <div className="flex items-center justify-center bg-purple-600 rounded-lg"> <FaSearch  className="mx-2"/> <input  type="text" placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)}  className="w-[680px] rounded-lg p-2 bg-slate-100 text-black" /> </div>
         <div class="slider">
         <input

        type="range"
        min="0"
        max="2000"
      
        value={sliderValue}
        onChange={handleSliderChange}
      />
       <p>Price: ₹{sliderValue}</p>
         </div>
   </div>
   
  <div>
 {
   results.length > 0  ? 
   
   (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {
          (results).map( (post) => (
           post.price <=sliderValue ?  
          <Product key = {post.id} post={post} />
           : ""
        ) )
       
        }
       
      </div>) :
    
   
    <div>
      
    {
      
      loading ? <Spinner />  :
      posts.total > 0  ? 
      (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {
          (posts.products).map( (post) => (
            post.price <= sliderValue ?
          <Product key = {post.id} post={post}/>
          : ""
        ) )
        } 
      </div>) :
      <div className="flex justify-center items-center">
        <p>No Data Found</p>
      </div> 
    }

     </div>
} 
  </div>

</div>  
  );
 
};

export default Home;



