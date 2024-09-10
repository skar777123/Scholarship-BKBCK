import React from 'react'

export default function Check(props) {
    function handleClick(){
        console.log(props.item);
    }
  return (
    <div>
        <button onClick={handleClick}>
            Check Forms
        </button>
    </div>
  )
}
