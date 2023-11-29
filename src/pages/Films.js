import { useEffect, useState } from "react";
import Selection from "../Components/Selection";
import axios from "axios";
import Card from "../Components/Card";


function Films() {
  
  const [filmData , setFilmData] = useState([]);

  async function fetchData(){
      
    const url = 'https://api.potterdb.com/v1/movies';
    const {data} = await axios.get(url);
    const collections = data.data;
    
    setFilmData(collections);

  }
  
  useEffect( ()=>{
    fetchData();
  }, [] )


  
  return (
    <div >
      <Selection />
      <div >
        {filmData.map((item) => {
          
          const poster = item.attributes.poster;
          const title = item.attributes.title;
          const trailer = item.attributes.trailer;
          const release_date = item.attributes.release_date;
          const summary = item.attributes.summary;

          return (
            <Card poster={poster} title={title} trailer={trailer} release_date={release_date} summary={summary}/>
          );
        })}
      </div>
    </div>
  );
}

export default Films;
