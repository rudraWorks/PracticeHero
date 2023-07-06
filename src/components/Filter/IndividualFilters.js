import React from 'react';
import Platform from './IndividualFilters/Platform';
import Performance from './IndividualFilters/Performance';
import Done from './IndividualFilters/Done';
import Bookmarked from './IndividualFilters/Bookmarked';

export default function IndividualFilters({ label, setFilterArray }) {
   
  if(label==='platform')
    return <Platform label={label} setFilterArray={setFilterArray} />

  else if(label=='performance')
    return <Performance label={label} setFilterArray={setFilterArray} />

  else if(label=='done') 
    return <Done label={label} setFilterArray={setFilterArray} />

  else if(label=='bookmarked') 
    return <Bookmarked label={label} setFilterArray={setFilterArray} />
  
}