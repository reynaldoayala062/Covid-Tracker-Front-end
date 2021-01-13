import React from "react";

class Signup extends React.Component {

    state = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        address: "",
        password: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            user: {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                username: this.state.username,
                email: this.state.email,
                address: this.state.address,
                password: this.state.password
            },
        };
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
        .then((res) => res.json())
        .then((userDetails) => console.log(userDetails));
    this.props.history.push("/login");
    };


  render() {
    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={this.handleSubmit}>
                
                <label className="first-name-text">
                    First Name:
                    <input type="text" value={this.state.first_name} onChange={(e) => this.handleInputChange(e)} />
                </label>

                <label className="last-name-text">
                    Last Name:
                    <input type="text" value={this.state.last_name} onChange={(e) => this.handleInputChange(e)} />
                </label>

                <label className="address-text">
                    Street Address:
                    <input type="text" value={this.state.address} onChange={(e) => this.handleInputChange(e)} />
                </label>

                <label className="email-text">
                    Email:
                    <input type="email" value={this.state.email} onChange={(e) => this.handleInputChange(e)} />
                </label>

                <label className="username-text">
                    Username:
                    <input type="text" value={this.state.username} onChange={(e) => this.handleInputChange(e)} />
                </label>

                <label className="password-text">
                    Password:
                    <input type="password" value={this.state.password} onChange={(e) => this.handleInputChange(e)} />
                </label>

                <input className="signup-submit-btn" type="submit" value="Submit" />

            </form>
        </div>
    )
  }
}

export default Signup;