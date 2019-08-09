import React from 'react';
import LeftMenu from "./LeftMenu";
import Contents from "./Contents";
import PropTypes from 'prop-types';

export class App extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = ({
      load: false,
      searchMode: false,
      normalMode: true,
      focused: 0
      ,
      groups: [
        {
          name: "첫번째 후손",
          index: 0
        },
        {
          name: "두번째 후손",
          index: 1
        }
      ],
      items: [
        {
          check: false,
          group: 0,
          txt: "cat is good"
        },
        {
          checked: true,
          group: 0,
          txt: "dog is bad"
        }
      ]
    });
  }

  addItem = (check, group, txt) => {
    this.setState({items: this.state.items.concat({check: check, group: group, txt: txt})})
  }
  changeItem = () => {
  }
  deleteItem = () => {
  }

  addGroup = (name) => {
    this.setState({groups: this.state.groups.concat({name: name, index: this.state.groups.length+1})})
  }
  changeGroup = () => {
  }
  deleteItem = () => {
  }

  componentDidMount() {
    console.log("마운트, load:true");
    this.setState({load: true});
  }

  render() {
    if (this.state.load === false) {
      return (<div> ~ loading ~ </div>)
    } else if (this.state.load === true) {

      let todos = this.state.items.filter((e) => e.group === this.state.focused);

      return (
          <div className="app">
            <div className="leftMenu">
              <LeftMenu addGroup={this.addGroup} groups={this.state.groups} className="leftMenu"/>
            </div>
            <div className="contents">
              <Contents focused={this.state.focus} addItem={this.addItem} todos={todos}/>
            </div>
          </div>
      )
    }
  }
}

// App.PropTypes = {
//   groups: PropTypes.Arr
// };