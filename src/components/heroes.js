import React, {useState} from 'react';
import heroes from '../heroes'

const Heroes = () => {
  // useState takes 1 parameter -- default state
  // return array w/ 2 values
  // 1) state
  // 2) function that updates that state

  const [slug, setSlug] = useState('')

  const updateSlug = (event) => {
    setSlug(event.target.value)
  }

  return (

    <div className='App'>
        <h2>These are our heroes</h2>
        <div>Meet Our Heroes</div>
        <input type="text" name="search" onChange={updateSlug}/>
        <div className="slug">{slug}</div>
        {heroes.map(hero => {
          return (
            <> {
              // multiple tags inside a higher order function need to be wrapped in empty tags
            }
            <div>{hero.slug}</div>
            <div>{hero.realname}</div>
            </>
          )
          })
        }
    </div>
  )
}

export default Heroes;
