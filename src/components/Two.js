import React from 'react'
import styled from 'styled-components'

export default function () {
    return (
        <Container>
            <Left>
                <h1>We <span>Build</span> Digital <span>Solutions</span> To <span>Transform</span> Businesses</h1>
                <p>We are not just another web development and design company, but an enterprise-consulting organization that knows its customers closely to do the best work for them.
                    We are extremely focused on user-experience designs.</p>
                    <Buttons>
                    <button class="button-3" role="button">Talk To Us</button>
                    <button class="button-4" role="button">Success Stories</button>
                    </Buttons>

            </Left>
            <Right>
                <img src='https://s3-alpha-sig.figma.com/img/f0e0/e957/42bcb57a5003c6b4924cfdbac44dfa35?Expires=1678060800&Signature=qf2EPcq7~AEXswb72Qpt9xTr7FJgVGkpnVn~9DZeFB~~6dnkRdf3aO5TKVaxaJh-N1cl7UNK2WbdEpFhijUEGSpz9r3E1Fi32MkgWBXfMF-Utsthds8j4tsXsNZGCnT1qZaswE~4IDbGM4lLo-vnyFXGW3T7i25KUTDHm3yfNqJOnLovLG3WILZPVf0BauGbHVyR2pXiUMqLn1slznTEgIUm2JySLYczDIgqIXuJHw-~bfE~OVXKX2gB~T4KMaHpK9eOcMBWOAjnynD70ULYf9ZO4vMwUp6o7Mfg3Esk0uFwkrbWarBwv~XdpZxiKAchnApsR4A00zYaiR6Yam2LEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
            </Right>
        </Container>
    )
}
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 130px;
padding: 50px;

span{
    color: #2BA837;
}
@media(max-width:1200px){
  gap: 50px;
}
@media(max-width:950px){
display: flex;
flex-direction: column;

padding: 0;
gap: 0;
width: 100%;

  
}
`;
const Buttons = styled.div`
display: flex;

gap: 30px;

`;
const Left = styled.div`
width: 554px;
height: 521px;
line-height: 1.9;
flex-direction:column;
gap: 30px;
h1{
    font-style: normal;
font-weight: 400;
font-size: 45px;
line-height: 60px;
text-transform: capitalize;
}
.button-3 {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  border-radius:40px;
  font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 30px;
text-transform: capitalize;

color: #FFFFFF;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
.button-4 {
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
  border-radius:40px;
  font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 30px;
text-transform: capitalize;

color: #000000;
}

.button-4:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}

.button-4:disabled {
  background-color: #FAFBFC;
  border-color: rgba(27, 31, 35, 0.15);
  color: #959DA5;
  cursor: default;
}

.button-4:active {
  background-color: #EDEFF2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

.button-4:focus {
  outline: 1px transparent;
}

.button-4:before {
  display: none;
}

.button-4:-webkit-details-marker {
  display: none;
}
@media(max-width:1200px){
  h1{
    font-size: 40px;
    line-height: 1;
  }

  
}
@media(max-width:650px)
{
 width: 80%;
 h1{
  font-size: 35px;
 }
}
@media(max-width:420px)
{
  p{
    font-size: 15px;
    
  }
  h1{
    font-size: 30px;
  }
}
@media(max-width:420px)
{
  .button-3{
    font-size: 15px;
    
  }
  .button-4{
    font-size: 15px;
    
  }
}


`;
const Right = styled.div`
img{
    width: 600px;
height: 500px;
}
@media(max-width:1200px){
  img{
    width: 500px;
    height:400px
  }
}
@media(max-width:950px)
{
  margin-top: -200px;
}
@media(max-width:600px){
  img{
    width: 400px;
   height: 300px;
   padding: 20px;
  }
  margin-top: -100px;
}
@media(max-width:420px){
 
  img{
    width: 350px;
    margin-top:-50px ;
  }
}
@media(max-width:375px){
 
 img{
   width: 350px;
   margin-top:10px ;
 }
}
@media(max-width:375px){
 
 img{
   width: 300px;
   height: 250px;
   margin-top:10px ;
 }
}
`;
