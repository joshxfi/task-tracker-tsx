import React from 'react';
import { Task } from './Task';
import { TaskList } from '../App';

interface TasksProps {
  tasks: TaskList[];
}

export const Tasks: React.FC<TasksProps> = ({ tasks }) => {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      {tasks.map(
        (task: TaskList, index: number): JSX.Element => (
          <Task key={index} task={task} />
        )
      )}
    </div>
  );
};
