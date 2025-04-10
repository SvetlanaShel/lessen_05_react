import { ClientsWrapper, Title, StyledLink } from "./styles";

function Clients () {
    return (
        <ClientsWrapper>
            <Title>Clients pages</Title>
           
            <StyledLink to='accentureCompany'>Accenture Company</StyledLink>
            <StyledLink to='/clients/synnexCompany'>Synnex Company</StyledLink>
            <StyledLink to='clients/ciscoCompany'>Cisco Company</StyledLink>
        </ClientsWrapper>
    )
}

export default Clients;