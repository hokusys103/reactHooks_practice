import './App.css';
import { useState,createContext } from "react";
import Comp_C_useContext1 from './components/Comp_C_useContext1';
import DataFetchById_useEffect from './components/DataFetchById_useEffect4';
import DataFetch_useEffect from './components/DataFetch_useEffect3';
import { EffectHook_useEffect } from './components/EffectHook_useEffect1';
// import Counter from './components/Counter';
// import CounterHook_usestate from './components/CounterHook_usestate';
import FormHook_usestate from './components/FormHook_usestate';
import ItemHook_usestate from './components/ItemHook_usestate';
import { MouseEvent_useEffect } from './components/MouseEvent_useEffect2';
import WrapComponent from './use_callback_components/WrapComponent';

export const UserContext = createContext();
export const LanguageContext = createContext();

function App() {

  //useContextの時のpropsを渡す流れ確認
  // const [user, setUser] = useState({ name: "yamada", age: "32" });
  // const [language, setLanguage] = useState("日本語")

  //---------------------------------

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterHook_usestate/> */}
      {/* <FormHook_usestate/> */}
      {/* <ItemHook_usestate/> */}
      {/* <EffectHook_useEffect/> */}
      {/* <MouseEvent_useEffect/> */}
      {/* <DataFetch_useEffect/> */}
      {/* <DataFetchById_useEffect /> */}
      {/* <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <Comp_C_useContext1 />
        </LanguageContext.Provider>
      </UserContext.Provider> */}
      <WrapComponent/>
    </div>
  );
}

export default App;
