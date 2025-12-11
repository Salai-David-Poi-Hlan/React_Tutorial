import {useState} from 'react'   
   
   const Content=()=>{
    const [name,setName]=useState('David')
    const [count,setCount]=useState(0)
          const handleNameChanged=()=>{
        
    const names=["Bob","Kelvin","David"]
    const int=Math.floor(Math.random()*3)
    return names[int]

   }

                const handleNameChanged2=()=>{
    const names=["Bob","Kelvin","David"]
    const int=Math.floor(Math.random()*3)
    setName(names[int])

   }

   const handleClick=()=>{
    console.log("Clicked it");
    
   }
      const handleClick2=(name)=>{
    console.log(`${name} Clicked`);
    
   }
      const handleClick3=(e)=>{
    console.log(e.target.innerText);
   }
        const handleClick4=()=>{
      setCount(count+1)
            setCount(count+1)

      console.log(count);
      
   }

          const handleClick5=()=>{
      console.log(count);
      
   }


        return (
            <main>        <p onDoubleClick={handleClick}>
        Hello {handleNameChanged()}
            </p>
            <p onDoubleClick={handleClick}>
        Hello {name} !
            </p>
                        <button onClick={handleNameChanged2}>Change Name</button>

            <button onClick={handleClick}>Click it</button>
             <button onClick={()=>handleClick2('David')}>Click it</button>
                        <button onClick={(e)=>handleClick3(e)}>Click it</button>
                                                <button onClick={handleClick4}>Click it</button>
                                                  <button onClick={handleClick5}>Click it</button>


            </main>
        )
    }

    export default Content