import { useState } from "react";
import "./App.scss";
import Categories from "./Components/Categories";
import taskData from "./js-task.json";

export default function App() {

  const [data, setData] = useState(taskData)

  let dataArr = [data];
  console.log(dataArr)

  const deleteHandler = (id) => {
    console.log(id)
    // setData(current => current.children.filter(item => item.id !== id));
    function recursiveRemove ( list, id ) {
      return list.map ( item => { return {...item} }).filter ( item => {
          if ( 'children' in item ) {
              item.children = recursiveRemove ( item.children, id );
          }
          return item.id !== id;
      });
  }
  console.log(recursiveRemove(dataArr, id));
  }
  
  return (
    <div className="container">
      <h1>Categories tree</h1>
      <Categories data={data} deleteHandler={deleteHandler}/>
    </div>
  );
}