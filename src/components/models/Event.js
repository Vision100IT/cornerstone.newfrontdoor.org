import React, { Component } from 'react';


class Person extends Component {

    render() {
        return (
            <div className="col-md-2 col-xs-6 text-center">
                <a href={this.props.href} target={this.props.target} rel={this.props.rel}>
                    <img src={this.props.image} width="150px" height="139px" alt={this.props.title}></img>
                </a>
                <br />
                <strong>{this.props.title}</strong>
            </div>


        );
    }
}

export default Person;
