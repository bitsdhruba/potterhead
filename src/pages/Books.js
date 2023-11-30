import Selection from "../Components/Selection";
import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../Components/BookCard";
import Loader from "../Components/Loader";


function Books() {
  
  const [bookList, setBookList] = useState([]);

  const [loader, setLoader] = useState(false);
  
  async function fetchData(){

    setLoader(true)

    const url = "https://api.potterdb.com/v1/books";
    
    const {data} = await axios.get(url);

    const bookData = data.data;

    setBookList(bookData);

    setLoader(false);

  }

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <div>
      <Selection />

      <div className="w-full h-full ">
        {loader ? <Loader /> : <BookCard bookList={bookList} />}
      </div>
    </div>
  );
}

export default Books;
