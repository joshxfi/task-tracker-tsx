/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { TaskList } from '../App';
import { FaTrash } from 'react-icons/fa';

interface TaskProps {
  task: TaskList;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div
      css={css`
        background: #333;
        padding: 1em;
        width: 70%;
        margin: 0 auto;
        margin-bottom: 1em;
        border-radius: 8px;
        display: flex;
        position: relative;

        h2 {
          font-size: 15px;
        }

        svg {
          position: absolute;
          right: 0;
          top: 0;
          margin: 1em;
          transition: 0.3s;
          cursor: pointer;

          &:hover {
            color: lime;
          }
        }
      `}
    >
      <div>
        <h2>{task.task}</h2>
        <p>{task.deadline}</p>
      </div>
      <FaTrash />
    </div>
  );
};
