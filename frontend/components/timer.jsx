/** @jsx React.DOM */

// Создаем компонент вызовом React.createClass.

var TimerExample = React.createClass({

    getInitialState: function(){

        // Это выполняется перед функцией render. Возвращаемый объект
        // присваивается в this.state, чтобы мы могли использовать его позже.

        return { elapsed: 0 };
    },

    componentDidMount: function(){

        // componentDidMount вызывается react'ом, когда компонент
        // был отрисован на странице. Мы можем установить интервал здесь:

        this.timer = setInterval(this.tick, 500);
    },

    componentWillUnmount: function(){

        // Этот метод вызывается сразу после того, как компонент удален
        // со страницы и уничтожен. Мы можем удалить интервал здесь:

        clearInterval(this.timer);
    },

    tick: function(){

        // Эта функция вызывается каждые 50мс. Она обновляет
        // счетчик затраченного времени. Вызов setState заставляет компонент перерисовываться

        this.setState({elapsed: new Date() - this.props.start});
    },

    render: function() {

        var elapsed = Math.round(this.state.elapsed / 100);

        // Это даст нам число с одной цифрой после запятой dot (xx.x):
        var seconds = (elapsed / 10).toFixed(1);

        // Хоть мы и возвращаем целый <p> элемент, react разумно обновит
        // только измененные части, содержащие переменную seconds.

        return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
    }
});


ReactDOM.render(
    <TimerExample start={Date.now()} />,
    document.getElementById('timer')
);