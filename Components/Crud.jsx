import React, { useState } from 'react'
import Itemcard from './Itemcard'
import Item_input from './Item_input'

const Crud = () => {
    const [item, setItem] = useState({})
    const [toggle, settoggle] = useState(true)
    const [edit, setEdit] = useState(null)
    const [task, setTask] = useState(() => {
        const mylist = localStorage.getItem("myitemlist");
        if (!mylist) return [];
        return JSON.parse(mylist)
    })

   

    /// /// /// //// ////////   adding data to local storage /// //// ////// //////
    localStorage.setItem("myitemlist", JSON.stringify(task))


    return (
        <section className=' item_list_container flex flex-col items-center gap-5 '>
            <header>
                <h1 className='font-bold text-2xl'> Item list</h1>
            </header>
           <Item_input task={task} setTask={setTask} toggle={toggle} settoggle={settoggle} edit={edit} setEdit={setEdit} item={item} setItem={setItem}/>
            <Itemcard task={task} setTask={setTask} toggle={toggle} settoggle={settoggle} edit={edit} setEdit={setEdit} item={item} setItem={setItem}/>
        </section>
    )
}

export default Crud



