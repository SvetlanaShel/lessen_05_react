import { useNavigate } from 'react-router-dom'

import Button from "../../../../components/Button/Button";
import { CiscoCompanyWrapper, JobTitle, Image, ButtonContainer } from "./styles";

function CiscoCompany() {
  
  const navigate = useNavigate();
  
  const goToAccentureCompanyPage = ()=>{
    navigate('/synnexCompany')
  }


  return (
    <CiscoCompanyWrapper>
      <JobTitle>Cisco Company</JobTitle>
      <Image src='https://en.wikipedia.org/wiki/Cisco' />
      <ButtonContainer>
        <Button name='More Synnex Company' onClick={goToAccentureCompanyPage} />
      </ButtonContainer>
    </CiscoCompanyWrapper>
  )
}

export default CiscoCompany;