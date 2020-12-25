import React from 'react';

class ToDo extends React.Component {

    state = {
        inputValue: "",
        tasks: [],
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    addTask = () => {
        // Պայման ստուգելը հանձնարարության մեջ չկար, բայց առանց դրա դատարկ տողն էլ էր ավելացնում  
        if (this.state.inputValue) {

            let tasks = [...this.state.tasks, this.state.inputValue]
            this.setState({
                tasks,
                inputValue: "",
            })
        }
    }



    render() {

        let list = this.state.tasks.map((task, id) => {
            return <li key={id}> {task} </li>
        })

        return (
            <div>
                <input
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    type="text" />
                <button
                    onClick={this.addTask}
                > Add text </button>

                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}


export default ToDo;