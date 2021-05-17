import React from 'react';

class RegisterCar extends React.Component {
    constructor() {
        super();
        this.state={
            manufacturer:'',
            name:'',
            type:'',
            color:'',
            valMessage:'',
            sucMesage:''

        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       const {manufacturer,name,type,color}=this.state;
       if(manufacturer&&name&&type&&color){
            this.setState({sucMesage:"Your Car is Registered",cMessage:"",valMessage:""})

       }else{
           this.setState({valMessage:"All fields are mandatory"})
       }

    }
    render() {
        return (
            <React.Fragment><br />
                <div className="card col-md-6 offset-md-3">
                    <div className="card-header">
                        <h4>Register Here</h4>
                    </div>
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label>Manufacturer: </label>
                            <input name="manufacturer" type="text" onChange={this.handleChange} placeholder="Enter Manufacturer" required className="form-control" />
                        </div>
                        <div className="form-group row">
                            <label>Name: </label>
                            <input name="name" type="text" onChange={this.handleChange} placeholder="Enter Name" required className="form-control" />
                        </div>
                        <div className="form-group row">
                            <label>Type: </label>
                            <select className="form-control" name="type" onChange={this.handleChange}>
                            <option value="">SelectOne</option>
                                <option value="SUV">SUV</option>
                                <option value="Sedan">Sedan</option>
                                <option value="SmallCar">SmallCar</option>

                            </select>
                        </div>
                        <div className="form-group row">
                            <label>Color: </label>
                            <input name="color" type="text" onChange={this.handleChange} placeholder="Enter Color" required className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                    {this.state.valMessage && <div className="alert alert-danger">{this.state.valMessage}</div>}
            
                    {this.state.sucMesage && <div className="alert alert-success">{this.state.sucMesage}</div>}

                </div>

            </React.Fragment>
        )
    }
}
export default RegisterCar;