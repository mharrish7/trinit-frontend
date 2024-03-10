import React ,{useState,useEffect}  from 'react'
import { Center, Anchor, Box, rem,Button ,Container,Grid} from '@mantine/core'; 

import "./styles.css";

const index2 = () => {

    const [isHovered1, setHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);


  return (
    <div>
        <Container >
            <Center id="title" ><h1>Remote Sense Image Captioning.</h1></Center>

           
            <Container id="maindiv" style={{marginRight:"10%",justifyContent:'space-between' ,marginLeft:"10%",marginTop:"5%",backgroundColor:"red"}}>
                <div id="leftdiv" 
                onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)}
                >
                    {isHovered1 ? <Button>
                        button1
                    </Button> : 'Default Content 1'}
                    

                </div>
                <div id="rightdiv" 
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
                >
                    {isHovered2 ? <Button>
                        button2
                    </Button> : 'Default Content 2'}
                </div>
            </Container>

            
            
        </Container>

        
    </div>
  )
}

export default index2