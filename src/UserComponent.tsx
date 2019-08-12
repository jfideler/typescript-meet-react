import * as React from "react";
import UserInterface from './UserInterface'

export default class UserComponent extends React.Component<UserInterface, {}> {

    constructor(props: UserInterface) {
        super(props);
    }
    render() {
        return (<div>
            <h1>User Component</h1>
            <strong>Hello</strong>, {this.props.name}
            <br />
            <strong>You are</strong> {this.props.age} years old,
                <br />
                <strong>You live at:</strong> {this.props.address}
            <br />
            <strong>you were born:</strong> {this.props.dob.toDateString()}
        </div>

        );
    }
}