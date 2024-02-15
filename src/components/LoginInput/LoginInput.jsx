import "./LoginInput.css"

export const LoginInput = ({type, name, handler}) => {

    return (
        <input type={type} name={name} onChange={(e) => handler(e)}></input>
    )
}