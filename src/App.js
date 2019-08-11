import React from 'react';
import LeftMenu from "./LeftMenu";
import Contents from "./Contents";
import {initData} from './initData';

const uniqid = require('uniqid');

export class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = (initData);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state,'데이터');
    if (this.state.searchWord.length > 0 && this.state.searchMode === false) {
      this.setState({searchMode: true, focused: undefined});
    } else if (this.state.searchWord.length === 0 && this.state.searchMode === true) {
      this.setState({searchMode: false, focused: 0})
    }
  }

  componentDidMount() {
    this.setState({load: true});
  }

  _setSearchWord = (value) => {
    this.setState({searchWord: value})
  };

  _changeFocus = (index) => {
    this.setState({focused: index});
  };

  _addItem = (check, group, txt) => {
    this.setState({
      items: this.state.items.concat({
        check: check, group: group, txt: txt, key: uniqid()
      })
    })
  };

  _changeItem = (key, txt) => {
    this.setState({
      items: this.state.items.map(
          el => el.key === key ? {...el, txt: txt} : el
      )
    })
  };

  _checkItem = (key) => {
    this.setState({
          items: this.state.items.map(
              el => el.key === key ? {...el, check: !el.check} : el
          )
        }
    )
  };

  _addGroup = (name) => {
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

  _deleteItem = (key) => {
    this.setState({
          items: this.state.items.filter(
              el => el.key !== key
          )
        }
    )
  };

  _deleteItemByGroup = (group) => {
    this.setState({
          items: this.state.items.filter(
              el => el.group !== group
          )
        }
    )
  };

  _deleteGroup = (key) => {
    const groups = this.state.groups;
    this.setState({
          groups: groups.filter(
              el => el.key !== key
          )
        }
    )
  };

  render() {
    let todos = [];
    if (this.state.load === false) {
      return (<div> ~ loading ~ </div>)
    } else if (this.state.load === true) {

      if (this.state.searchMode === false) {
        todos = this.state.items.filter((e) => e.group === this.state.focused);
      } else if (this.state.searchMode === true) {
        todos = this.state.items.filter((e) => e.txt.includes(this.state.searchWord));
      }

      return (
          <div className="app">
            <div className="upperBar">TODO</div>
            <div className="main-container">
              <div className="leftMenu">
                <LeftMenu _deleteItemByGroup={this._deleteItemByGroup} _deleteGroup={this._deleteGroup}
                          _setSearchWord={this._setSearchWord} _changeFocus={this._changeFocus}
                          _addGroup={this._addGroup}
                          groups={this.state.groups} focused={this.state.focused}/>
              </div>
              <div className="contents">
                <Contents groupsLen={this.state.groups.length} _deleteItem={this._deleteItem}
                          focused={this.state.focused}
                          _checkItem={this._checkItem} _changeItem={this._changeItem} _addItem={this._addItem}
                          todos={todos}/>
              </div>
            </div>
            <div className="downside">POWERED by KTH</div>
          </div>
      )
    }
  }
}