import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateandTime } from "./TodoDateandTime";

const todoKey = "reactTodo";

export const Todo = () => {
  const [task, setTask] = useState(() => {
    const pastData = localStorage.getItem(todoKey);
    if (!pastData) {
      return [];
    }

    return JSON.parse(pastData);
  });

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //to check if the input value is empty
    if (!content) return;

    //to check if the data to enter is already present in the list
    const contentMatched = task.find((currTask) => {
      currTask.content === content;
    });

    if (contentMatched) true;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  //ToDo delete
  const handleToDoDelete = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
  };

  //Todo storing data inside the local storage
  localStorage.setItem(todoKey, JSON.stringify(task));

  //ToDo Clear All
  const handleClearAll = () => {
    setTask([]);
  };

  //ToDo checked or not
  const handleCheckedTodo = (content) => {
    const checkTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });

    setTask(checkTask);
  };

  return (
    <>
      <section className='todoContainer'>
        <h1>To Do List</h1>
        <TodoDateandTime />

        <TodoForm onAddToDo={handleFormSubmit} />

        <section className='itemList'>
          <ul>
            {task.map((currTask) => {
              return (
                <TodoList
                  key={currTask.id}
                  currTask={currTask.content}
                  onHandleTodoDelete={handleToDoDelete}
                  onHandleCheckedTodo={handleCheckedTodo}
                  checked={currTask.checked}
                />
              );
            })}
          </ul>
        </section>

        <section className='clearAll'>
          <button onClick={handleClearAll}>Clear All</button>
        </section>
      </section>
    </>
  );
};
