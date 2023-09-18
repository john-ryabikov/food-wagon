const Alert = (props) => {
    return (
        <div className={props.onShow ? "alert show" : "alert"}>
            <p className={props.textColor}>{props.text}</p>
        </div>
    )
}
export default Alert