import { Component } from "react";

import "../../style/components/app-header.scss";

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <div className="header__container">
        <div className="header__logo">
          <div className="logo__img">
            <img src="./img/logo.png" alt="logo todo list" />
          </div>
          <span className="logo__text">todo daily</span>
        </div>
        <div className="header__search">
          <input type="text"
            placeholder="Search task"
            className="search__input"
            value={this.state.term}
            onChange={this.onUpdateSearch} />
        </div>
      </div>
    )
  }

}

export default AppHeader;