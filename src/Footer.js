import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
Heading,
  FooterLink,
 
} from "./FooterStyles";


function Footer() {
  return (
 
    <Box>
      <Heading>
      VDart Inc 11180 State Bridge Road, Suite 302,Alpharetta, GA 30022.United States
      </Heading>
      <Container>
        <Row>
          <Column>
          <FooterLink href="#">Facebook</FooterLink>
          </Column>
          <Column>
          <FooterLink href="#">Twitter</FooterLink>
          </Column>
          <Column>
          <FooterLink href="#">LinkedIn</FooterLink>
          </Column>
          </Row>
      </Container>
    </Box>
  
  
     
  );
 

}

export default Footer;