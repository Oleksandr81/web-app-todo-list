import TaskListItem from "../app-task-list-item/app-task-list-item";

import "../../style/components/app-tasks.scss";

const AppTasks = ({ data, onDelete, onToggleChecked, onValueChange }) => {
  const task = data.map(item => {

    const {id, ...itemProps} = item;
    return (
      <TaskListItem 
      key={id} 
      {...itemProps}
      onDelete={() => onDelete(id)} 
      onToggleChecked={() => onToggleChecked(id)}
      onValueChange={(e) => onValueChange(id, e)} />
    )
  });

  return (
    <div className="tasks__task">
      <ul className="task__list">
        {task}
      </ul>
    </div>
  )

}

export default AppTasks;