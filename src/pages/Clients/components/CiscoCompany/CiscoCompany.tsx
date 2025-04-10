import { useNavigate } from 'react-router-dom'

import Button from "../../../../components/Button/Button";
import { CiscoCompanyWrapper, JobTitle, Image, ButtonContainer, CompanyInfo, Description } from "./styles";

function CiscoCompany() {
  
  const navigate = useNavigate();
  
  const goToAccentureCompanyPage = ()=>{
    navigate('/clients/accentureCompany')
  }


  return (
    <CiscoCompanyWrapper>
      <JobTitle>Cisco Company</JobTitle>
      <Description>Accenture Company page description</Description>
      <CompanyInfo>
      Cisco develops, manufactures, and sells networking hardware, software, 
      telecommunications equipment and other high-technology services and products.
      </CompanyInfo>
      <Image src='https://en.wikipedia.org/wiki/Cisco' />
      <ButtonContainer>
        <Button name='Go To Accenture Company' onClick={goToAccentureCompanyPage} />
      </ButtonContainer>
    </CiscoCompanyWrapper>
  )
}

export default CiscoCompany;