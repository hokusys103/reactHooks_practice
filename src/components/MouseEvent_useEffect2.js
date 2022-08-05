
import React,{ useState,useEffect} from 'react'

export const MouseEvent_useEffect = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getMousePosition = e => {
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    console.log("useEffectが呼ばれました")
    window.addEventListener('mouseover', getMousePosition);
    //関数のアンマウント時（操作終了時）に処理を追加
    return () => {
      window.removeEventListener('mousemove',getMousePosition)
    }
  },[])

  return (
    <div>
      <ul>
        <li>x座標：{ x}</li>
        <li>y座標：{ y}</li>
      </ul>
    </div>
  )
}
