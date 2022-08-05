import React, { useContext} from 'react'
import { UserContext,LanguageContext } from '../App'

const Comp_F_useContext1 = () => {

  const user = useContext(UserContext)
  const language = useContext(LanguageContext)

  return (
    <div>
      {user.name}:{ language}
    </div>
    // <div>
    //   useContextを使わない書き方
    //   <UserContext.Consumer>
    //     {
    //       user => {
    //         return(
    //           <LanguageContext.Consumer>
    //             {
    //               language => {
    //                 return <div>{user.name}:{language}</div>
    //               }
    //             }
    //           </LanguageContext.Consumer>
    //         )
    //       }
    //     }
    //   </UserContext.Consumer>
    // </div>
  )
}

export default Comp_F_useContext1;
