import React from 'react'

const Item_input = ({edit,setEdit,item,setItem,toggle,settoggle,task,setTask}) => {
     /////// adding the data input//////

     const handleforminput = (e) => {
        const { name } = e.target
        setItem((prev) => ({ ...prev, id: Math.floor(Math.random() * 10) + e.target.value, [name]: e.target.value }))

    }
    const handleformsubmit = (e) => {
        e.preventDefault()
        console.log(item)
        const { name } = item;
        const ifitemMatched = task.find((cur_elem) => cur_elem.name == name);
        if (!item) return;
        else if (ifitemMatched) {
            setItem({
                id: "",
                name: "",
                description: "",
                price: ""
            })
            return;
        }
        else if (item && !toggle) {
            setTask(
                task.map((elem) => {
                    if (elem.id == edit) {
                        return { ...elem, name: item.name, description: item.description, price: item.price }
                    }
                    return elem;

                })
            )
            setItem({
                id: "",
                name: "",
                description: "",
                price: ""
            })
            settoggle(true)
            setEdit(null)
        }
        else {
            setTask((prev) => [...prev, item])
            setItem({
                id: "",
                name: "",
                description: "",
                price: ""
            })
        }
    }
  return (
    <section  >
                <form className='flex flex-col gap-5' onSubmit={handleformsubmit}>
                    <div>
                        <input className='border place-content-center ' type="text" name='name' placeholder='Name' autoComplete='off' value={item.name} onChange={handleforminput} required />
                    </div>
                    <div>
                        <textarea   className='border content-center'placeholder='Description' name='description' value={item.description} onChange={handleforminput}></textarea>
                    </div>
                    <div>
                        <input  className='border content-center' type="number" name='price' placeholder='Price' value={item.price} onChange={handleforminput} />
                    </div>
                    {
                        toggle ? <button className='btn'type='submit'>Add Item</button> : <button className='btn' type='submit'>Edit Item</button>
                    }

                </form>
            </section>
  )
}

export default Item_input
