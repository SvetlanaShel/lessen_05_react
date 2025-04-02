import axios from "axios";
import { useEffect, useState } from "react";

import { Homework12Container, FactWrapper, Error } from "./styles";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";


function Homework12 () {
    const [fact, setFact] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);


    const FACT_URL: string = 'https://catfact.ninja/fact';

    const getFact = async()=>{
        setIsLoading(true);
        setError(undefined);

        try {
           setIsLoading(true);
           const response = await axios.get(FACT_URL)
           console.log(response.data);
           setFact(response.data.fact);
        }

        catch (error: any) {
           console.log("Ошибка загрузки");
           setError(error.message)
        }

        finally {
            console.log('Результат получен');
            setIsLoading(false);
        }
    }

    useEffect(() => { getFact() },[])

    return (
       <Homework12Container>
        <h1>Cat Fact</h1>
        <Button name='GET MORE FACTS' onClick={getFact} disabled={isLoading} />
        <FactWrapper>{isLoading ? <Spinner /> : fact}</FactWrapper>
        <Error>{error}</Error>
       </Homework12Container>
    )
} 

export default Homework12