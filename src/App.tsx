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
      deadline: 'Wed Jun 17 2021',
    },
    {
      id: 2,
      title: 'learn golang',
      deadline: 'Thu Jun 20 2021',
    },
    {
      id: 3,
      title: 'study mern',
      deadline: 'Tue July 17 2021',
    },
    {
      id: 4,
      title: 'I dunno',
      deadline: 'Fri May 23 2021',
    },
  ]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task: { title: string; deadline: string }) => {
    const id = Math.floor(Math.random() * 999);
    const newTask = { id, ...task };

    task.title.length && setTasks([...tasks, newTask]);
  };

  return (
    <div
      css={css`
        border-radius: 16px;
        margin: 0 auto;
        width: 500px;
        height: 100vh;
        margin-top: 30px;
        position: relative;
        top: 40px;

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
