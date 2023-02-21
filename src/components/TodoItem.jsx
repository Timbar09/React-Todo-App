import styles from '@/styles/TodoItem.module.css';
import { useState, useRef } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { BiEditAlt } from 'react-icons/bi';
import { useTodosStore } from '@/store';

const TodoItem = ({ itemProp }) => {
  const [editing, setEditing] = useState(false);
  const editInputRef = useRef(null);

  const handleChange = useTodosStore((state) => state.handleChange);
  const delTodo = useTodosStore((state) => state.delTodo);
  const setUpdate = useTodosStore((state) => state.setUpdate);

  const handleEditing = () => {
    setEditing(true);
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
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
    <li className={styles.item} style={itemProp.completed ? { opacity: 0.4 } : null}>
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
