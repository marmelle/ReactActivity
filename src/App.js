import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {
        Button,ButtonGroup,
        Form,FormGroup,ControlLabel,
        FormControl,HelpBlock,
        Checkbox,Radio,Grid,Row,Col
       } from 'react-bootstrap';

class App extends Component {
   
    state = {
    name: "",
    color:"",
    movies:[],
    food:[],
    gender:"",
    country:""
  };
  
  
  onChange = (fieldName)=>{
    
    return (event)=>{
      var state = this.state;
      state[fieldName]=event.target.value;
      this.setState(state);
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
      var targetArray = this.state[fieldName];
      if(targetArray.indexOf(event.target.value)>=0)
      targetArray.splice(
        targetArray.indexOf(event.target.value),
        1
      );
      else 
        targetArray.push(event.target.value);
        
        var state = this.state;
        state[fieldName]=targetArray;
        this.setState(state);
    }
  };
  
  render() {
    return (
      <div className="container">
        <div className="page-header">
         <h2>Student Survey!!!</h2>
         
        </div>
        <p className="jumbotron">
        
        <Grid>
          <Row>
            <Col md={3}> 
              <Form>
                <FormGroup>
                   <ControlLabel> Name Please ... </ControlLabel>
                   <FormControl type="text" 
                   placeholder="Name here ..."
                   value={this.state.name}
                   onChange={this.onChange('name')}
                   />
                    <HelpBlock> use to identify </HelpBlock>
                </FormGroup>
                
                <FormGroup>
                    <ControlLabel> Choose your favorite color ... </ControlLabel> 
                    <FormControl componentClass="select"
                    placeholder="Color here ..."
                    value={this.state.color}
                   onChange={this.onChange('color')}
                    >
                    
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">BLue</option> 
                    </FormControl>
              
                  <HelpBlock> use to identify </HelpBlock>
              </FormGroup>
                
                <FormGroup>
                  <ControlLabel> Favorite Movies </ControlLabel>
                    <Checkbox value="Harry Potter"
                              checked={this.state.movies.indexOf('Harry Potter')>=0 ? true:false}
                              onChange={this.checkboxChange('movies')}>
                              Harry Potter 
                    </Checkbox>
                    <Checkbox value="Lord of the Rings"
                              checked={this.state.movies.indexOf('Lord of the Rings')>=0 ? true:false}
                              onChange={this.checkboxChange('movies')}>
                              Lord of the Rings 
                    </Checkbox>
                    <Checkbox value="Twilight"
                              checked={this.state.movies.indexOf('Twilight')>=0 ? true:false}
                              onChange={this.checkboxChange('movies')}>
                              Twilight </Checkbox>
                </FormGroup>
                
                <FormGroup>
                  <ControlLabel> Gender </ControlLabel>
                    <Radio name="gender" value="Male"
                          onChange={this.onChange ('gender')}> Male </Radio>
                           
                    <Radio name="gender"value="Female"
                          onChange={this.onChange ('gender')}> Female </Radio>
                </FormGroup>
                
                
                 <FormGroup>
                   <ControlLabel> Address:  </ControlLabel>
                   <FormControl type="text" 
                   placeholder="Input Adress..."
                   value={this.state.address}
                   onChange={this.onChange('address')}
                   />
                    <HelpBlock> use to identify </HelpBlock>
                </FormGroup>
                
                <FormGroup>
                  <ControlLabel> Favorite Food </ControlLabel>
                    <Checkbox value="Fried Chicken"
                              checked={this.state.food.indexOf('Fried Chicken')>=0 ? true:false}
                              onChange={this.checkboxChange('food')}>
                              Fried Chicken 
                    </Checkbox>
                    <Checkbox value="Crispy Pata"
                              checked={this.state.food.indexOf('Crispy Pata')>=0 ? true:false}
                              onChange={this.checkboxChange('food')}>
                              Crispy Pata
                    </Checkbox>
                    <Checkbox value="Menudo"
                              checked={this.state.food.indexOf('Menudo')>=0 ? true:false}
                              onChange={this.checkboxChange('food')}>
                              Menudo </Checkbox>
                    <Checkbox value="Apple"
                              checked={this.state.food.indexOf('Apple')>=0 ? true:false}
                              onChange={this.checkboxChange('food')}>
                              Apple </Checkbox>
                </FormGroup>
                
                 <FormGroup>
                  <ControlLabel> Country </ControlLabel>
                    <Radio name="country" value="Philippines"
                          onChange={this.onChange ('country')}> Philippines </Radio>
                           
                    <Radio name="country" value="Korea"
                          onChange={this.onChange ('country')}> Korea </Radio>
                    
                     <Radio name="country" value="China"
                          onChange={this.onChange ('country')}> China </Radio>
                          
                </FormGroup>
                
                
                
                
                
                
                    <ButtonGroup>
                  
                    <Button bsStyle="info">  <span className="glyphicon glyphicon-star"> </span> Info Button </Button>
                    <Button bsStyle="primary">Info Button</Button>
                    <Button bsStyle="warning">Info Button</Button>
                    <Button bsStyle="danger">Info Button</Button>
                    
                    </ButtonGroup>
                    
                   
                </Form>
               </Col>
               
                <Col md={3}> 
                  <strong> Name is {this.state.name}</strong> <br/>
                  <strong> Color is {this.state.color}</strong> <br/>
                  <strong> Movies are {
                    this.state.movies.map((item,i)=>{
                      return <div>
                      <span className="label label-info">{item}</span>
                      </div>
                    }) 
                  }</strong> <br/>
                  <strong> Gender is {this.state.gender}</strong> <br/>
                  <strong> I live in {this.state.address}</strong> <br/>
                  
                  <strong> My Favorite food is {this.state.food.map((item,i)=>{
                      return <div>
                      <span className="label label-info">{item}</span>
                      </div>
                    }) }</strong> <br/>
                   <strong> My country is {this.state.country}</strong> 
                </Col>
                    
           </Row>
        </Grid>
        
        
        </p>
      </div>
    );
  }
}

export default App;
