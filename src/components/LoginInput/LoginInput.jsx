import "./LoginInput.css"

export const LoginInput = ({type, name, handler, placeholder}) => {

    return (
        <input type={type} name={name} onChange={(e) => handler(e)}placeholder={placeholder}></input>
    )
}