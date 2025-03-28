import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import './styles.css'
import { ChangeEvent, useState } from "react";

function Homework08 () { 

const [password, setPassword] = useState<string>("");
const [displeyedPassword, setDisplayedPassword] = useState<boolean>(true);

const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setPassword(event.target.value)
}

const displayedPasswordHandler = () => {
    setDisplayedPassword(!displeyedPassword)
  }

  return (
    <div className="homework08-container">
      <h1>Change password</h1>
      <Input
        name='password'
        label='Password'
        id='password_id'
        placeholder="Enter your password"
        type='password'
        value={password}
        onChange={onChangePassword}
             />
             <Button name="SHOW PASSWORD" onClick={displayedPasswordHandler}/>
             <div className="result-container">
             {displeyedPassword && <div className="result-container">{password}</div>}
        </div>
    </div>
    );
};

export default Homework08;