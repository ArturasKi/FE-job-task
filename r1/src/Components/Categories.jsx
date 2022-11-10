import React, { useState } from "react";

export default function Categories({data, deleteHandler}) {
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div draggable className="category-item">
      <span onClick={expand}>{data.name}</span>
      <button onClick={() => deleteHandler(data.id)} className="btn">Delete</button>
      {isVisible ? (
        data.children.map((child, key) => {
          return (
            <div key={key} draggable className="category-item">
              <Categories key={child.id} data={child} deleteHandler={deleteHandler}/>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
