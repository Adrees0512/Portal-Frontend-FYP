import React,{Component} from 'react';
import './main.css';
import { Media } from 'reactstrap';
import logo from '../ucp-logo.png';
import {Navbar} from 'reactstrap';

class MainPage extends Component{
    constructor(props){
      super(props);
      this.state = {
        classes: [
            {
              id: 0,
              name:'Student',
              image: 'assets/images/student.png',
              category: 'students',
            },
            {
              id: 1,
              name:'Teacher',
              image: 'assets/images/teacher.png',
              category: 'teacher',
            },
            {
              id: 2,
              name:'Vadonut',
              image: 'assets/images/admin.png',
              category: 'administrator',
            },
           ],
    };
      }
     render(){

        const student = this.state.classes.map((classe) => {
            if(classe.id===0)
            {
            return (
                <div key={classe.id} className=" classes" >
                     <a href='stdsignin'>
                        <Media left middle>
                        <br></br>
                            <Media object src={classe.image} alt={classe.name}  style={{height:'120px'}}></Media>
                        </Media>
                    </a>
                </div>
            );
            }
            else{
                return(
                    <div>
                    </div>
                );
            }
        });

        const teacher = this.state.classes.map((classe) => {
            if(classe.id===1)
            {
                return (
                    <div key={classe.id} className=" classes">
                        <a href='tchrsignin'>
                            <Media left middle>
                                <br></br>
                                <Media object src={classe.image} alt={classe.name}  style={{height:'120px'}}  onClick={() => this.onTecherSelect(classe.id)}></Media>
                            </Media>
                        </a>
                    </div>
                  );
            }
            else{
                return(
                    <div>
                    </div>
                );
            }
        });
        
        const admin= this.state.classes.map((classe) => {
            if(classe.id===2)
            {
                return (
                <div key={classe.id}>
                    <a href='admsignin'>
                        <Media left middle>
                        <br></br>
                            <Media object src={classe.image} alt={classe.name}  style={{height:'120px'}}onClick={() => this.onAdminSelect(classe.id)}></Media>
                        </Media>
                    </a>
                </div>
                );
            }
            else{
                return(
                    <div>
                    </div>
                );
                
            }
        });
       return(
        <div style={{backgroundColor: '#EBE4E4'}}>
            <Navbar style={{backgroundColor: '#D9CBCB'}} dark>
                <img src={logo} className="App-logo" alt="logo" />
              </Navbar>
            <div style={{backgroundColor: '#EBE4E4'}}>
                <div className='container' >
                <br></br><br></br><br></br><br></br><br></br>
                    <div className='row'>
                        <div className='col-12 col-sm-4'>
                            <span className='Student-circle'>
                                {student}   
                            </span>
                            <p style={{color:'grey'}}>Student Portal</p>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <span className='Teacher-circle'>
                                {teacher}
                            </span>
                            <p style={{color:'grey'}}>Teacher Portal</p>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <span className='Admin-circle'>
                                {admin}
                            </span>
                            <p style={{color:'grey'}}>Administrator Portal</p>
                        </div>
                    </div>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
            </div>
        </div>
       )
     }
    }
    export default MainPage;