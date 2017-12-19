import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from '../home'
import Messages from '../messages'
import '../../App.css';
import { Menu } from 'semantic-ui-react'
import img from '../../logo.png';

const App = () => (
    <div className="App">
        <header>
            <MenuBar />
        </header>
        <img src={img} />
    </div>
)
export default App

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
                        <Menu.Item name= 'messages' active={activeItem === 'messages'} onClick={this.handleItemClick}><NavLink to="/messages">Messages</NavLink></Menu.Item>
                    </Menu>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/messages" component={Messages}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
