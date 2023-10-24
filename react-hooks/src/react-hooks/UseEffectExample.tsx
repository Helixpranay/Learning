import React, { useEffect, useState } from 'react'

interface ApiResponse {
    count: number;
    next?: string; // ? => optional type
    previous: string | null;
    results: {name: string, url: string}[]
}

function UseEffectExample() {
    const [data, setData] = useState<ApiResponse>();

    useEffect(() => {
        setTimeout(() => {
            fetch('https://pokeapi.co/api/v2/pokemon/')
                .then((response) => response.json())
                    .then((data: ApiResponse) => {
                        setData(data);
                        const names = data.results.map((result) => result.name); 
                        console.log('names',names); //names (20) ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate']
                    });
        },2000)
    },[])

  return (
    <div>
      <p>Data : {data ? data.results.map((result) => result.name).join(','): 'Loading...'}</p>
    </div>
  )
}

export default UseEffectExample
