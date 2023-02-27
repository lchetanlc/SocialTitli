import React from 'react'
import styled from 'styled-components'
import { FaArrowRight,IoArrowForwardCircleSharp } from "react-icons/io";
export default function Eight() {
    return (
        <Container>
            <Top>
                <Content>
                    <h1>
                        We believe our people
                        make the difference. We
                        nurture their development, providing opportunities for learning and mutual
                        growth.
                    </h1>
                    <Join>
                    <p>join us

                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="white" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208Zm-224 80.09L303.58 272H154v-32h149.58L240 175.91l22.71-22.54L364.54 256L262.7 358.63Z"/></svg>
                        {/* <IoArrowForwardCircleSharp className='icon' /> */}
                    </Join>

                    <p className='text'>here’s how we put our beliefs into action</p>

                </Content>
            </Top>
            <Bottom>
                <Card>
                    <h3>PROJECT COMPELETED</h3>
                    <h2>10 K<sup>+</sup></h2>
                    <p>A project is complete when all planned work has been completed and the final product or deliverables have been delivered to the customer.</p>
                </Card>
                <Card>
                    <h3>PROJECT COMPELETED</h3>
                    <h2>10 K<sup>+</sup></h2>
                    <p>A project is complete when all planned work has been completed and the final product or deliverables have been delivered to the customer.</p>
                </Card>
                <Card>
                    <h3>PROJECT COMPELETED</h3>
                    <h2>10 K<sup>+</sup></h2>
                    <p>A project is complete when all planned work has been completed and the final product or deliverables have been delivered to the customer.</p>
                </Card>
                <Card>
                    <h3>PROJECT COMPELETED</h3>
                    <h2>10 K<sup>+</sup></h2>
                    <p>A project is complete when all planned work has been completed and the final product or deliverables have been delivered to the customer.</p>
                </Card>
            </Bottom>
        </Container>
    )
}

const Container = styled.div`
margin-top:30px;
`;
const Top = styled.div`
height: 90vh;
background: rgba(0,0,0,0.7) url('https://s3-alpha-sig.figma.com/img/e352/5542/9629b7c13a18f9ea40bf037d92c48060?Expires=1678060800&Signature=EK6etYMpRZBYvTGezTpOOy~HIt9EcrnhSwkwFCVYMDKawxaTAjUWtMM8IWpYWLV~EJF9Ytqo92zFPKCIwey8sfSMhVVs15m0sZJP4RlXXsmmgTHhWLcG0-9GrcqPgUq79vxDIalhby1bHo0vJcX2RKw~LCbt8FeFtau1Pyj6Ihvaq20w42TlfPjQCGisQf0W6p8eVT7jPM7z125K0CcvQwfVXUZFq5gWr6JrP1Ayu8i40F8FSDNx0a8fMC-IQomMI7I6-oHnD0vDox3BroxWlWnBvtEClqULl02Yv1hkf1d3YIjnz03~JKwo~erSWY0ir~OM5uFEsFzdsAfGoxI98A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
background-size:cover;
background-blend-mode: darken;
color: white;

`;
const Content = styled.div`
width:400px;
line-height: 1.2;
padding: 60px;
display: flex;

flex-direction: column;
gap: 20px;
font-family: 'Poppins';
font-style: normal;
p{
    text-transform: uppercase;
}
@media(max-width:1400px){
    padding: 40px;
}
@media(max-width:500px)
{
    width: 320px;
}
@media(max-width:450px)
{
    width: 300px;
    h1{
        width: 300px;
        font-size: 26px;
    }
    .text{
        width: 200px;
    }
}
@media(max-width:400px)
{
    h1{
        width: 250px;
        font-size: 23px;
}
width: 200px;
}

`;
const Bottom = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
gap: 20px;
position: relative;
top: -100px;
@media(max-width:400px)
{
width: auto;

}
`;
const Card = styled.div`

width: 270px;
background: #F3F4F9;
padding: 23px;
h2{
    background: linear-gradient(180deg, #2BA837 0%, #2F7A2F 88.54%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
font-size: 60px;
margin: auto;
}

@media(max-width:450px)
{
    width: auto;
    
}
`;
const Join = styled.div`
display: flex;
align-items: center;
gap: 20px;
.icon{
    background-color: white;
    color: black;
    height: 25px;
    width: 30px;
    border-radius: 50%;
    
}
`;