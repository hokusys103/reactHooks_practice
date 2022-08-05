import React, { useState} from 'react'

function FormHook_usestate() {
  const [name, setName] = useState({firstName:"",lastName:""});
  return (
    <div>
      <div>
        <p>First Name - { name.firstName}</p>
        <p>Last Name - { name.lastName}</p>
      </div>
      <form>
        <input
          type="text"
          value={name.firstName}
          // setState(function|object nextState[, function callback])
          //※第一⇒setStateを行うための関数 第二⇒setStateが完了した後に実行するコールバック関数
          onChange={e => setName({...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={e => setName({...name, lastName: e.target.value })}
        />
        <div>{JSON.stringify( name)}</div>
      </form>
    </div>
  )
}

export default FormHook_usestate
