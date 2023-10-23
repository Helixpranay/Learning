import React, { useEffect, useState } from 'react'

interface ApiResponse {
    count: number;
    next?: string; // ? => optional type
    previous: string | null;
    results: {name: string, url: string}[]
}

function ReactHook2() {
    const [data, setData] = useState<ApiResponse>();

    useEffect(() => {
        setTimeout(() => {
            fetch('https://pokeapi.co/api/v2/pokemon/')
                .then((response) => response.json())
                    .then((data: ApiResponse) => setData(data));
        },2000)
    },[])

  return (
    <div>
      <p>Data : {data ? data.results.map((result) => result.name).join(','): 'Loading...'}</p>
    </div>
  )
}

export default ReactHook2
