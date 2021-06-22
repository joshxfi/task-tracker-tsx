/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx, Global } from '@emotion/react';
import { AddTask } from './components/AddTask';
import { Tasks } from './components/Tasks';

export interface TaskList {
  id: number;
  task: string;
  deadline: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskList[]>([
    {
      id: 1,
      task: 'learn typescript',
      deadline: '10/23/21',
    },
    {
      id: 2,
      task: 'learn golang',
      deadline: '5/16/21',
    },
    {
      id: 3,
      task: 'study mern',
      deadline: '9/3/21',
    },
    {
      id: 4,
      task: 'I dunno',
      deadline: '11/31/21',
    },
  ]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div
      css={css`
        border-radius: 16px;
        margin: 0 auto;
        width: 500px;
        height: 90vh;
        margin-top: 30px;

        h1 {
          color: #bef0be;
          text-align: center;
        }
      `}
    >
      <div>
        <h1>Task Tracker</h1>
        <AddTask />
      </div>
      {tasks.length ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <p
          css={css`
            text-align: center;
          `}
        >
          no tasks to show...
        </p>
      )}

      <Global
        styles={css`
          * {
            font-family: 'Ubuntu', sans-serif;
            box-sizing: border-box;
          }

          body {
            background: #1e1e1e;
            color: #e0e0e0;
          }

          ::-webkit-scrollbar-track {
            background-color: none;
          }
          ::-webkit-scrollbar {
            width: 5px;
            background-color: #4aa96c;
            border-radius: 16px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #4aa96c;
            border-radius: 16px;
          }
        `}
      />
    </div>
  );
};

export default App;
