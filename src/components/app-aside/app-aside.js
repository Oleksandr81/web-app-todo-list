import { Component } from "react";

import "../../style/components/app-aside.scss";

class AppAside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonsData: [
        { label: 'all', name: 'all' },
        { label: 'completed', name: 'Completed' },
        { label: 'uncompleted', name: 'Uncompleted' }
      ],
      filter: 'all'
    }
  }

  onUpdateFilter = (e) => {
    const filter = e.target.getAttribute('name');
    
    this.setState({filter});
    this.props.onUpdateFilter(filter);
  }
  
  render() {
    const {buttonsData, filter} = this.state;

    const buttons = buttonsData.map(({ label, name }) => {
      const clazz = (label === filter) ? `asaid__button ${label} active` : `asaid__button ${label}`

      return (
        <button
          className={clazz}
          type="button"
          key={label}
          name={label}
          onClick={this.onUpdateFilter}>
          {name}
        </button>
      )
    })
  
    return (
      <div className="asaid__container">
        {buttons}
      </div>
    )
  }
  
}

export default AppAside;