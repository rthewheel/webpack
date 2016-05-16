import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
require('./app.styl');
const App = React.createClass({
    propTypes: {
        children: React.PropTypes.element
    },
    render() {
        return (
            <div>
                <div className="header">
                    <h1>App</h1>
                    {/* change the <a>s to <Link>s */}
                    <ul className="menu">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/inbox">Inbox</Link></li>
                    </ul>
                </div>
                {/*
                 next we replace `<Child>` with `this.props.children`
                 the router will figure out the children for us
                 */}
                {this.props.children}
            </div>
        )
    }
});

const About = React.createClass({
    render() {
        return <h3>About</h3>
    }
})

const Inbox = React.createClass({
    propTypes: {
        children: React.PropTypes.element
    },
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
})

const Message = React.createClass({
    propTypes: {
        params: React.PropTypes.object
    },
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));