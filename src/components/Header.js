import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {uid:this.props.uid};
    }

    onClickHandler(){
        this.setState({uid:this.state.uid + 1});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-1">
                        <h1>Header</h1>
                        <h1>Uid:{this.props.uid}</h1>
                        <h1>UidChange:{this.state.uid}</h1>
                        <h1>Sex:{this.props.sex}</h1>
                        <h1>User.Name:{this.props.user.name}</h1>
                        <h1>User.Wife:{this.props.user.family[0]}</h1>
                        <h1>User.Son:{this.props.user.family[1]}</h1>
                        <h1>User.Little Son:{this.props.user.family[2]}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-1">
                        { this.props.children }
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-1">
                        <button className="btn btn-primary" onClick={this.onClickHandler.bind(this)}>click</button>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    uid:PropTypes.number,
    sex:PropTypes.string,
    user:PropTypes.object,
    children:PropTypes.element.isRequired,
};

export default Header;