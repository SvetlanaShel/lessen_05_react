import { ChangeEvent, useEffect, useState } from "react";

import Input from "../../components/Input/Input";
import { Homework11Container } from "./styles";


function Homework11() {

    const [firstInput, setFirstInput] = useState<string>("");
    const [secondInput, setSecondInput] = useState<string>("");
    const [showChangeCount, setShowChangeCount] = useState<number>(0);

    const changeFirstInput = (event: ChangeEvent<HTMLInputElement>)=> {
        setFirstInput(event.target.value)
    };
    
    const changeSecondInput = (event: ChangeEvent<HTMLInputElement>)=> {
        setSecondInput(event.target.value)
    };
    
    useEffect(()=> {
        setShowChangeCount((prevCount)=> prevCount + 1);
    }, [firstInput])
    
    return (
        <Homework11Container>
            <Input
            name="firstInput"
            placeholder="First Input"
            value={firstInput}
            onChange={changeFirstInput}
            />
            <Input
             name="secondInput"
             placeholder="Second Input"
             value={secondInput}
             onChange={changeSecondInput}
            />
            <p>{showChangeCount}</p>
        </Homework11Container>
    )  
}

export default Homework11;