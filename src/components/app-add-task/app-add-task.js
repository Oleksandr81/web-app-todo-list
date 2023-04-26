import { Component } from "react";

import "../../style/components/app-add-task.scss"

class AppAddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      showButton: true
    }
  }

  onShowAddTaskField = () => {
    this.setState((state) => ({
      showButton: state.showButton = false
    }))
  }

  onHideAddTaskField = () => {
    this.setState({
      showButton: true,
      title: "",
      description: ""
    })
  }

  writeNewTask = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title) {
      this.props.onAdd(this.state.title, this.state.description);
      this.setState({
        title: "",
        description: ""
      })
    }
  }

  render() {
    const { title, description, showButton } = this.state;
    const { onAddTask } = this.props;

    const classHideButton = showButton ? '' : 'hide',
      classShowFieldAddNewTask = showButton ? '' : 'show';

    return (

      <div className="tasks__add-task">
        <div className={`add-task__button ${classHideButton}`}>
          <button className="button__plus" onClick={this.onShowAddTaskField}></button>
          <div className="add-task__text">Add task</div>
        </div>
        <form
          className={`add-task__inputs ${classShowFieldAddNewTask}`}
          onSubmit={this.onSubmit}>
          <div className="inputs__block">
            <input type="text"
              className="inputs__title"
              placeholder="Title"
              value={title}
              name='title'
              onChange={this.writeNewTask} />
            <textarea
              className="inputs__description"
              rows="3"
              value={description}
              name='description'
              onChange={this.writeNewTask}>
            </textarea>
          </div>
          <div className="inputs__buttons">
            <button type="submit" className="button-task button__add">Add</button>
            <button type="button" className="button-task button__cancel" onClick={this.onHideAddTaskField}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AppAddTask;