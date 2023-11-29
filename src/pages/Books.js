import Selection from "../Components/Selection";
import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../Components/BookCard";


function Books() {
  
  const [bookList, setBookList] = useState([]);
  
  async function fetchData(){

    const url = "https://api.potterdb.com/v1/books";
    
    const {data} = await axios.get(url);

    const bookData = data.data;

    setBookList(bookData);

  }

  useEffect(()=>{
    fetchData();
  }, [])

  return( 
  <div> 
    <Selection/>
    
    <div >
      
        <BookCard bookList = {bookList}/>

    </div>
  </div>
  );
}

export default Books;
