import React, { Component } from 'react';
import './App.css';
import { Menu } from 'semantic-ui-react'
import img from './logo.png';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Messages from "./Messages";
import Results from "./Results";
import Tournaments from "./Tournaments";
import SignOut from "./SignOut";

class MenuBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <HashRouter>
                <div>
                    <h1>Mallet Manager</h1>
                    <Menu pointing vertical fixed={'left'} color={'blue'}>
                        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}><NavLink exact to="/">Home</NavLink></Menu.Item>
                        <Menu.Item name='tournaments' active={activeItem === 'tournaments'} onClick={this.handleItemClick}><NavLink to="/tournaments">Tournaments</NavLink></Menu.Item>
                        <Menu.Item name= 'messages' active={activeItem === 'messages'} onClick={this.handleItemClick}><NavLink to="/messages">Messages</NavLink></Menu.Item>
                        <Menu.Item name='results' active={activeItem === 'results'} onClick={this.handleItemClick}><NavLink to="/results">Results</NavLink></Menu.Item>
                        <Menu.Item name='signOut' active={activeItem === 'sign out'} onClick={this.handleItemClick}><NavLink to="/signOut">Sign Out</NavLink></Menu.Item>
                    </Menu>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/messages" component={Messages}/>
                        <Route path="/tournaments" component={Tournaments}/>
                        <Route path="/results" component={Results}/>
                        <Route path="/signOut" component={SignOut}/>
                    </div>
                </div>
             </HashRouter>
            );
         }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
              <MenuBar />
          </header>
          <img src={img} />
          <h1 className="App-title">Welcome to Mallet Manager</h1>
      </div>
    );
  }
}



export default App;

