import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import "./component.css"

import List from "./List";
const Modal = () => (
    <div>
        <Dialog
            modal={false}
            title={"Enpty field"}
            open={true}

        > Please Enter Any value </Dialog>
    </div>
);
class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            term: '',
            items: [],
            error: ''
        };
        this.handleDeletOption = this.handleDeletOption.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleChangeItem = this.handleChangeItem.bind(this);

    }

    handleChangeItem(event) {
        this.setState({
            term: event.target.value,
            error: ''
        });
    };

    handleDeletOption(itemId) {
        this.setState({
            items: this.state.items.filter((item, id) => id !== itemId)
        });
    };

    handleAddItem() {
        if (this.state.term) {
            this.setState({
                items: this.state.items.concat(this.state.term),
                term: ''
            });

        } else {
            this.setState({
                error: 'ERROR: Please Enter any Value'
            })
        }
    };

    render() {

        const _stylesForButton = {
            marginLeft: "1rem"
        }
        const StyleForP = {
            fontFamily: 'Arial',
            textAlign: 'center',
            color: 'red',
            fontSize: '1rem',
            padding: '1em',
            backgroundColor: '#3333'

        }
        return (
            <div className="mainContainer">
                <div id="containerDiv">
                    <TextField
                        floatingLabelText="Add item"
                        type="text"
                        value={this.state.term}
                        onChange={this.handleChangeItem}
                        id="input-field"

                    />
                    <RaisedButton
                        style={_stylesForButton}
                        label={"Add"}
                        primary={true}
                        onClick={this.handleAddItem}
                    />
                    <List todo={this.state} deletTodo={this.handleDeletOption} />
                </div>
                <div> {this.state.error ? <p style={StyleForP}>{this.state.error}</p> : null}</div>
            </div>
        )
    }
}

export default Form