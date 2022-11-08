import React from "react";
import "../App.css";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [image, setImage] = useState("");

const clientId =   "XXRcpqMF0L4C8B9gr-UkXQl0PzpKqWIPNuCgs-tQrOA";

const [result, setResult] = useState([]);

const handleChange = (event) => {
 setImage(event.target.value);
};

const handleSubmit = () => {
const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId;
axios.get(url).then((response) => {
console.log(response);
setResult(response.data.results);
});
};

return (
<div className="app">
 <div className="heading">
   <h1>Image Search</h1>
 </div>
 
 <div className="input">
  <input onChange={handleChange} type="text" className="image" name="image"  placeholder="Search for images"/>
 </div>
  <button onClick={handleSubmit} type="submit">Search</button>
<div className="result">
  {result.map((image) => (
  <>
   <div className="card">
    <img src={image.urls.thumb} alt="img"/>
    <p className="username"> Photo by {image.user.name}</p>
   </div>
  </>
   ))}
</div>
</div>
);

  }
