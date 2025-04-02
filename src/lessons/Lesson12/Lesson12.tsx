import axios from "axios";

import Button from "../../components/Button/Button"
import { Lesson12Container, JokeWrapper, Error } from "./styles"
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

function Lesson12 (){
    const [joke, setJoke] = useState<string | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const JOKE_URL: string = 'https://official-joke-api.appspot.com/random_joke';

    const getJoke = async()=>{
        //очистка ошибки при каждом новом запуске функции
        setError(undefined)
       // в блоке try отправляется запрос и обрабатывается успешный результат ответа
  try {
    const response = await axios.get(JOKE_URL)
    console.log(response.data);
    setIsLoading(true);
    //обработка успешного результата
    const data = response.data;
    setJoke(`${data.setup} - ${data.punchline}`)
   }
   // в блоке catch обрабатывается ошибка (при получении ошибки запроса, информация о ней
   // будет передана в error)
   catch (error:any) {
    console.log(error.message);
    //обработка ошибки
    setError(error.message);
   } 
   //в блоке finally прописываются действия, которые должны быть выполнены в любом случае
   finally {
    console.log('Результат получен');
    setIsLoading(false);
   }
  }

  useEffect(() => { getJoke() },[])


  return (
   <Lesson12Container>
    <Button name='GET JOKE' onClick={getJoke} disabled={isLoading}/>
    {/*isLoading && <Spinner
    />*/}
    <JokeWrapper>{isLoading ? <Spinner /> : joke}</JokeWrapper>
    <Error>{error}</Error>
   </Lesson12Container>
  )
 }
 export default Lesson12
   