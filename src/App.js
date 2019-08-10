import React from 'react';
import LeftMenu from "./LeftMenu";
import Contents from "./Contents";
import {fake} from './fakeData';

const uniqid = require('uniqid');

export class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = (fake);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchWord.length > 0 && this.state.searchMode === false) {
      this.setState({searchMode: true, focused: undefined});
    } else if (this.state.searchWord.length === 0 && this.state.searchMode === true) {
      this.setState({searchMode: false, focused: 0})
    }
  }

  setSearchWord = (value) => {
    this.setState({searchWord: value})
  };

  changeFocus = (index) => {
    this.setState({focused: index});
  };

  addItem = (check, group, txt) => {
    this.setState({
      items: this.state.items.concat({
        check: check, group: group, txt: txt, key: uniqid()
      })
    })
  };

  changeItem = (key, txt) => {
    const items = this.state.items;
    this.setState({
          items: items.map(
              el => el.key === key ? {...el, txt: txt} : el
          )
        }
    )
  };

  checkItem = (key) => {
    const items = this.state.items;
    this.setState({
          items: items.map(
              el => el.key === key
                  ? {...el, check: !el.check}
                  : el
          )
        }
    )
  };

  addGroup = (name) => {
    this.setState({
      groups: this.state.groups.concat(
          {
            name: name,
            index: this.state.groups.length + 1,
            unique: uniqid()
          })
    })
  };

  // changeGroup = () => {
  // };

  deleteItem = (key) => {
    const items = this.state.items;
    this.setState({
          items: items.filter(
              el => el.key !== key
          )
        }
    )
  };

  deleteItemByGroup = (group) => {
    const items = this.state.items;
    this.setState({
          items: items.filter(
              el => el.group !== group
          )
        }
    )
  };

  deleteGroup = (key, index) => {
    const groups = this.state.groups;
    this.setState({
          groups: groups.filter(
              el => el.key !== key
          )
        }
    )
  };


  componentDidMount() {
    this.setState({load: true});
  }

  render() {
    if (this.state.load === false) {
      return (<div> ~ loading ~ </div>)
    } else if (this.state.load === true) {

      let todos = [];
      if (this.state.searchMode === false) {
        todos = this.state.items.filter((e) => e.group === this.state.focused);
      } else if (this.state.searchMode === true) {
        todos = this.state.items.filter((e) => e.txt.includes(this.state.searchWord));
      }

      return (
          <div className="app">
            <div className="leftMenu">
              <LeftMenu deleteItemByGroup={this.deleteItemByGroup} deleteGroup={this.deleteGroup}
                        setSearchWord={this.setSearchWord} changeFocus={this.changeFocus}
                        addGroup={this.addGroup}
                        groups={this.state.groups} focused={this.state.focused}
                        className="leftMenu"/>
            </div>
            <div className="contents">
              <Contents groupsLen={this.state.groups.length} deleteItem={this.deleteItem} checkItem={this.checkItem}
                        focused={this.state.focused}
                        changeItem={this.changeItem}
                        addItem={this.addItem} todos={todos}/>
            </div>
          </div>
      )
    }
  }
}