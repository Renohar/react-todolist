import Header from "./Header"
import './App.css';
import Footer from "./Footer";
import Content from "./Content";
import {useEffect, useState} from 'react'
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {

  const [items,setItems] = useState(JSON.parse(localStorage.getItem('todo_list')) || [])

const handleClick = (id)=>{
    const  ListItems = items.map(
        (item) => item.id ===id ? { ...item,checked:!item.checked} : item
    )
    setItems(ListItems);
    localStorage.setItem("todo_list",JSON.stringify(ListItems));

}

const handleDelete = (id) =>{
  const afterDeleteItems = items.filter((item) => item.id !== id)
  setItems(afterDeleteItems)
  localStorage.setItem("todo_list",JSON.stringify(afterDeleteItems));
}


const [newItem,setNewItem] = useState()



const addItem = (item) =>{
  const id = items.length ? items[items.length-1].id +1 : 1;
  const addnewItem = {
    id,
    checked: false,
    item
  }
  const listnewitems = [...items,addnewItem]
  setItems(listnewitems)
  localStorage.setItem("todo_list",JSON.stringify(listnewitems))
}

const handleSubmit = (e) =>{
 
  e.preventDefault();
  addItem(newItem);
  setNewItem('')
}

const  [search,setSearch] = useState("")


useEffect( () =>{
  console.log("render")
},[]

)

  return (
    <div className="App">

      <Header title="ToDo List"/>
      <AddItem 
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}/>

      <SearchItem 
      search = {search}
      setSearch = {setSearch}
      />

      <Content 
      items={items.filter(
       item => (
         ((item.item).toLowerCase()).includes(
           search.toLowerCase()
         )
       )
      )}
      handleClick = {handleClick}
      handleDelete = {handleDelete}
      />

      <Footer length={items.length}/>

    </div>
  );
}

export default App;
