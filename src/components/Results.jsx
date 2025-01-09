import React from 'react'

const Results = ({results}) => {
  return (
    <div>
      {results.map((item)=>{
        return (
            <div key={item.id}>
              <h2>{item.title || item.name}</h2>
            </div>
          );
      })}
    </div>
  )
}

export default Results
