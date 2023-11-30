import { useEffect, useState } from "react";
import Selection from "../Components/Selection";
import axios from "axios";
import Card from "../Components/Card";
import Loader from "../Components/Loader";


function Films() {
  
  const [loader, setLoader] = useState(false);

  const [filmData , setFilmData] = useState([]);

  async function fetchData(){
      
    setLoader(true)
    const url = 'https://api.potterdb.com/v1/movies';
    const {data} = await axios.get(url);
    const collections = data.data;
    
    setFilmData(collections);

    setLoader(false);
  }
  
  useEffect( ()=>{
    fetchData();
  }, [] )


  
  return (
    <div>
      <Selection />
      <div className="w-full h-full">
        {loader ? <Loader /> : <Card filmData={filmData} />}
      </div>
    </div>
  );
}

export default Films;
