/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { FaPlus } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface AddTaskProps {
  addTask: (task: { title: string; deadline: Date }) => void;
}

export const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [title, setTitle] = useState<string>('');
  const [deadline, setDeadline] = useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();

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
          placeholder="task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div
          className="btn"
          css={css`
            width: 300px;
            border-radius: 8px;
            display: grid;
            place-items: center;
            font-size: 14px;
            font-weight: 300;
          `}
          onClick={() => setShowCalendar((prevState) => !prevState)}
        >
          set deadline
        </div>
        {showCalendar && (
          <Calendar
            css={css`
              width: 300px;
              border-radius: 16px;
              margin-bottom: 20px;
            `}
            onChange={setDeadline}
            value={deadline}
          />
        )}
        <button type="submit" className="btn">
          Add Task <FaPlus />{' '}
        </button>
      </form>
    </div>
  );
};
