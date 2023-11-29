import { useEffect, useState } from "react";
import Selection from "../Components/Selection";
import SpellCard from "../Components/SpellCard";
import axios from "axios";


function Spells() {
  
  const [spellList, setSpellList] = useState([]);

  async function fetchData(){

    const url = "https://api.potterdb.com/v1/spells";
    const {data} = await axios.get(url);

    const spellData = data.data;

    setSpellList(spellData);

  }

  useEffect(()=>{
    fetchData();
  }, [])

  
  return (
    <div>
        <Selection/>
        <div>
          <SpellCard spellList = {spellList}/>
        </div>
    </div>);
}

export default Spells;
