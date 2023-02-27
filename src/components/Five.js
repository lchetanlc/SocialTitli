import React from 'react'
import styled from 'styled-components'
import './Five.css'
export default function Five() {
  return (
    <Container>
      <Header>
        <h1><span>Technology</span> We're Offering</h1>
        <p>We help businesses successfully navigate digital transformation and drive real growth</p>
      </Header>
      <Allcards>
        <Card className='li'>
          <ImageStyle>
            <img src='https://s3-alpha-sig.figma.com/img/0ff2/822b/dce6ec13be8ba1408b3b26680b1c0066?Expires=1678060800&Signature=qFFVuHqOCYi5p1TpVqLobuzgnO4vp2uwRaaDhjuPrKUFjVFHejpu5JIM56G4RdUOD2PAOZBMRM-Iy~dVW9BE-ugIld~gEtYbbhmsqDK5HZeZ2ITxJjfFwopE5b2IJ-OiIN2hKAx7oofT4Wl5Hs-JwIcGkpSCwgcvMHoQjSSjOWLdKkX~xtqBMG-DYLdDU~LeSOWvG0Jg6fRRHLFOYyWlDHHIhZ4MxWPrD7tJ-~PpM2S7hOYufANdvcOwswOtkMVlV6gu9TobOsRek7EV4Lzcxsijj9YgeIoEdUTuKxwiVqyOi4v75m9Ign~oOhVuMTzPMIMZ37lFGF9iCo6ryjTqOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>JavaScript</p>
        </Card>
        <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/0b94/137d/e7dc5034f8b60b92c0725139a64b6b31?Expires=1678060800&Signature=ZGMRKkU~P6UuRO45YIcwof7jY86-d2YWWaWiV9b5ifZSwE4nmju2Bulri3onNwTtmolf9lxgAfsEjF5Ky76PzyBEdsKO1Bvu6W21C3A4~2dXSEtM8fmuSPvnWnftv0EHQy-jRka1~dR3wz-DrYpTAOYo~DOLKWGdW9DwEsQxfWoGZ68XJjO2EHRZ-xbm2VP9CI2xrC327ZgjwtOO6zFHta6dR~Kcm~CVu7y7lwThVOtMmmIEa6kbUMW3sStRuKBeKYoXFK5MizVfFdNef9dIk1cFW7nRE~o27LszVgq1Ok9WJiBgArca4kzCWkL9iJkV~6dbqyObxUNG2RX9f~9CPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>Java</p>
        </Card>
        <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/6342/43c3/28bf239b2ac13df282b91306d6e60148?Expires=1678060800&Signature=JMbOOIeA2gtqYgxmxdyIO5ljfWB972XUdfWk~dXFhkdpagYMT9UXTqVPxWL6RYuSRlK02rZXhY0D1U-t7-7O2jqM1xLUfpsmwRkidtbSZBz8OZiH1oX2Ui76y~IrLcvBOHwqmO4gVF-W1Qb7CWRfybux1u0MIoK92~YPWrF7NplLc4md7ES2UMC0UJXayRf4jcDHb5KRcOEW5-V-GjXdedV-hqRA7~JG4T4euDjrI-7wp9hgojYZPdu8EEeU1pE363z9uTq2bScm1ADIxgTy5zr-4Ob8nujFDYjgDwUzUzIX~h-TSL989HHlwjolVvDpANAJg2DtMXzzM9lcecZT9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>PHP</p>
        </Card>
        <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/a4ec/1e53/bfc4d62642a24b85193a2d1fd5b4eaa3?Expires=1678060800&Signature=nWquyzRvJU6Wiq51ArbOarsnyBDEEsKoRk-JoCcLfYXeZhBBu7ekM6Az-DJwJz8rGi9gIjpL0UQCqPg4~r5byth~D7phfDjsFFriTorQeUsfMsAdNU4YOkmEDnKHx1uInEZVMbgCDsI304tKdSgZOtnEI~N2LDnX8uTkKri5S4RQGai-MhxrQOJMNr1mte6EGoHtuset2gstr9dNDBF9RPQvAliQCGdMXcTo40WIdIxY2jHz1r~Ib9frd27Byl9GfipQ3aDtbI96y6FZ5mlvqxcRcqGxBDH3TyYsTQO-UBRPdHfj9ytiveqr82EvlG24JqTu~unTlocVw1pcNbiP0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>Vue.Js</p>
        </Card>
        <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/d5a2/7f93/8b0aa9b2bb3b4305b290fe836c4f4a69?Expires=1678060800&Signature=kx77GCCXyiQ~G8yclrPYSPgfmjzKgeqOL~GTuxZyKnlBi2G0X9N6yxA3SUhd4QloblF4fOBJ9V8t6YjJImuwql4x2CdsdcxpHqmbZrsDyNXg-VNJELOmQFIcHouZkqW2rF3akI5M~~jzkll7mMcC1SYcIeXlTAQ-jeiTjJzV5~KV~QU5arkSTEWpvFqq0d-CQfjMMvkkzaNjDtAIq8k0O8tAcCNoDAzAtga3DQSq1PkZziuH7KwG40CSFn4R9sZ46~4kREUioPUwjny~FZgYnRiDOwYwO2s76xggpmPehs4-M4hXFR6buqZNmuubR3Q8JkM5VV0T7bL3THeEFefW5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>Angular</p>
        </Card>
        <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/377c/b02a/3b6b77b7207bf9e7f75d7ebf64d5ed62?Expires=1678060800&Signature=fs~P1-bOJr7k0e4VuA7zgSzD98Y7nzxUgREtZWkDOupR~-AQPHXpHiOKDk2Fqo-3EwUED46nxyHVeghGRsgQs-lcc9u26vs8idNcYpDck0wwZEjGDhHIuZ9wpCqEQYGMzTCNxSbQ42bw-p4ued-kpoQRKbmq65XjPkG7DSFMSHhXsLFHysyPqeqB4IF5cNXdkSHvXYu7TEIGYzmDzcf-czbZsMekvmSauTSGL~4cvMdvp16jWJHCPyqlZ~VC2fyEpe8unr0wXF4FombKFQk1MnHzOfslQ8SNKDgmks9ZuZD~ISNIb-hVj4UxpWJ~mJ~S~04gIVHM3RwdQF4h2RYYEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>HTML</p>
        </Card>
        <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/a9d9/437c/74e54609d46acee7da90ed0f402006c8?Expires=1678060800&Signature=fiTuVUQ8LoGFGP860juq1SCPrdLeR2k7Ep4ZrI8fFDAGtTQeZ2yh5dpbTqCl5VEqHOAoH8dJknWrltMxyaQaVafmRK2Sv2WjaNM~XdBt9Og4KQ-tMXoquG8F3nuLWfwjOCkH3i7LwbhRMOlBuB6b1kUNAjEMYFpxLKPR8U~Z5gGGWKcr6Jp4uhCD9K7ZHXw~2ZJMDX18IVJ5PcGZzYehcb5DWs14M6CN1HDKE4vahsRPBaVzQEc7dxB173drBX2VpMGvqEOluEf5AcCEszfgXadce7MYWGvOwPSoK087sezSVD6jszYsoE8RQfOlfCmiuO7uwWnH7SQMAInS3ddYRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>Next Js</p>
        </Card>
        <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/890e/3b64/08299e26bf6275bb587863bec4762568?Expires=1678060800&Signature=hAAAD7ct2SKY9jEA~PGUOz83VlbyIBbWpk5xp0~EWHOAVby-00~NyoZhMHHVjLi51Zv~kZi8OZKpz5TXLnBePKdTNkomnfI4vGUR5WbzXPZV3hb8cY3eAnu7uh57z8jku89h7hPgZlW9aGywSGzwSUjucuh9I02-xQfCkHbFFsiFqLAGzEs60W771aFGHmkTCAA3yfpgnuFB~ljZp9zzPOKSwbOgGYEBooj4HMdl1Xk3exQZ9BpPt4uR45FO-RRj6g0Wen6LuhGZDYdQGFYkWWoSWZxJFGWN8sjsH5BKhhmDTJIxgrdK9ivqmUWXeQqoMTI0Ce1~X8d5esB6KMSKJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>Python</p>
        </Card> <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/c63b/f1a0/0dda4f626a43b4d7741b1a322f7cf83c?Expires=1678060800&Signature=OftPk~RWUOMhxLb4tSs2Av9WlK0QWI8uDZ7sSGVf~lnoqReMvCm3~Sxc3VzciOQi7PUCpQu1O1JifTRfP6-ZPgiY0ZaKetuCgOVo3BSK-OImNDm~087kXrf4T6SU6pp8SCYrgwFCPTnXx037JxFAlfN4Nerdfc2v8PKtIlk3td0FTxXC8UrIrHiABEqVhL4lfkcCkTw8nK4cJnm82Y9rVvNFFbzW69NWxhxT2StP8rzOGgE8sivm6ezvG40BJlpAQRnxx1JsQgtlU6WSnNJN-v5CvyERNawVnjm5uWLqlC5kxpmxBkDDOzN6TG0Vxcu-KSG2C1s1EDS9XqVFNWKbJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>Flutter</p>
        </Card> <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/0799/45b4/d5f9b91e8a73b0d978264c424bde7ebc?Expires=1678060800&Signature=nj7IavQbPbxHXBKt1sqmB6yDFAKZg8PGBH5Pukm5jBHOgMrNkEU72CMXmJjYIgX2cQmd1NlPulMDUHPjZxZnArJ7PwutIHeCHVsTgMXNsNDVtKNKEyFopu~q-4Qf4VqXscShFI6UFM92Q5y4AzkpW-k7K15hAAVPabFU1EO0lKLXxMOtbUDrKOKwCnsXgA1ty2j47gD3~KehfGLVbACN3rUETL~IJJA2MTyP9OPsphHowFF9z8wc5xGbwOAGzLEsWi1yowZBPh3rNJjWblIyETwm~C6IwGkZIOAtHTEIt9~biXbUiVc4kKMNxBLiZu9QqTmkBBX0mkAb3Xu7Su9YfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>Native</p>
        </Card> <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/0799/45b4/d5f9b91e8a73b0d978264c424bde7ebc?Expires=1678060800&Signature=nj7IavQbPbxHXBKt1sqmB6yDFAKZg8PGBH5Pukm5jBHOgMrNkEU72CMXmJjYIgX2cQmd1NlPulMDUHPjZxZnArJ7PwutIHeCHVsTgMXNsNDVtKNKEyFopu~q-4Qf4VqXscShFI6UFM92Q5y4AzkpW-k7K15hAAVPabFU1EO0lKLXxMOtbUDrKOKwCnsXgA1ty2j47gD3~KehfGLVbACN3rUETL~IJJA2MTyP9OPsphHowFF9z8wc5xGbwOAGzLEsWi1yowZBPh3rNJjWblIyETwm~C6IwGkZIOAtHTEIt9~biXbUiVc4kKMNxBLiZu9QqTmkBBX0mkAb3Xu7Su9YfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>React Native</p>
        </Card> <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/1835/8cf7/54dd35746bed80dbd4838f1820d4af61?Expires=1678060800&Signature=WWEJDICP3IkOQ0cx5uHM~HOwNJaAV6CIK-40z89~OSWCjlIJBllqaUQN9RXtdRJ1qDw~aWiUwxOaTisFDB6lbh63ovU6ar98jDJs~~Vbu~9WAc7t-UbNqEmb~z7WQvaL~SH1IQs02ek8ZIJ49DyOzmdc8QtNI3hjYrkhxTsjOuyM~ZINgZk3YtD28OLS0mdAuka8wF2pkbUmGuIvyR555Cf33-VSOXt8f4qMpIkcACKD0Rt0vvM8Hy6smlLqfXHauaHVfuhRRUqJ0dQVoh2lKin6RYHBtJCFj2VFw3YLOSZPtphGKQ~eXSc6~hQiTL63SlqFMCzPFs7zhQTMT9-fkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>Ionic</p>
        </Card> <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/6026/e7c4/ef2973a95da22e1c7bbcc65b083784ac?Expires=1678060800&Signature=mkf6G8RyGR2XEFePIqo7kFCP8QHyI6i9le6sj0urxU2bEKifxSA2cvoHQiT7~Uuu59Ko3dRYtQZ4LDO3tiUGy0PDVnwk0-z-0U4jmffdk~rbRHEpeVeXivG7c-MakPRJ123zHUC4zW8uVhfkoCtPi7YWLOu77RcS3vZhukmoZJ2gW1T2pxHwGuICKNiRb29yuLqkz~m6ogAn3VKfrSjee2SJXJqcCqcyKVuGzDWpWhKMxpIrl9baw6h1RTmZDT3Vo1rcBITMFniQ3l7TbtGH2RQpd9JnHC~5HvSK4HBSGdEslE7-Hmi2E5hQ9VHxCqiGY~JUS8Xk5m67~JVJ0fz8fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>DjanGo</p>
        </Card>
        <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/d2eb/71ce/fadbf696150b675e389b9fcb64b7368d?Expires=1678060800&Signature=V38CnQo2QosZwFcUWlQOIOHgy0FpgVuVepPzySdk1zS8ihoa4DJW20HhLWz1jyYaXR6NimUlkTUFzOJ7Ds3bRomAyndyz5NnbWNtin2wp54wCtjjsYETHs6TmwK~2LQB~vTWCK-S~f4UyuHoTOtG9anHq8ia2O4e5qW2cqzx3UX6lHs-uHyS2JJ7OsdApTGy17ZQnUuNp-xb0Aoy3ayGhSIjSBkDFUyniBa-2ucNaQe7Avt3D0OTB9rb63ohSqMya2GAs9w1BQbH8zTVmITmYZRZkftGH~FAt3Oogd~gkSMk3nXgJx33l8yyf7nwxv3C9XoDeM-IJyhQ4~o5W282Ow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p>Swift</p>
        </Card>
        <Card className='li'>
          <ImageStyle className='image'>
            <img src='https://s3-alpha-sig.figma.com/img/0799/45b4/d5f9b91e8a73b0d978264c424bde7ebc?Expires=1678060800&Signature=nj7IavQbPbxHXBKt1sqmB6yDFAKZg8PGBH5Pukm5jBHOgMrNkEU72CMXmJjYIgX2cQmd1NlPulMDUHPjZxZnArJ7PwutIHeCHVsTgMXNsNDVtKNKEyFopu~q-4Qf4VqXscShFI6UFM92Q5y4AzkpW-k7K15hAAVPabFU1EO0lKLXxMOtbUDrKOKwCnsXgA1ty2j47gD3~KehfGLVbACN3rUETL~IJJA2MTyP9OPsphHowFF9z8wc5xGbwOAGzLEsWi1yowZBPh3rNJjWblIyETwm~C6IwGkZIOAtHTEIt9~biXbUiVc4kKMNxBLiZu9QqTmkBBX0mkAb3Xu7Su9YfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          </ImageStyle>
          <p className='text'>React Js</p>
        </Card>
      </Allcards>
    </Container>
  )
}
const Container = styled.div`

padding:60px;


`;
const Header = styled.div`
span{
  color:#2BA837;
}
h1{
  font-family: 'Barlow';
font-style: normal;
font-weight: 400;
font-size: 50px;
line-height: 60px;
text-transform: capitalize;

color: #000000;

}
p{
  font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 25px;
line-height: 40px;
text-transform: capitalize;
width: 500px;

}
@media(max-width:600px)
{
  h1{
    font-size: 35px;
  }
  p{
    font-size: 20px;
    width: auto;
  }
}
@media(max-width:380px)
{
  padding: 0;
  h1{
    font-size: 25px;
    line-height: 1.3;
  }
  p{
    font-size: 15px;
   line-height: 1.3;
  }
}
`;
const Allcards = styled.div`
display: flex;
  flex-wrap: wrap;
row-gap: 20px;
column-gap: 30px;

@media(max-width:1300px){
  display: flex;
  flex-wrap: wrap;
}
@media(max-width:1230px){
  display: flex;
  flex-wrap: wrap;
}
@media(max-width:1230px){
  display: flex;
  flex-wrap: wrap;
}
`;
const Card = styled.div`
img{
  height: 37px;

}
width: 200px;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #252525;
color: black;
height: 160px;
p{
  font-size: 20px;
  color: white;
}
@media(max-width:380px)
{
  width: 180px;
}

`;
const ImageStyle = styled.div`
border: 1px solid black;
background-color: #2D2D2D;
border-radius: 50%;
border: none;
height: 100%;
width: 80%;
position: relative;
top:-35px;
img{
  position: relative;
  left: 62px;
  top: 44px;
  filter: brightness(0) invert(1);
}





`;