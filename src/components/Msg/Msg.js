import React from 'react'

import '../Msg/Msg.css'

const Msg = (props) => {
  return (
    <div className='msg'>
        <p>
            {props.msg}
        </p>
    </div>
  )
}

export default Msg