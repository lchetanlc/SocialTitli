import { React, useState } from 'react'
import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuGridR } from "react-icons/cg";
import img from './poster.jpg';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Menu>
        <Left>
          <img src="https://s3-alpha-sig.figma.com/img/27fd/a23e/a17311b37c2c2012fcacee6b502a7c72?Expires=1678060800&Signature=iWr4j92O94CBYaugn~ztoyzU9NNNIicoQQTo9E0x1xIthi73i7fP3tQ6Q7qReW0L8YIDl32N4L8BW-Lo7~-YI7swBYrajm~5WHk8CFGqcyIbHlLxFM5GvFxMtjEzQr6rfbsvwSFnJvAjYsiO-ZTEEdabGz4bDXos8fvDjmG08W0wewmOZnGtRzp~c1vB8NPHmhNq4w9tlJCaN-bKctJgf1M-4GGPtNYi~i2IdGmKT7mOYgLIZ1PEJMLmKaoN~d~WjPxWbb4x-LeRfV2xuWRc5rIaGL93nPCOYec7JyBV0iS7dojqw1xv9auWpKpwwc5z8YYRiHCOh7GXT63Q0yrowA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
        </Left>
        <Hey>
        <Right>
          <a href='#'>Company</a>
          <a href='#'>Services</a>
          <a href='#'>Technology</a>
          <a href='#'>Success Stories</a>
          <a href='#'>Contact Us</a>




        </Right>
        <Rightlast>
          <div className="navbar">

            <div className="navbar__toggle" onClick={handleMenuToggle}>
              <h1>{isOpen ? <CgMenuGridR /> : <CgMenuGridR />}</h1>
            </div>
            <ul className={`navbar__menu ${isOpen ? 'active' : ''}`}>
              <li className="navbar__menu-item">Home</li>
              <li className="navbar__menu-item">About</li>
              <li className="navbar__menu-item">Services</li>
              <li className="navbar__menu-item">DevOps</li>
              <li className="navbar__menu-item">Contact</li>
              
              <li id='hey' className="navbar__menu-item">Company</li>
              <li id='hey' className="navbar__menu-item">Services</li>
              <li id='hey' className="navbar__menu-item">Technology</li>
              <li id='hey' className="navbar__menu-item">Success Stories</li>
              <li  id='hey' className="navbar__menu-item">Contact Us</li>
              
            </ul>
          </div>
        </Rightlast>
        </Hey>
      </Menu>
      <Content>
        <h1>Your Business Website is the best way
          to get recognized by your Customers!</h1>
        <p>Our Intelligent approach towards web design & development
          helps your customers find You.</p>
        <p className='button'>Connect with Us <FaArrowRight /> </p>
      </Content>
    </Container>
  )
}
const Container = styled.div`
/* background: url('https://s3-alpha-sig.figma.com/img/c43a/b551/c4c5ba536f2e0b75167d15a2893b53ba?Expires=1678060800&Signature=K6Nm-ZOv-Ns9RBMisENHBtrv87np9jzDtOWuSxG1Y0RNDzOdfemSgwWftISUPn86YeNp427elNLXUroxmaefWE78QuCZuVSGbetiMuzkE3ODgULATZGstqLZR0hqfb3zzpL1~cMuuF3F~s8GgeQEJbdrTMggMgAVXkFVJpsOnOLWbo1RYdCnkSz3vmefO5lNnFdIdDh6vZQZiPyS7DATVNLeuDCADnRD~S7kPo0Z4Rjvl2spv5-0gy0SBSS5Lm6dXQm-WXdnfVDzG7Q1mz8jweiwP4X7r36A6qRAAPisn35TCs94aj-hxO2EJVMEGuqO5RfLwkBotMX2EBQ8BG6lXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'); */
background: rgba(0,0,0,0.6) url(${img});
background-blend-mode: darken;
height: 100vh;
background-size: cover;
object-fit: cover;
color: white;
a{
  color: white;
  text-decoration: none;
}

`;
const Menu = styled.div`
display: flex;
align-items: center;
padding: 10px;

justify-content: space-between;
align-items: center;
margin-left: 80px;
margin-right: 50px;

`;
const Left = styled.div`
margin-top: -50px;

img{width: 122px;
height: 80px;


}
@media(max-width:1024px){
  img{
    margin-left: -50px;
  }
}
;
`;
const Right = styled.div`
display: flex;
margin-top: -70px;
gap: 20px;
a{
  font-size: 20px;
}

@media(max-width:950px){
display: none;
}
`;
const Content = styled.div`
font-family:' Barlow';
width: 700px;
padding: 90px;
display: grid;

gap: 0;
p{
  width: 500px;
  font-size: 20px;
}
h1{
  font-size: 40px;
}
.button{
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid white;
    padding: 12px;
    width: max-content;
    border-radius: 50px;
}
@media(max-width:750px){
  width:60%;
  p{
    width: 350px;
  }
  @media(max-width:500px){
 p{
  width: 300px;
  margin-left: -50px;
 }
 h1{
  margin-left: -50px;
  margin-top: -50px;
  font-size: 30px;
 
 }
 gap: 0;
 padding: 60px;
}
@media(max-width:380px){
  h1{
    width: 250px;
    font-size: 30px;
  }
  p{
    width: 250px;
  }
}
}

`;
const Rightlast = styled.div`
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: none;
  color: #fff;
}




.navbar__menu {

  list-style: none;
  margin: 0;
  padding: 0;
  display: none;
  color: black;
}
.navbar__toggle {
  font-size: 24px;
  cursor: pointer;
 display: block;
 z-index: 9999;
 
}
.navbar__toggle h1{
 position :relative ;
 top: -30px;
}

.navbar__menu-item {
  
  margin: 0 10px;
  

}

.navbar__menu-item:hover{
  text-decoration: underline;
}

@media (max-width: 2048px) {
  .navbar__menu {
    display: flex;
    position: fixed;
    top: 0px;
    right: -100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    background: url('https://www.infosys.com/content/dam/infosys-web/en/global-resource/background-image/pattern-bg.png');
    background-blend-mode: darken;
    background-color: #f7fafa;
    height: 100vh;
background-size: cover;
object-fit: cover;
    transition: 0.3s;
  }
#hey{
  display: none;
}
  .navbar__menu.active {
    right:-80%;
  }

  .navbar__toggle {
    display: block;
  }
  ul{
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: 3;

    font-size:40px ;
  }
 
}
@media(max-width:950px)
{
  #hey{
    display: block;
  }
  ul{
    line-height: 1.5;
    font-size: 25px;
  }
}
@media(max-width:480px)
{
  .navbar__menu.active {
    right:-50%;
  }
}
`;

const Hey = styled.div`
display: flex;
align-items: center;
`;
