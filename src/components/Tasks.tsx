/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { Task } from './Task';
import { TaskList } from '../types';

interface TasksProps {
  tasks: TaskList[];
  deleteTask: (id: number) => void;
}

export const Tasks: React.FC<TasksProps> = ({ tasks, deleteTask }) => {
  return (
    <div
      css={css`
        overflow-y: scroll;
        margin: 0 auto;
        width: 80%;
        border-radius: 16px;
        height: 470px;
      `}
    >
      {tasks
        .slice(0)
        .reverse()
        .map(
          (task: TaskList, index: number): JSX.Element => (
            <Task key={index} task={task} deleteTask={deleteTask} />
          )
        )}
    </div>
  );
};
