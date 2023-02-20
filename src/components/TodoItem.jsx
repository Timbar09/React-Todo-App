import styles from '@/styles/TodoItem.module.css';
import { useState, useRef } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { BiEditAlt } from 'react-icons/bi';
import { useTodosContext } from '@/context/TodosContext';

const TodoItem = ({ itemProp }) => {
  const { handleChange, delTodo, setUpdate } = useTodosContext();
  const [editing, setEditing] = useState(false);
  const editInputRef = useRef(null);

  const handleEditing = () => {
    setEditing(true);
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={handleEditing}>
          <BiEditAlt />
        </button>
        <button onClick={() => delTodo(itemProp.id)}>
          <HiOutlineTrash
            style={{
              color: '#e311115f',
            }}
          />
        </button>
        <span style={itemProp.completed ? completedStyle : null}>{itemProp.title}</span>
      </div>
      <input
        className={styles.textInput}
        style={editMode}
        ref={editInputRef}
        defaultValue={itemProp.title}
        type="text"
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
