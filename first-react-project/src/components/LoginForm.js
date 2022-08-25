/* This file contains a login form with username and password input, an h3 that says Log In, and a border
styled by the App.css file. The login form should be cenetered on the page. */

import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
        <div id="loginFormDiv">
            <h3>Log In</h3>
            <form className="container">
                <div className="form-group">
                    <label htmlFor="username" className="form-control labelTarget">Enter your username.</label>
                    <input type="text" className="form-control inputTarget" aria-describedby="usernameDescription" id="username" placeholder="Username"></input>
                    <div id="usernameDescription" className="form-text descriptionTarget">
                        Your username must be between 5 and 25 characters in length and contain no special characters except
                        spaces or underscores.
                    </div>
                </div>
                <br></br>
                <div>
                    <label htmlFor="password" className="form-control labelTarget">Enter your password.</label>
                    <input type="password" className="form-control inputTarget" aria-describedby="passwordDescription" id="password" placeholder="Password"></input>
                    <div id="passwordDescription" className="form-text descriptionTarget">
                        Your password should be between 8 to 25 characters in length, contain an upper case and lower case letter,
                        a number, and at least one special character.
                    </div>
                </div>
                <br></br>
                <div>
                    <button type="submit" className="btn form-control" id="submitInfo">Submit</button>
                </div>
            </form>
        </div>
        );
    }
}