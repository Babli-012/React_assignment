import React from 'react'

const Itemcard = ({edit,setEdit,item,setItem,toggle,settoggle,task,setTask}) => {
    const handleeditbtn = (value) => {
        settoggle(false)
        let newitem = task.find((elem) => {
            return elem.id === value
        })

        setItem({
            name: newitem.name,
            description: newitem.description,
            price: newitem.price
        })
        setEdit(value);

    }
    const handledltbtn = (value) => {
        const updatedTask = task.filter((cur_elem) => {
            return cur_elem.id !== value

        })
        setTask(updatedTask)

    }
    return (
        <section   >
            <ul className='  item-list grid grid-cols-4 gap-5'>
                {
                    task.map((cur_elem) => {
                        return (
                            <div className='card flex flex-col gap-5' key={cur_elem.id}>
                                <h2>Name: {cur_elem.name}</h2>
                                <p>Description: {cur_elem.description}</p>
                                <p>Price: {cur_elem.price}</p>
                                <button className='btn' onClick={() => handleeditbtn(cur_elem.id)}>Edit btn</button>
                                <button className='btn' onClick={() => handledltbtn(cur_elem.id)}>Delete btn</button>
                            </div>
                        )


                    })
                }
            </ul>
        </section>
    )
}

export default Itemcard
