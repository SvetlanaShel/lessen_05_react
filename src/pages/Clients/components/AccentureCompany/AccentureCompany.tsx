import { v4 } from "uuid"

import { AccentureCompanyWrapper, JobTitle, ListItem, Image} from "./styles";
import { lessonsData } from "./data"

function  AccentureCompany (){
    const lessons = lessonsData.map((lesson: string)=>{
        return <ListItem key={v4()}>{lesson}</ListItem>
       })

    return (
        <AccentureCompanyWrapper>
            <JobTitle>Accenture Company</JobTitle>
            <Image src='https://en.wikipedia.org/wiki/Accenture'/>
            {lessons}
        </AccentureCompanyWrapper>
    )
}

export default AccentureCompany;