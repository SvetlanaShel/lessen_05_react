import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
 
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Lesson13Container, ImageWrapper, Error, Img } from "./styles";
import Spinner from "../../components/Spinner/Spinner";


function Lesson13 () {

     const [image, setImage] = useState<string>("");
     const [isLoading, setIsLoading] = useState<boolean>(false);
     const [error, setError] = useState<string | undefined>(undefined);
     const [note, setNote] = useState<string>("")

     const onChangeNote = (event: ChangeEvent<HTMLInputElement>) => {
             setNote(event.target.value)
            }

    const IMAGE_URL: string = 'https://dog.ceo/api/breeds/image/random'

    const getImage = async()=>{
        setIsLoading(true);
        setError(undefined);

        try {
            setIsLoading(true);
            const response = await axios.get(IMAGE_URL);
            setImage (response.data.message);
    }

    catch (error:any) {
        setError(error.message)
    }

    finally {
        setIsLoading(false);
        }

    }

    useEffect(() => { getImage() }, []);

    return (
        <Lesson13Container>
             
             <Button name='GET MORE IMAGES' onClick={getImage} disabled={isLoading}/>
             <Input 
             name='name'
             placeholder="Enter your note"
             value={note}
             onChange={onChangeNote}
             />
             <ImageWrapper>{isLoading ? <Spinner /> : <Img src ={image} />}</ImageWrapper>
             <Error>{error}</Error>

        </Lesson13Container>
    )

}

export default Lesson13