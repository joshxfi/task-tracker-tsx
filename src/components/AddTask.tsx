/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { FaPlus } from 'react-icons/fa';

interface AddTaskProps {}

export const AddTask: React.FC<AddTaskProps> = ({}) => {
  return (
    <div
      css={css`
        input,
        button {
          display: block;
        }
        display: grid;
        place-items: center;

        input {
          outline: none;
          border: 3px lime solid;
          background: none;
          margin-bottom: 1em;
          border-radius: 8px;
          height: 40px;
          width: 300px;
          padding: 10px;
        }

        button {
          outline: none;
          background: lime;
          border: none;
          color: #1e1e1e;
          font-weight: 500;
          height: 30px;
          margin-bottom: 25px;

          svg {
            position: relative;
            top: 2px;
          }
        }
      `}
    >
      <input type="text" placeholder="task" />
      <input type="text" placeholder="deadline" />
      <button>
        Add Task <FaPlus />{' '}
      </button>
    </div>
  );
};
