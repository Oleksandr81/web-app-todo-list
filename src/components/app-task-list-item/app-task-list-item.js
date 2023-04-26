import { Component } from "react";

import "../../style/components/task-list-item.scss";

class TaskListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadOnly: true,
      title: '',
      description: ''
    };
  }

  rewrite = () => {
    this.setState(({ isReadOnly }) => ({
      isReadOnly: !isReadOnly,
    }));
  }

  render() {
    const { onDelete, title, description, onToggleChecked, checked, onValueChange } = this.props;
    const { isReadOnly } = this.state;

    const fillSvg = isReadOnly ? '#8E8E8E' : '#00cb0e',
      classTextChecked = checked ? "checked" : "",
      classRewrite = this.state.isReadOnly ? "" : "active";

    return (
      <li className="task__item">
        <label className="task__checkbox">
          <input type="checkbox" id="task" checked={checked} onChange={onToggleChecked} />
          <span className="checkbox__box"></span>
          <span className="checkbox__checked"></span>
        </label>
        <div className="task__block">
          <a href="#" className="task__inputs" >
            <input type="text"
              className={`task__title ${classRewrite} ${classTextChecked}`}
              value={title}
              name="title"
              readOnly={isReadOnly}
              onChange={onValueChange} />
            <input type="text"
              className={`task__description ${classRewrite} ${classTextChecked}`}
              value={description}
              name="description"
              readOnly={isReadOnly}
              onChange={onValueChange} />
          </a>
          <div className="task__buttons">
            <button className="button" onClick={this.rewrite}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.1908 3.1525C25.3426 3.3048 25.4279 3.51108 25.4279 3.72612C25.4279 3.94117 25.3426 4.14745 25.1908 4.29975L23.4959 5.99625L20.2459 2.74625L21.9408 1.04975C22.0931 0.897428 22.2998 0.811859 22.5152 0.811859C22.7307 0.811859 22.9373 0.897428 23.0896 1.04975L25.1908 3.15087V3.1525ZM22.347 7.1435L19.097 3.8935L8.0259 14.9662C7.93647 15.0557 7.86914 15.1647 7.82928 15.2847L6.52115 19.2075C6.49743 19.279 6.49406 19.3557 6.51142 19.429C6.52879 19.5024 6.5662 19.5694 6.61948 19.6227C6.67275 19.676 6.7398 19.7134 6.81312 19.7307C6.88644 19.7481 6.96314 19.7447 7.03465 19.721L10.9574 18.4129C11.0773 18.3735 11.1863 18.3067 11.2759 18.2179L22.347 7.14512V7.1435Z" fill={fillSvg} />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.625 21.9375C1.625 22.584 1.88181 23.204 2.33893 23.6611C2.79605 24.1182 3.41603 24.375 4.0625 24.375H21.9375C22.584 24.375 23.204 24.1182 23.6611 23.6611C24.1182 23.204 24.375 22.584 24.375 21.9375V12.1875C24.375 11.972 24.2894 11.7653 24.137 11.613C23.9847 11.4606 23.778 11.375 23.5625 11.375C23.347 11.375 23.1403 11.4606 22.988 11.613C22.8356 11.7653 22.75 11.972 22.75 12.1875V21.9375C22.75 22.153 22.6644 22.3597 22.512 22.512C22.3597 22.6644 22.153 22.75 21.9375 22.75H4.0625C3.84701 22.75 3.64035 22.6644 3.48798 22.512C3.3356 22.3597 3.25 22.153 3.25 21.9375V4.0625C3.25 3.84701 3.3356 3.64035 3.48798 3.48798C3.64035 3.3356 3.84701 3.25 4.0625 3.25H14.625C14.8405 3.25 15.0472 3.1644 15.1995 3.01202C15.3519 2.85965 15.4375 2.65299 15.4375 2.4375C15.4375 2.22201 15.3519 2.01535 15.1995 1.86298C15.0472 1.7106 14.8405 1.625 14.625 1.625H4.0625C3.41603 1.625 2.79605 1.88181 2.33893 2.33893C1.88181 2.79605 1.625 3.41603 1.625 4.0625V21.9375Z" fill={fillSvg} />
              </svg>
            </button>
            <button className="button" onClick={onDelete}>
              <img src="./img/bin.svg" alt="button - change task" />
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default TaskListItem;
