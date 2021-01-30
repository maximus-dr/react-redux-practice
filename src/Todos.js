import React from 'react'

export default function Todos({todos, deleteTodo}) {

  const todosList = todos.length
    ? todos.map(item => {
      return (
        <div className="collection-item" key={item.id}>
          <span>{item.content}</span>
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </div>
      );
    })
    : <p className="center">You have no todo's left</p>;

  return (
    <div className="todos collection">
      {todosList}
    </div>
  )
}
