/* eslint-disable react/prop-types */
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = (props) => {
  return (
    <>
      <li>
        <p className={props.checked ? "checkList" : "notCheckList"}>
          {props.currTask}
        </p>
        <div className='listButton'>
          <button
            className='checkButton'
            onClick={() => props.onHandleCheckedTodo(props.currTask)}
          >
            <MdCheck></MdCheck>
          </button>
          <button
            className='deleteButton'
            onClick={() => {
              props.onHandleTodoDelete(props.currTask);
            }}
          >
            <MdDeleteForever></MdDeleteForever>
          </button>
        </div>
      </li>
    </>
  );
};
