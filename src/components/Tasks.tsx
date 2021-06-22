/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { Task } from './Task';
import { TaskList } from '../App';

interface TasksProps {
  tasks: TaskList[];
  deleteTask: (id: number) => void;
}

export const Tasks: React.FC<TasksProps> = ({ tasks, deleteTask }) => {
  return (
    <div
      css={css`
        overflow-y: scroll;
        width: 100%;
      `}
    >
      {tasks.map(
        (task: TaskList, index: number): JSX.Element => (
          <Task key={index} task={task} deleteTask={deleteTask} />
        )
      )}
    </div>
  );
};
