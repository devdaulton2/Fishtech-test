import React, { Component } from 'react'
import ApiFetch from './ApiFetch';

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {value: "", }
        this.passValue = this.passValue.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    passValue() {
        console.log("passing value of: " + this.state.value)
        // this.props.submit(this.state.value)
        this.setState({ value: "" })
    }


    onSubmit(ev) {
        if (ev.key === "Enter") {
            this.passValue()
            ev.target.value = ""
        }
    }


    handleChange(ev) {
        this.setState({ value: ev.target.value })

        ev.preventDefault()
    }


    render() {
        return (
            <div className="FormContainer">
                <input type="text"
                       className="form-control InputField"
                       placeholder="www.google.com"
                       aria-label="ip"
                       onKeyDown={ this.onSubmit }
                       onChange={ this.handleChange }
                       value={ this.state.value }>
                </input>
                <button className="btn btn-outline-success FormButton"
                        onClick={ this.passValue }>Search
                </button>
            </div>
        )
    }
}

export default Input