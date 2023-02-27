import React from 'react'
import styled from 'styled-components'
export default function Three() {
    return (
        <Container>
            <h2>Our Services</h2>
            <Allcards>
                <Card>
                    <p>Product Design</p>
                </Card>
                <Card2>
                    <p>Web Development</p>
                </Card2>
                <Card3>
                    <p>Mobile App Development</p>
                </Card3>
                <Card4>
                    <p>QA</p>
                </Card4>
                <Card5>
                    <p>VAPT</p>
                </Card5 >
                <Card6>
                    <p>Cloud Architecture Services</p>
                    
                </Card6>
                <Card7>
                    <p>Artificial Intelligence</p>
                </Card7>

            </Allcards>
        </Container>
    )
}
const Container = styled.div`
width:90%;

margin: auto;
h2{
    font-weight: 500;
font-size: 50px;
line-height: 40px;
text-transform: capitalize;
color: #000000;
}
`;
const Allcards = styled.div`
display: flex;
justify-content: left ;
flex-direction: row;
flex-wrap: wrap;

`;
const Card = styled.div`
margin: 10px;
background-image:
linear-gradient(to top, rgba(114, 48, 1, 0.2), 
rgba(255, 148, 148, 0.5) ),
url('https://s3-alpha-sig.figma.com/img/e352/5542/9629b7c13a18f9ea40bf037d92c48060?Expires=1678060800&Signature=EK6etYMpRZBYvTGezTpOOy~HIt9EcrnhSwkwFCVYMDKawxaTAjUWtMM8IWpYWLV~EJF9Ytqo92zFPKCIwey8sfSMhVVs15m0sZJP4RlXXsmmgTHhWLcG0-9GrcqPgUq79vxDIalhby1bHo0vJcX2RKw~LCbt8FeFtau1Pyj6Ihvaq20w42TlfPjQCGisQf0W6p8eVT7jPM7z125K0CcvQwfVXUZFq5gWr6JrP1Ayu8i40F8FSDNx0a8fMC-IQomMI7I6-oHnD0vDox3BroxWlWnBvtEClqULl02Yv1hkf1d3YIjnz03~JKwo~erSWY0ir~OM5uFEsFzdsAfGoxI98A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
background-size: cover;
width: 300px;
height: 350px;
    color: white;
    padding: 10px; 
    border-radius:10px ;
    
    
    &:hover{
        
        background-size: cover;
        background-image: url('https://s3-alpha-sig.figma.com/img/e352/5542/9629b7c13a18f9ea40bf037d92c48060?Expires=1678060800&Signature=EK6etYMpRZBYvTGezTpOOy~HIt9EcrnhSwkwFCVYMDKawxaTAjUWtMM8IWpYWLV~EJF9Ytqo92zFPKCIwey8sfSMhVVs15m0sZJP4RlXXsmmgTHhWLcG0-9GrcqPgUq79vxDIalhby1bHo0vJcX2RKw~LCbt8FeFtau1Pyj6Ihvaq20w42TlfPjQCGisQf0W6p8eVT7jPM7z125K0CcvQwfVXUZFq5gWr6JrP1Ayu8i40F8FSDNx0a8fMC-IQomMI7I6-oHnD0vDox3BroxWlWnBvtEClqULl02Yv1hkf1d3YIjnz03~JKwo~erSWY0ir~OM5uFEsFzdsAfGoxI98A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
    }
p{
   padding: 4px;
    font-size: 25px;
} 

@media(max-width:730px)
{
    width: 250px;
    height: 300px;
}
@media(max-width:620px)
{
    width: 200px;
    height: 250px;
}
@media(max-width:520px)
{
    width: 300px;
    height: 350px;
}
@media(max-width:375px)
{
    width: 250px;
}

`;
const Card2 = styled.div`
margin: 10px;

background-image:
linear-gradient(180deg, rgba(10, 65, 50, 0.25) 0%, rgba(43, 168, 55, 0.25) 51.56%, rgba(108, 165, 108, 0.25) 100%),
url('https://s3-alpha-sig.figma.com/img/c456/8a81/c821178b04d4485ef19ff1ac13b9fc9a?Expires=1678060800&Signature=Tp1Ccy8Gk9nRWHewrFyEB95TF3oNwqBOrErlkv2G6NhcT-V1mSetKFUG0zSwUw8TsYD4RbkdxqpKNXGhWsoUlL45QYwwPdeYodYQo7s0M-8SmN87uG7zDvSBpeWeLe1rHKpbrDeo1HBQOeEEBEb0LRwm3weCf-OdUtWKWPtJJtWc3xUYvzeELoeSMKJbQj3EJKFCg2gzLtxSoaZ085kHR0PizFIOrWpV1MN4FbAkLNoxzOw1-YA~37Wrdg3vrf4ZnToHFRtSOZJcKqdGl14AGmLfURYkcEGJN4KzRb405oMMIS93igPieE6aHvxFwi0TUyB2jKQrjJ1WwMnY~NypKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
background-size: cover;
width: 300px;
height: 350px;
    color: white;
    padding: 10px; 
    border-radius:10px ;
    
    &:hover{
        
        background-size: cover;
        background-image: url('https://s3-alpha-sig.figma.com/img/c456/8a81/c821178b04d4485ef19ff1ac13b9fc9a?Expires=1678060800&Signature=Tp1Ccy8Gk9nRWHewrFyEB95TF3oNwqBOrErlkv2G6NhcT-V1mSetKFUG0zSwUw8TsYD4RbkdxqpKNXGhWsoUlL45QYwwPdeYodYQo7s0M-8SmN87uG7zDvSBpeWeLe1rHKpbrDeo1HBQOeEEBEb0LRwm3weCf-OdUtWKWPtJJtWc3xUYvzeELoeSMKJbQj3EJKFCg2gzLtxSoaZ085kHR0PizFIOrWpV1MN4FbAkLNoxzOw1-YA~37Wrdg3vrf4ZnToHFRtSOZJcKqdGl14AGmLfURYkcEGJN4KzRb405oMMIS93igPieE6aHvxFwi0TUyB2jKQrjJ1WwMnY~NypKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
    }
p{
   padding: 4px;
    font-size: 25px;
} 
@media(max-width:730px)
{
    width: 250px;
    height: 300px;

}
@media(max-width:620px)
{
    width: 200px;
    height: 250px;
}@media(max-width:520px)
{
    width: 300px;
    height: 350px;
}
@media(max-width:375px)
{
    width: 250px;
}

`;
const Card3 = styled.div`
margin: 10px;
background-image:
linear-gradient(180deg, rgba(165, 1, 129, 0.25) 0%, rgba(210, 88, 0, 0.1875) 51.56%, rgba(135, 0, 0, 0.125) 100%),
url('https://s3-alpha-sig.figma.com/img/35e8/68d9/f1ff3f973bb47f1d1d455d0d1f950a53?Expires=1678060800&Signature=IyNJGOv1UZPDptSGfULMlibziLBp82fBpXTeCy4pYiGjeD7rzoT0GDTRRaZaFCNcu7NccDeZoXZyoOANDLKg1IqAFwPyGJYEwCOu2AqGxzKCqSrtZpAna-EIl-fsvMNfpgJRvUmy5wbrYHcYSngtR65nDAlEVWdveVbiEulh0vWRTmR7Cy7V2JFfGFiDu3y7BlCpQyY~D8rnhXeTjJeazORiJR9u1I~kjcrqXWaELnRd7gjD8oMEnUOXStuCYmYikfRwyv0XaDEEZJTkadEtvECcu58Q4c2JwZhdbf7S9f3FVg5zRS2nm-k48I9YCjg-qsaMMEnkozZeixx8cU-cHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
background-size: cover;
width: 300px;
height: 350px;
    color: white;
    padding: 10px; 
    border-radius:10px ;
    
    &:hover{
        
        background-size: cover;
        background-image: url('https://s3-alpha-sig.figma.com/img/35e8/68d9/f1ff3f973bb47f1d1d455d0d1f950a53?Expires=1678060800&Signature=IyNJGOv1UZPDptSGfULMlibziLBp82fBpXTeCy4pYiGjeD7rzoT0GDTRRaZaFCNcu7NccDeZoXZyoOANDLKg1IqAFwPyGJYEwCOu2AqGxzKCqSrtZpAna-EIl-fsvMNfpgJRvUmy5wbrYHcYSngtR65nDAlEVWdveVbiEulh0vWRTmR7Cy7V2JFfGFiDu3y7BlCpQyY~D8rnhXeTjJeazORiJR9u1I~kjcrqXWaELnRd7gjD8oMEnUOXStuCYmYikfRwyv0XaDEEZJTkadEtvECcu58Q4c2JwZhdbf7S9f3FVg5zRS2nm-k48I9YCjg-qsaMMEnkozZeixx8cU-cHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
    }
p{
   padding: 4px;
    font-size: 25px;
} 
@media(max-width:730px)
{
    width: 250px;
    height: 300px;
}@media(max-width:620px)
{
    width: 200px;
    height: 250px;
}
@media(max-width:520px)
{
    width: 300px;
    height: 350px;
}
@media(max-width:375px)
{
    width: 250px;
}

`;
const Card4 = styled.div`
margin: 10px;
background-image:
linear-gradient(180deg, rgba(0, 17, 169, 0.25) 0%, rgba(1, 94, 114, 0.1875) 51.56%, rgba(197, 255, 251, 0.125) 100%),
url('https://s3-alpha-sig.figma.com/img/1b90/ef3f/86558a426968dedf3855b0174bf8c7c0?Expires=1678060800&Signature=lfh7GIOJeOPdELcGPNNOi0DSOHkAYMfVSR6pRFHddrFtd4QeWhNO-zuKSoTJy3gcKNY4gWhQTR~EuM3t9b9oRKUiy0lb7DBudKGmD4Lf0QLgLghnPvG7i6c8KYC8pgncA4Q-JspjFz0mIgO4iKYrJeGzSb1es4HYQHAhQAGxHQE4Z0WJ30~zO-nsDVkYYwEwcYLdvBTgkEebFdLTFKNPzszjLCk6rxThoeEUYerNKrGoiXnHLvZVmwZpksLUbJWH9I-7wkZE1VT~q9QWJTwtEF0SPTx33ZpsUppJkrka8o-zWSyIfYsxhM5hXX4xkJt4vsxTZAY2h3X56X-c2-~TTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
background-size: cover;
width: 300px;
height: 350px;
    color: white;
    padding: 10px; 
    border-radius:10px ;
    
    &:hover{
        
        background-size: cover;
        background-image: url('https://s3-alpha-sig.figma.com/img/1b90/ef3f/86558a426968dedf3855b0174bf8c7c0?Expires=1678060800&Signature=lfh7GIOJeOPdELcGPNNOi0DSOHkAYMfVSR6pRFHddrFtd4QeWhNO-zuKSoTJy3gcKNY4gWhQTR~EuM3t9b9oRKUiy0lb7DBudKGmD4Lf0QLgLghnPvG7i6c8KYC8pgncA4Q-JspjFz0mIgO4iKYrJeGzSb1es4HYQHAhQAGxHQE4Z0WJ30~zO-nsDVkYYwEwcYLdvBTgkEebFdLTFKNPzszjLCk6rxThoeEUYerNKrGoiXnHLvZVmwZpksLUbJWH9I-7wkZE1VT~q9QWJTwtEF0SPTx33ZpsUppJkrka8o-zWSyIfYsxhM5hXX4xkJt4vsxTZAY2h3X56X-c2-~TTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
    }
p{
   padding: 4px;
    font-size: 25px;
} 
@media(max-width:730px)
{
    width: 250px;
    height: 300px;
}@media(max-width:620px)
{
    width: 200px;
    height: 250px;
}@media(max-width:520px)
{
    width: 300px;
    height: 350px;
}
@media(max-width:375px)
{
    width: 250px;
}

`;
const Card5 = styled.div`
margin: 10px;
background-image:
linear-gradient(180deg, rgba(0, 17, 169, 0.1) 0%, rgba(1, 94, 114, 0.075) 51.56%, rgba(197, 255, 251, 0.05) 100%),
url('https://s3-alpha-sig.figma.com/img/f59d/2339/c4cc63b98ecac0b1fec3a80244921ad7?Expires=1678060800&Signature=IfGYziJ5MLqfbu2i~Zq4kLghMkDBQA-oM-0x1cgxJQxRVnZzqEryQwK~TD5RCePlJnX3suZRw5ubVV3OVu0Tz8c7pD7Ha7OUH9quGOfLpyw1lOm9rzlJg-hCkIRS6u1FC-yH75MZOCMi5RKukHTg0NT6OkRevl8WdIl5Tyt8F2DMhf5gK5R7KzXqknyXzXBAghh6c4sZnkC8NOrG7GR~7LHUAoDrKus~Fh4TYxtxRE6sKwnVWx5Q32qwoOrID79Wa6sYipimzNuDR3wyqEcKLMRK9UfHrIEOyUN9~ssQR3wW545YiisMRxRFPybCFsLwcWs-LVRTKGUc8EKahyp6kg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
background-size: cover;
width: 300px;
height: 350px;
    color: white;
    padding: 10px; 
    border-radius:10px ;
    
    &:hover{
        
        background-size: cover;
        background-image: url('https://s3-alpha-sig.figma.com/img/f59d/2339/c4cc63b98ecac0b1fec3a80244921ad7?Expires=1678060800&Signature=IfGYziJ5MLqfbu2i~Zq4kLghMkDBQA-oM-0x1cgxJQxRVnZzqEryQwK~TD5RCePlJnX3suZRw5ubVV3OVu0Tz8c7pD7Ha7OUH9quGOfLpyw1lOm9rzlJg-hCkIRS6u1FC-yH75MZOCMi5RKukHTg0NT6OkRevl8WdIl5Tyt8F2DMhf5gK5R7KzXqknyXzXBAghh6c4sZnkC8NOrG7GR~7LHUAoDrKus~Fh4TYxtxRE6sKwnVWx5Q32qwoOrID79Wa6sYipimzNuDR3wyqEcKLMRK9UfHrIEOyUN9~ssQR3wW545YiisMRxRFPybCFsLwcWs-LVRTKGUc8EKahyp6kg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
    }
p{
   padding: 4px;
    font-size: 25px;
} 
@media(max-width:730px)
{
    width: 250px;
    height: 300px;
}@media(max-width:620px)
{
    width: 200px;
    height: 250px;
}@media(max-width:520px)
{
    width: 300px;
    height: 350px;
}
@media(max-width:375px)
{
    width: 250px;
}

`;
const Card6 = styled.div`
margin: 10px;
background-image:
linear-gradient(180deg, rgba(165, 1, 1, 0.25) 0%, rgba(114, 48, 1, 0.1875) 51.56%, rgba(255, 148, 148, 0.125) 100%),
url('https://s3-alpha-sig.figma.com/img/6b84/9478/21c1e9ec984edd83c2f5d876b0e3977b?Expires=1678060800&Signature=TxPgSdrvIPQeJz8ctHvBiM~PAL-Rd2ygTX-1u~WqEa61dwmK6MWaXB7Bld1PRzmjv70dwXri8STzb-6~rNXtu-N-E3R09n~CRxQV7BOKCROfrFXIzS54hJDcqZ7WzYNs51LpIMuGKzu2AVb5R5y6Hymz1HvUUAVJyPjUt4h5Yjd0R2GOIjmR8kwHrbrrTQYR1Y2JXbF~sCxjWimb4463ZtZp2vuSSdT3bAmHmu7yme6oMhoHpeZKTMHJvSBlSRGmVkb6pFs6CQB9Lj1V0PWyrN33nqf7ZyWClVBGfbW9UqqrMm8ni3itUA65vbiWkhbl3qJoggLy945D0OumZVIXQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
background-size: cover;
width: 300px;
height: 350px;
    color: white;
    padding: 10px; 
    border-radius:10px ;
    
    &:hover{
        
        background-size: cover;
        background-image: url('https://s3-alpha-sig.figma.com/img/6b84/9478/21c1e9ec984edd83c2f5d876b0e3977b?Expires=1678060800&Signature=TxPgSdrvIPQeJz8ctHvBiM~PAL-Rd2ygTX-1u~WqEa61dwmK6MWaXB7Bld1PRzmjv70dwXri8STzb-6~rNXtu-N-E3R09n~CRxQV7BOKCROfrFXIzS54hJDcqZ7WzYNs51LpIMuGKzu2AVb5R5y6Hymz1HvUUAVJyPjUt4h5Yjd0R2GOIjmR8kwHrbrrTQYR1Y2JXbF~sCxjWimb4463ZtZp2vuSSdT3bAmHmu7yme6oMhoHpeZKTMHJvSBlSRGmVkb6pFs6CQB9Lj1V0PWyrN33nqf7ZyWClVBGfbW9UqqrMm8ni3itUA65vbiWkhbl3qJoggLy945D0OumZVIXQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
    }
p{
   padding: 4px;
    font-size: 25px;
} 
@media(max-width:730px)
{
    width: 250px;
    height: 300px;
}@media(max-width:620px)
{
    width: 200px;
    height: 250px;
}@media(max-width:520px)
{
    width: 300px;
    height: 350px;
}
@media(max-width:375px)
{
    width: 250px;
}

`;
const Card7 = styled.div`
margin: 10px;
background-image:
linear-gradient(180deg, rgba(10, 65, 50, 0.25) 0%, rgba(43, 168, 55, 0.25) 51.56%, rgba(108, 165, 108, 0.25) 100%),
url('https://s3-alpha-sig.figma.com/img/1b90/ef3f/86558a426968dedf3855b0174bf8c7c0?Expires=1678060800&Signature=lfh7GIOJeOPdELcGPNNOi0DSOHkAYMfVSR6pRFHddrFtd4QeWhNO-zuKSoTJy3gcKNY4gWhQTR~EuM3t9b9oRKUiy0lb7DBudKGmD4Lf0QLgLghnPvG7i6c8KYC8pgncA4Q-JspjFz0mIgO4iKYrJeGzSb1es4HYQHAhQAGxHQE4Z0WJ30~zO-nsDVkYYwEwcYLdvBTgkEebFdLTFKNPzszjLCk6rxThoeEUYerNKrGoiXnHLvZVmwZpksLUbJWH9I-7wkZE1VT~q9QWJTwtEF0SPTx33ZpsUppJkrka8o-zWSyIfYsxhM5hXX4xkJt4vsxTZAY2h3X56X-c2-~TTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
background-size: cover;
width: 300px;
height: 350px;
    color: white;
    padding: 10px; 
    border-radius:10px ;
    
    &:hover{
        
        background-size: cover;
        background-image: url('https://s3-alpha-sig.figma.com/img/1b90/ef3f/86558a426968dedf3855b0174bf8c7c0?Expires=1678060800&Signature=lfh7GIOJeOPdELcGPNNOi0DSOHkAYMfVSR6pRFHddrFtd4QeWhNO-zuKSoTJy3gcKNY4gWhQTR~EuM3t9b9oRKUiy0lb7DBudKGmD4Lf0QLgLghnPvG7i6c8KYC8pgncA4Q-JspjFz0mIgO4iKYrJeGzSb1es4HYQHAhQAGxHQE4Z0WJ30~zO-nsDVkYYwEwcYLdvBTgkEebFdLTFKNPzszjLCk6rxThoeEUYerNKrGoiXnHLvZVmwZpksLUbJWH9I-7wkZE1VT~q9QWJTwtEF0SPTx33ZpsUppJkrka8o-zWSyIfYsxhM5hXX4xkJt4vsxTZAY2h3X56X-c2-~TTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
    }
p{
   padding: 4px;
    font-size: 25px;
} 
@media(max-width:730px)
{
    width: 250px;
    height: 300px;
}@media(max-width:620px)
{
    width: 200px;
    height: 250px;
}@media(max-width:520px)
{
    width: 300px;
    height: 350px;
}
@media(max-width:375px)
{
    width: 250px;
}

`;