import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-1">
                        <h1>Header</h1>
                        <h1>Uid:{this.props.uid}</h1>
                        <h1>Sex:{this.props.sex}</h1>
                        <h1>User.Name:{this.props.user.name}</h1>
                        <h1>User.Wife:{this.props.user.family[0]}</h1>
                        <h1>User.Son:{this.props.user.family[1]}</h1>
                        <h1>User.Little Son:{this.props.user.family[2]}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;