import React,{Component} from 'react';
import './main.css';
import { Row, Col ,Button, Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { baseUrl} from '../shared/basedUrl';
import axios from 'axios';

import logo from './UCP-Logo.gif';


const required   = (val) => val && val.length;
const validReg = (val) => /^[lL][12][fFsS]\d{2}\D{4}\d{4}$/i.test(val);



class StudentSignin extends Component{
    constructor(props){
      super(props);
      this.state={
        regno:'',
        password:''
      }
      this.handleLogin=this.handleLogin.bind(this);
    }
    handleLogin(values){
      
      console.log('Current State is: ' + JSON.stringify(values));

        alert('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + this.state);
        console.log(this.state);

        const requestOptions = {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json',
              'Authorization': 'Bearer my-token'
          },
          body: JSON.stringify({ 
            username: this.state.username,
          password:this.state.password})
        };
        const response= fetch(baseUrl+'student/1/login',requestOptions);
        // const data= response.json();
        console.log(response);

        //  axios.post(baseUrl+'student/1/login',this.state)
        //  .then(response=>{
        //    console.log(response)
        //  })
        //  .catch(error=>{
        //    console.log(error)
        //  })
    }
    changeHandler=e=>{
      this.setState({[e.target.name]:e.target.value})
    }
//     async componentDidMount(){
          
//       const response=await fetch(baseUrl+'student/l1f16bscs0151/personal_info');
//       const data=await response.json();
//       console.log(data);

// }
     render(){
       const {regno,password}=this.state;
       return(
          <div className='bg'>
            <span className="signinbox">
            
            <img src={logo} className="ucp-logo " height='200px' width='200px ' alt="logo" />
            <br></br>
            <h4><p className='textshadow' style={{color:'#707070'}}>Student Login</p></h4>
            <br></br><br></br>     
              <LocalForm onSubmit={(values)=>this.handleLogin(values)}>
                <Row className='form-group'>
                  
                  <Col md={{offset:3}}>
                  <Control.text model=".regno" id="regno" name="regno" value={regno} placeholder="Registration Number" className="form-control" onChange={this.changeHandler}
                  validators={{required, validReg}} 
                    style={{backgroundColor:'#ECECEC',borderRadius: '35px',paddingRight:'120px'}}/>  
                  </Col>
                  
                  <Errors  className="text-danger" model=".regno" show="touched"
                            messages={{ required: 'Required' }}/>
                </Row> 
                
                <Row className='form-group'>
                  
                  <Col md={{offset:3}}>
                  <Control.text model=".password" id="password" name="password" value={password} type='password' placeholder="Password" className="form-control" onChange={this.changeHandler}
                  validators={{required}} 
                  style={{backgroundColor:'#ECECEC',borderRadius: '35px',paddingRight:'120px'}}/>  
                  </Col>
                  <Errors  className="text-danger" model=".password" show="touched"
                          messages={{ required: 'Required'}}/>
                </Row> 
                
                <Row className='form-group'>
                  
                  <Col md={{size:3,offset:3}}>
                    <Label check>
                    <Control.checkbox model=".agree" id="agree" name="agree" className="form-check-input"/> {' '}Remember me!
                    </Label>
                  </Col>
                </Row> 
                <Row className="form-group">
                  <Col md={{ offset:3 }}>
                      <Button type="submit" style={{backgroundColor:'#3C315F',borderRadius: '35px',paddingLeft:'130px',paddingRight:'130px'}}>
                          LOGIN
                      </Button>
                    </Col>
                </Row>
                <Row className="form-group">
                  <Col style={{alignItems:'center' ,color:'red'}}>
                          <p>Forget Password</p>
                      
                  </Col>
                </Row>
              </LocalForm>
            </span>
          </div>
       )
     }
    }
    export default StudentSignin;