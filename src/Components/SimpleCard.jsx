import React, {Component} from 'react'
import Image from './Image'
import Title from './Title'
import Description from './Description'

 class SimpleCard extends Component{
render(){
    return(
    <div className='flex mt-50 w-170 rounded-xl bg-indigo-300 place-self-center'>
        
        <div>

          <Image />

        </div>

        <div>

          <Title text="QUAYE RICHARD" />

          <Description text="My name is Quaye Richard, A software developer student at Codetrain Africa. (GEN 31)"/>
       
        </div>
        
    </div>
    )
}
}
export default SimpleCard
 
