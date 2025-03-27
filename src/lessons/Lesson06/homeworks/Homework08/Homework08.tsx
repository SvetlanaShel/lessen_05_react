import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import './styles.css'
import { ChangeEvent, useState } from "react";

function Homework08 () { 

const [password, setPassword] = useState("");
const [displeyedPassword, setDisplayedPassword] = useState("");

const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);

    setPassword(event.target.value)
}

    return (
        <div className="homework08-container">
            <h2>Change password</h2>
            <input 
                label='Password' 
                placeholder='Enter your password'
                type='password'
                value={password}
                onChange={onChangePassword} 
             />
             <Button name="SHOW PASSWORD" />
             {displeyedPassword && <div>{password}</div>}
        </div>
    )
}

export default Homework08;