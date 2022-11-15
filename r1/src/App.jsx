import { useState } from "react";
import "./App.scss";
import Categories from "./Components/Categories";
import taskData from "./js-task.json";

export default function App() {
  const [data, setData] = useState(taskData);

  const deleteHandler = (id) => {
    function recursiveRemove(list, id) {
      return list
        .map((item) => {
          return { ...item };
        })
        .filter((item) => {
          if ("children" in item) {
            item.children = recursiveRemove(item.children, id);
          }
          return item.id !== id;
        });
    }
    const removedElement = recursiveRemove([data], id);
    setData(...removedElement, data);
  };

  return (
    <div className="container">
      <h1>Categories tree</h1>
      <Categories data={data} deleteHandler={deleteHandler} />
    </div>
  );
}
