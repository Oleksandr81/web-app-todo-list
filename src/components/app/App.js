import { Component } from 'react';

import AppHeader from '../app-header/app-header';
import AppAside from '../app-aside/app-aside';
import AppTaskInfo from '../app-task-info/app-task-info';
import AppTasks from '../app-tasks/app-tasks-list';
import AppAddTask from '../app-add-task/app-add-task';
import AppPopup from '../app-popup/app-popup';

import '../../style/components/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      term: '',
      filter: '',
      modal: false
    };
    this.id = 1
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {

      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addNewTask = (title, description) => {
    const newItem = {
      title,
      description,
      checked: false,
      id: this.id++
    }
    this.setState(({ data }) => {
      return {
        data: [...data, newItem]
      }
    })
  }

  onToggleChecked = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, checked: !item.checked }
        }
        return item;
      })
    }))
  }

  onValueChange = (id, e) => {
    this.setState(({ data }) => ({
      data: data.map(item => {

        if (item.id === id) {
          return { ...item, [e.target.name]: e.target.value }
        }
        return item;
      })
    }))
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return (item.title.toLowerCase().indexOf(term.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(term.toLowerCase()) > -1)
    })
  }

  filterEmp = (items, filter) => {
    switch (filter) {
      case 'completed':
        return items.filter(item => {
          return item.checked;
        })
      case 'uncompleted':
        return items.filter(item => {
          return !item.checked;
        })
      default:
        return items;
    }
  }

  onUpdateFilter = (filter) => {
    this.setState({ filter })
  }

  openModal = (modal) => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    const allTask = this.state.data.length;
    const checkedTask = this.state.data.filter(item => item.checked).length;

    const { data, term, filter, modal } = this.state;
    const visibleData = this.searchEmp(this.filterEmp(data, filter), term);

    const classModal = modal ? ' visible' : '';
    return (
      <div className="wrapper" >
        <header className="header"><AppHeader onUpdateSearch={this.onUpdateSearch} /></header>
        <main className="main">
          <aside className="asaid"><AppAside onUpdateFilter={this.onUpdateFilter} /></aside>
          <section className="section__tasks">
            <div className="tasks__container">
              <div className="tasks__info">
                <AppTaskInfo
                  allTask={allTask}
                  checkedTask={checkedTask}
                />
              </div>
              <div className="tasks__task">
                <AppTasks data={visibleData}
                  onDelete={this.deleteItem}
                  onToggleChecked={this.onToggleChecked}
                  onValueChange={this.onValueChange} />
              </div>
              <div className="tasks__add-task">
                <AppAddTask onAdd={this.addNewTask} />
              </div>
            </div>
          </section>
        </main>
        <div className={`popup ${classModal}`}><AppPopup openModal={this.openModal} /></div>
      </div >
    )
  }
}

export default App;
