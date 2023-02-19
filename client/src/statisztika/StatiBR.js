
import React, { useState } from "react";
import StatsBRCard from "./StatsBRCard";
import API from "../util/API";

import {
  Button,
  ModalBody,
  Modal,
  Input,
  FormGroup,
  Label,
 } from "reactstrap";

function Stati() {

    const [p1DataState, setP1DataState] = useState([]);
    const [Stats, setStats] = useState(false);
  


  


    async function fetchUserStats(user, platform) {
      const data = await API.getPlayerStats (user, platform);
      //stops code if api does not return user
      if(data.error){
        console.log('error user not found')
        return
      }
      
      if (!Stats) {
        await setP1DataState(data);
           console.log({});
        setStats(true);
      }
    
    }


  ////2    
    async function closeP1() {
      if (Stats) {
        await setP1DataState(p1DataState);
       
      } else {
        setStats(false);
        setP1DataState({});
        
      }
    }

    const [userIDInputState, setIDInputState] = useState();
    const [platformState, setPlatformState] = useState("uno");
    const handleUserIDChange = function(e){
        setIDInputState(e.target.value);
    }
    const handlePlatformChange = function(e){
        setPlatformState(e.target.value);
    }
    const handleFormSubmit = function(e){
        e.preventDefault();
        fetchUserStats(userIDInputState, platformState);
    }

    const [modal1, setModal1] = React.useState(false);
    return (
       
    <form onSubmit={handleFormSubmit}>
        <div>
        <h3>
           Warzone detailed player stats: ex. Sweetflying#1559
        </h3>
        <div>
        <Input
            aria-label="text"
            rows="6"
            color="success"
             label="userID"
             type="text" 
             id="userID" 
             placeholder="ex. Sweetflying#1559" 
             onChange={handleUserIDChange} />
        <FormGroup>
          <Label size="lg" className="text-muted" for="exampleSelect" id="platform">Platform</Label>
          
          <Input 
            
            type="select" name="select" 
            labelId="demo-simple-select-label"
            id="platform"
            label="Platform"
            onChange={handlePlatformChange} 
            >
            <option value="uno">Activision</option>
            <option value="uno">Playstation</option>
            <option value="uno">Xbox</option>
          </Input>
        </FormGroup>
        </div>
        <div>
              <Button
                type='submit'
                color="success"
                className="mr-1"
                onClick={() => setModal1(true)}
              >
                Submit
              </Button>
              
             

              <div>
              <Modal  className="modal-lg" isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header ">
                  
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  
                </div>
                <ModalBody className="bg-transparent">
                    
                  {Stats && <StatsBRCard data={p1DataState}  close={closeP1} />}
                   
                  
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
              </div>
         </div>
    </div>
 </form>
   
    );
  }
  
  
  export default Stati;
  