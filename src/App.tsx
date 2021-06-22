/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx, Global } from '@emotion/react';
import { AddTask } from './components/AddTask';
import { Tasks } from './components/Tasks';
import { TaskList } from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskList[]>([
    {
      id: 1,
      title: 'learn typescript',
      deadline: '10/23/21',
    },
    {
      id: 2,
      title: 'learn golang',
      deadline: '5/16/21',
    },
    {
      id: 3,
      title: 'study mern',
      deadline: '9/3/21',
    },
    {
      id: 4,
      title: 'I dunno',
      deadline: '11/31/21',
    },
  ]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task: { title: string; deadline: Date }) => {
    const id = Math.floor(Math.random() * 999);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div
      css={css`
        border-radius: 16px;
        margin: 0 auto;
        width: 500px;
        height: 100vh;
        margin-top: 30px;

        h1 {
          color: #bef0be;
          text-align: center;
        }
      `}
    >
      <div>
        <h1>Task Tracker</h1>
        <AddTask addTask={addTask} />
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
            cursor: cell;
            overflow: hidden;
          }

          ::-webkit-scrollbar {
            display: none;
          }

          ::selection {
            background: #4aa96c;
          }
        `}
      />
    </div>
  );
};

export default App;
