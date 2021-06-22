/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { TaskList } from '../App';
import { FaTrash } from 'react-icons/fa';

interface TaskProps {
  task: TaskList;
  deleteTask: (id: number) => void;
}

export const Task: React.FC<TaskProps> = ({ task, deleteTask }) => {
  return (
    <div
      css={css`
        background: #333;
        padding: 1em;
        width: 80%;
        margin: 0 auto;
        margin-bottom: 1em;
        border-radius: 8px;
        display: flex;
        position: relative;

        h2 {
          font-size: 15px;
          color: #bef0be;
        }

        p {
          font-size: 13px;
        }

        svg {
          position: absolute;
          right: 0;
          top: 0;
          margin: 1em;
          transition: 0.3s;
          cursor: pointer;

          &:hover {
            color: #9fe6a0;
          }
        }
      `}
    >
      <div>
        <h2>{task.task}</h2>
        <p>{task.deadline}</p>
      </div>
      <FaTrash onClick={() => deleteTask(task.id)} />
    </div>
  );
};
