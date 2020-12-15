import React from 'react'
import data from './data'
import Month from './Month/Month'
const Main = () => {
    
    
    
    return (
        <main className="row justify-content-center">
            {data.map((d) => {
              return (
                <Month month={d.month} info={{"title": d.title, "main": d.main}} key={d.month} />
                )  
            })}
        </main>
    )
}

export default Main