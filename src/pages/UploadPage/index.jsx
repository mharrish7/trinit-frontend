import { useRef, useState } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import icon from "./icon.png"

function FileUpload() {
  const openRef = useRef(null);
  const [base64img, setBase64IMG] = useState();
  const [caption, setcaption] = useState(null);


  const handleDrop = (files) => {
  // Access and process the dropped files here
  console.log(typeof files);

  files.forEach((file) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      console.log('called: ', reader);
      setBase64IMG(reader.result);

      // Perform the fetch POST request after reading the file
      fetch('/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: reader.result }),
      })
      .then(response => response.json())
      .then(data =>{ console.log(data); setcaption(data.caption_V3)})
      .catch((error) => {
        console.error('Error:', error);
      });
    };
  });

  // Note: You might want to perform additional operations after reading the files.
};  


  return (
    <>
      <div id="div" style={{backgroundColor:"grey",opacity:"0.95", padding:"5%", borderRadius:"25px",width:"max-content",border: '2px solid rgba(0, 0, 0, 0.1)'}}>
        <div style={{ height: '20%',width:"750px", marginRight:"5%" ,border: '1px solid rgba(0, 0, 0, 0.05)'}}>
        <Dropzone style={{opacity:"1"}} openRef={openRef} onDrop={handleDrop} activateOnClick={false}>
          <img src={icon} />
          <br></br>
          <h3>Upload or drop your files here</h3>
        </Dropzone>

        <Group justify="center" mt="md">
          <Button onClick={() => openRef.current?.()} style={{ opacity:"1", pointerEvents: 'all' , borderRadius:"25px"}}>
            Select files
          </Button>
        </Group>
      </div>
      <br></br>
      <br></br>
      <div style={{ height: '80%' ,display:"flex"}}>
        <div id="img" style={{float:'left' ,width:"50%" ,height:"200px",border: '1px solid rgba(0, 0, 0, 0.05)'}}>
          {
            
            <><img src={base64img}  style={{ maxWidth: '100%', maxHeight: '100%' }} /></>
            
          }
          
        </div>
        <div id="textbox" style={{float:'right' ,width:"50%"}}>
            <h4 >"asdddddjad adhhhkdkak kdkahdkhad"</h4>

        </div>
      </div>
      </div>
      
    </>
  );
}

export default FileUpload;
