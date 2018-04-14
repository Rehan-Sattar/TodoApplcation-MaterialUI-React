import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import {List as l, ListItem} from 'material-ui/List';
class List extends React.Component {
    render() {
        const styles_for_delete_button = {
            marginLeft: '1rem',

        }
        return (
            <ol>
                {
                    this.props.todo.items.map((item, id) => <ListItem key={id} > {id + 1}. {item}
                        <RaisedButton
                            label={"Delete"}
                            secondary={true}
                            style={styles_for_delete_button}
                            onClick={() => { this.props.deletTodo(id) }}
                        />
                    </ListItem>)
                }
            </ol>
        );
    };
};
export default List;