import React from 'react'
import styled from 'styled-components';
export default function Six() {
    return (
        <Container>
            <Heading>
                <h1>Blog</h1>
            </Heading>
            <Cards>
                <Card>
                    <img src='https://s3-alpha-sig.figma.com/img/c267/dd73/059ed42e28a4041e93040ca2c9894744?Expires=1678060800&Signature=D2GITF0yZKZIp1-3qeSxWwFKo5TqFrIf2a1x~~WbklCywpNtJVcSucztlT51k08pgtY5bOuAMUCOSfP7qz6VIF5rDPLj9mDRqgx50FYh18ZUaVjJvX6C2lzHouGQe1fOYYvfgq9KGcVcf9KTSJ5G5l3iDF1ZGzWSxhwvD8OHPifUk9ilEWL1sB5yUDLbueHD86IjrdemghtKB5mxj4OxQO6sFGuxgorzqF0vN12VS6LWg981j7VWA51mI6cjtRiHSopKnj5CPu0ZUIjOfrDBGfrI7dGoS9wlDSSF0OfPUc0GvtkaWqATaBFGyAcfE5JQVVZ9Sk-BpVIoZedhcMbBZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
                    <Content>
                        <h1>Survival Strategies</h1>
                        <p>Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit,
                            sed diam nonummy nibh.</p>
                    </Content>
                </Card>
                <Card>
                    <img src='https://s3-alpha-sig.figma.com/img/c267/dd73/059ed42e28a4041e93040ca2c9894744?Expires=1678060800&Signature=D2GITF0yZKZIp1-3qeSxWwFKo5TqFrIf2a1x~~WbklCywpNtJVcSucztlT51k08pgtY5bOuAMUCOSfP7qz6VIF5rDPLj9mDRqgx50FYh18ZUaVjJvX6C2lzHouGQe1fOYYvfgq9KGcVcf9KTSJ5G5l3iDF1ZGzWSxhwvD8OHPifUk9ilEWL1sB5yUDLbueHD86IjrdemghtKB5mxj4OxQO6sFGuxgorzqF0vN12VS6LWg981j7VWA51mI6cjtRiHSopKnj5CPu0ZUIjOfrDBGfrI7dGoS9wlDSSF0OfPUc0GvtkaWqATaBFGyAcfE5JQVVZ9Sk-BpVIoZedhcMbBZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
                   
                   <Content>
                        <h1>Survival Strategies</h1>
                        <p>Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit,
                            sed diam nonummy nibh.</p>
                    </Content>
                </Card>
                <Card>
                    <img src='https://s3-alpha-sig.figma.com/img/c267/dd73/059ed42e28a4041e93040ca2c9894744?Expires=1678060800&Signature=D2GITF0yZKZIp1-3qeSxWwFKo5TqFrIf2a1x~~WbklCywpNtJVcSucztlT51k08pgtY5bOuAMUCOSfP7qz6VIF5rDPLj9mDRqgx50FYh18ZUaVjJvX6C2lzHouGQe1fOYYvfgq9KGcVcf9KTSJ5G5l3iDF1ZGzWSxhwvD8OHPifUk9ilEWL1sB5yUDLbueHD86IjrdemghtKB5mxj4OxQO6sFGuxgorzqF0vN12VS6LWg981j7VWA51mI6cjtRiHSopKnj5CPu0ZUIjOfrDBGfrI7dGoS9wlDSSF0OfPUc0GvtkaWqATaBFGyAcfE5JQVVZ9Sk-BpVIoZedhcMbBZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
                    <Content>
                        <h1>Survival Strategies</h1>
                        <p>Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit,
                            sed diam nonummy nibh.</p>
                    </Content>
                </Card>
            </Cards>
        </Container>
    )
}
const Container = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
`;
const Heading = styled.div`
margin-left: 120px;
font-size: 30px;
line-height: 60px;
/* identical to box height */

text-transform: capitalize;

color: #2BA837;
`;
const Cards = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
gap: 20px;
padding: 10px;
`;
const Card = styled.div`
height: 500px;
background-color: rgba(37, 101, 37, 0.15);
width: 350px;
img{
    width: 350px;
    height: 300px;
    overflow: hidden;
    position: relative;
    object-fit: cover;
border-radius: 10px 10px 0px 0px;
}
border-radius: 10px 10px;
@media(max-width:420px)
{
    width: 300px;
    
    img{
       width: 300px;
       height: 250px;
    }
}
@media(max-width:380px)
{
    width: 260px;
    height: 400px;
    img{
       width: 260px;
       height: 200px;
    }
}
`;
const Content = styled.div`
padding: 20px;

`;
