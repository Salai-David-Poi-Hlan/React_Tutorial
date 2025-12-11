import {FaPlus} from 'react-icons/fa'
import {useRef} from 'react'

const AddItem=({item,setNewItem,handleSubmit})=>{
  const inputRef=useRef()
       return(
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
             <input
             autoFocus
             ref={inputRef}
             id="addItem"
             type="text"
              placeholder="Add tem"
             required
             value={item}
             onChange={(e)=>setNewItem(e.target.value)}
             />
             <button
             type="submit"
             aria-label="Add Item"
             onClick={()=>inputRef.current.focus()}
             >
               <FaPlus/>
             </button>
        </form>
       )
}

export default AddItem