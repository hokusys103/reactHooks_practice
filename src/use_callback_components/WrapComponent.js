import React, { useState,useCallback} from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

const WrapComponent = () => {

  const [age, setAge] = useState(30);
  const [score, setScore] = useState(100);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
    console.log("ageの描画")
  }, [age]);
  //第二引数の値が変更されるまでは再生成されなくなる

  const incrementScore = useCallback(() => {
    setScore(score + 100)
    console.log("scoreの描画")
  },[score])



  return (
    <div>
      <Title />
      <Count text='年齢' count={age} />
      <Count text='信用スコア' count={score} />
      <Button handleClick={incrementAge}>年齢+</Button>
      <Button handleClick={incrementScore}>信用スコア+</Button>
    </div>
  )
}

export default WrapComponent
