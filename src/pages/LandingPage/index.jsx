import React from "react";
import * as Components from './components';
import styles from './Landing.module.css';

function Landing() {
     const [signIn, toggle] = React.useState(true);
      return(
        
        <div className={styles.mainDiv}>
            {/* - 800.times do |ntime|
	        %div */}
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Upload an Image</Components.Title>
                        {/* <Components.Input type='text' placeholder='Name' />
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' /> */}
                        <Components.Button>Upload <img src='/upload.svg' style={{height: "20px", filter: "invert(1) contrast(2)", marginLeft: "10px"}}></img></Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Snap from the Map</Components.Title>
                        {/* <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor> */}
                        <Components.Button>Go to Maps <img src='/map.svg' style={{height: "20px", marginLeft: "10px", filter: "invert(1) contrast(2)"}}></img></Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Make a Snap</Components.Title>
                        <Components.Paragraph>
                            Take a snapshot from a map for direct analysis
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Take a Snap
                        </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Make an upload</Components.Title>
                            <Components.Paragraph>
                                Upload an image from your local for analysis
                            </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Upload
                                </Components.GhostButton> 
                        </Components.RightOverlayPanel>
    
                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
            <div className={styles.footer} style={{position: 'absolute', bottom: 0, left: '50%', transform: "translateX(-50%)", width: "100%", height: "5vh", backgroundColor: "" }}>Image Captioner @ Tri-NIT Hackathon '24</div>
          </div>
      )
 }

 export default Landing;