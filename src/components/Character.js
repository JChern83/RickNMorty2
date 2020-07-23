import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard'
import '../App.css'




export default function Character () {
    const [character, setCharacter] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page} `)
            .then(res =>{
                console.log(res.data.results)
                setCharacter(res.data.results)

            })
            .catch(error => {
                console.log('no data coming', error)
            })
    },[page])


    return(
        <>
        <div className='BTN'>
        <button onClick={() => setPage(page - 1)}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      <div className='characters'>
      {character.map(item =>{
          return (
              <CharacterCard
              key={item.id}
              name={item.name}
              status={item.status}
              image={item.image}
              species={item.species}
              location={item.location.name}
              />
          )
      })}
      
      </div>
      </>
    )
}