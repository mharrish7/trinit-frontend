import { useRef, useState } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

function FileUpload() {
  const openRef = useRef(null);
  const [base64img, setBase64IMG] = useState();


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
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
    };
  });

  // Note: You might want to perform additional operations after reading the files.
};  


  return (
    <>
      <div style={{ height: '20%' }}>
        <Dropzone openRef={openRef} onDrop={handleDrop} activateOnClick={false}>
          Upload or drop files
        </Dropzone>

        <Group justify="center" mt="md">
          <Button onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
            Select files
          </Button>
        </Group>
      </div>
      <div style={{ height: '80%' }}>
        <div id="img">
          {
            
            <><img src={base64img}  style={{ maxWidth: '100%', maxHeight: '100%' }} /></>
            
          }
          
        </div>
        <div id="textbox"></div>
      </div>
    </>
  );
}

export default FileUpload;
