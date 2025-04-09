import { v4 } from "uuid"

import { SynnexCompanyWrapper, JobTitle, ListItem, Image } from "./styles";
import { lessonsData } from "./data"

function  SynnexCompany (){
    const lessons = lessonsData.map((lesson: string)=>{
        return <ListItem key={v4()}>{lesson}</ListItem>
       })

    return (
        <SynnexCompanyWrapper>
            <JobTitle>Synnex Company</JobTitle>
            <Image src='https://de.wikipedia.org/wiki/TD_Synnex'/>
            {lessons}
        </SynnexCompanyWrapper>
    )
}

export default SynnexCompany;