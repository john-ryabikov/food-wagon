import React from "react"

class Modal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user_name: "",
            user_pass: "",
            user_remember: false
        }
    }   
    render() {
        return (
            <div className={this.props.active} onClick={this.props.closeModal}>
                <div className={this.props.activeCont} onClick={(e) => e.stopPropagation()}>
                    <p className="modal__title">Account Login</p>
                    <form className="modal__form">
                        <label htmlFor="user_name" className="modal__form-label">Username</label>
                        <input type="text" name="user_name" className="modal__form-input" onChange={(e) => this.setState({user_name: e.target.value})} />
                        <label htmlFor="user_pass" className="modal__form-label">Password</label>
                        <input type="password" name="user_pass" className="modal__form-input" onChange={(e) => this.setState({user_pass: e.target.value})} />
                        <div className="modal__form-line">
                            <div className="modal__form-checkbox">
                                <label htmlFor="user_remember" className="modal__form-label">Remember me</label>
                                <input type="checkbox" name="user_remember" onChange={(e) => this.setState({user_remember: e.target.checked})}/>
                            </div>
                            <a href="/" className="modal__form-link">Forgot Password?</a>
                        </div>
                        <button type="button" className="modal__form-btn" onClick={() => this.props.logAction({
                            user_name: this.state.user_name,
                            user_pass: this.state.user_pass,
                            user_remember: this.state.user_remember
                        })}>Log in</button>
                    </form>
                    <a href="/" className="modal__creat-link">Create a new account</a>
                </div>
            </div>
        )
    }
}

export default Modal
