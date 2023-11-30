import { useEffect, useState } from "react";
import Selection from "../Components/Selection";
import SpellCard from "../Components/SpellCard";
import axios from "axios";
import Loader from "../Components/Loader";


function Spells() {
  
  const [spellList, setSpellList] = useState([]);

  const [loader, setLoader] = useState(false);

  async function fetchData(){

    setLoader(true)

    const url = "https://api.potterdb.com/v1/spells";
    const {data} = await axios.get(url);

    const spellData = data.data;

    setSpellList(spellData);

    setLoader(false);

  }

  useEffect(()=>{
    fetchData();
  }, [])

  
  return (
    <div className="w-screen h-screen">
      <Selection />
      <div className="w-full h-full flex justify-center items-center">
        {loader ? <Loader /> : <SpellCard spellList={spellList} />}
      </div>
    </div>
  );
}

export default Spells;
