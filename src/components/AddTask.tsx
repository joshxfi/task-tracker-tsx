/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { FaPlus } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface AddTaskProps {
  addTask: (task: { title: string; deadline: string }) => void;
}

export const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [title, setTitle] = useState<string>('');
  const [newDeadline, setDeadline] = useState<Date>(new Date());

  const onSubmit = (e: any) => {
    e.preventDefault();

    const deadline = newDeadline.toDateString();

    addTask({ title, deadline });

    setTitle('');
  };

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
          border: 3px #4aa96c solid;
          background: none;
          margin-bottom: 1em;
          border-radius: 8px;
          height: 40px;
          width: 300px;
          padding: 10px;
          color: #e0e0e0;
        }

        .btn {
          outline: none;
          background: #4aa96c;
          border: none;
          color: #1e1e1e;
          font-weight: 500;
          height: 30px;
          margin: 0 auto;
          margin-bottom: 25px;
          cursor: pointer;

          svg {
            position: relative;
            top: 2px;
          }
        }
      `}
    >
      <form spellCheck="false" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <DatePicker
          selected={newDeadline}
          onChange={(date: Date) => setDeadline(date)}
        />
        <button type="submit" className="btn">
          Add Task <FaPlus />{' '}
        </button>
      </form>
    </div>
  );
};
