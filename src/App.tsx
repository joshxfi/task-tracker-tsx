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

  return (
    <div
      css={css`
        display: grid;
        place-items: center;
        border: 4px solid lime;
        border-radius: 16px;
        margin: auto;
        width: 500px;
        height: 90vh;
        margin-top: 30px;
        overflow-y: scroll;

        h1 {
          color: #e0e0e0;
        }
      `}
    >
      <h1>Task Tracker</h1>
      <AddTask />
      <Tasks tasks={tasks} />

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

          ::-webkit-scrollbar {
            display: none;
          }
        `}
      />
    </div>
  );
};

export default App;
