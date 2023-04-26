import "../../style/components/app-task-info.scss";

const AppTaskInfo = ({allTask, checkedTask}) => {

  function currentDate() {
    const date = new Date();

    let day = addZeroToNumber(date.getDate());
    let month = addZeroToNumber(date.getMonth() + 1);
    let year = addZeroToNumber(date.getFullYear());

    return `${day}-${month}-${year}`;
  }

  function addZeroToNumber(num) {
    if (num < 10) {
      return '0' + num;
    }
    return num;
  } 
  
  return (
    <div className="tasks__info">
      <div className="info__body">
        <div className="info__generally">
          <div className="info__date">{currentDate()}</div>
          <h1 className="info__title">Today tasks</h1>
        </div>
        <div className="info__tasks">{checkedTask} / {allTask} completed</div>
      </div>
    </div>
  )
}

export default AppTaskInfo;