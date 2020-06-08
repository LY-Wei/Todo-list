import React, {Component} from 'react'
// import a as b from module 相当于给 a 模块起了一个别名 b,
// 这样在其他地方使用可以直接使用 b 这个变量名
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Todo from './components/Todo'
import TodoDetail from './components/TodoDetail'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/todo" component={Todo} />
                    <Route path="/todo/:id" component={TodoDetail} />
                </div>
            </Router>
        )
    }
}

export default App
