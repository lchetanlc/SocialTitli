import React from 'react'
import styled from 'styled-components'
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
export default function Nine() {
    return (
        <Container>
            <One>
                <LeftOne>
                    <h1>What Can We Do For You?</h1>
                    <p>We can help you to strategize, design, develop, deploy and grow your digitally-enabled
                        enterprises and products, seamlessly.</p>
                </LeftOne>
                <RightOne>
                    <p>Let’s Collaborate! </p>
                    <FaArrowRight />
                </RightOne>
            </One>
            <hr></hr>
            <Two>
                <h1>Connect With Socialtitli</h1>
                <p>Subscribe to stay up-to-date on the technologies defining today and shaping tomorrow!</p>
                <div className='input-elements'>
                    <div>
                        <input type='text' placeholder='Fisrt Name'></input>
                        <input type='text' placeholder='Last Name'></input>
                    </div>
                    <button type='submit'>Next</button>
                </div>
            </Two>
            <hr></hr>
            <Three>
                <LeftThree>
                    <p><FaEnvelope /> Sales</p>
                    <p><FaEnvelope /> Support</p>
                    <p><FaEnvelope /> Career</p>
                    <p><FaEnvelope /> HR & Admin</p>
                </LeftThree>
                <RightThree>
                    <p><a href=''>Behance</a> /<a href=''> Facebook</a> /<a href=''> Instagram</a> /<a href=''> LinkedIn</a> /<a href=''> Twitter</a> /<a href=''> Dribble</a></p>
                </RightThree>
            </Three>
            <hr></hr>
            <Fourfive>
            <Four>
                <Links>
                    <h4>Know About Socialtitli</h4>
                    <a href=''>Company</a>
                    <a href=''>Technology</a>
                    <a href=''>Success Stories</a>
                    <a href=''>Contact Us</a>
                </Links>
                <Links>
                    <h4>Application Development</h4>
                    <a href=''>Web Application</a>
                    <a href=''>E Commerce</a>
                    <a href=''>Android & IOS Apps</a>
                </Links>
                <Links>
                    <h4>Usefull Links</h4>
                    <a href=''>Consulting</a>
                    <a href=''>Digital Strategy</a>
                    <a href=''>Weeb Modernization</a>
                    <a href=''>Managed services</a>
                </Links>
                <Links>
                    <h4>Services</h4>
                    <a href=''>graphics Designing</a>
                    <a href=''>Web Designing</a>
                    <a href=''>web Development</a>
                    <a href=''>Digital Marketting</a>
                    <a href=''>Mobile App Development</a>
                </Links>
                <Links>
                    <h4>Information</h4>
                    <a href=''>Client</a>
                    <a href=''>Career</a>
                    <a href=''>Blog</a>

                </Links>

            </Four>
                <Five>
                    <p>
                        <a href=''>Legal Notice </a> | <a href=''>Terms & Conditions </a> | <a href=''>Disclaimer</a>

                    </p>
                </Five>
                </Fourfive>
        </Container>
    )
}
const Fourfive= styled.div``;
const Container = styled.div`
background: #313131;
padding: 80px;
padding-top: 20px;
padding-bottom: 0;
color: white;
@media(max-width:460px)
{
    padding: 30px;
    
}
`;
const One = styled.div`
display:flex;
justify-content: space-between;
font-family: 'Barlow';
font-style: normal;
font-weight: 500;
margin-bottom: 30px;
@media(max-width:700px)
{
    display: flex;
    flex-direction: column;
    text-align: left;
    
}
`;
const LeftOne = styled.div`
width:620px;
p{
    color: #AAAAAA;
}
@media(max-width:700px)
{
    width: auto;
    
}
`;
const RightOne = styled.div`
display: flex;
align-items: center;
gap: 20px;
font-size: 30px;
font-family: 'Barlow';
@media(max-width:1070px)
{
    
    padding-left: 40px;
}
@media(max-width:700px)
{
    padding-left: 0;
    
}

`;
const Two = styled.div`
margin-bottom: 40px;
input{
    background-color:#313131 ;
    padding:12px;
    width: 500px;
    color: white;
    border: 1px solid white;
}
.input-elements{
    display: flex;
    justify-content: space-between;
    
}.input-elements div{
    display: flex;
    gap: 50px;
}
@media(max-width:1300px){
    input{
        width: 400px;
    }
}
@media(max-width:1110px){
    input{
        width: 300px;
    }
}
@media(max-width:910px){
    input{
        width: 200px;
        
    }
}
@media(max-width:670px){
    input{
        width: 100px;
        
    }
    .input-elements div{
        gap: 20px;
    }
}
@media(max-width:480px){
    input{
        width: 300px;
        
    }
    .input-elements{
        display: flex;
        flex-direction: column;
        
    }
    .input-elements div{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
    
}
@media(max-width:360px)
{
    input{
        width: 250px;
    }
    
}
button{
    background-color:#313131 ;
    width: 200px;
    color: white;
    border: 1px solid white;
}
p{
    color: #AAAAAA;
}
`;
const Three = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;
const LeftThree = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;

gap: 40px;
p{
    display: flex;
    align-items: center;
    gap :10px ;
}
@media(max-width:1080px)
{
    p{
        gap: 3px;
        
    }
    gap: 20px;
}
@media(max-width:1080px)
{
    p{
        font-size: 15px;
        
    }
}

`;
const RightThree = styled.div`
a{
    text-decoration: none;
    color:white;
}
@media(max-width:1080px)
{
    a{
        font-size: 15px;
        
    }
}
`;
const Four = styled.div`
display:flex;
justify-content: space-between;
flex-wrap: wrap;
a{
    text-decoration: none;
    color:white;
    color: #AAAAAA;    
}
`;
const Links = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100px;
margin-bottom: 60px;

`;
const Five = styled.div`
float: right;
margin-top: -50px;
a{
    text-decoration: none;
    color: white;
}
@media(max-width:480px)
{
    margin-top: 50px;
}
`;

