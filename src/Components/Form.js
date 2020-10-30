import React from 'react'

const Form = (props) =>{
    const{inputs,setInputs} = props;

    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    return(
        <div className="p-3" style={{backgroundColor:"gray"}}>
        <form>
            <div className="form group p-2" >
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} type="text" name="firstName"/>
            </div>
            <div className="form group p-2">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName"/>
            </div>    
            <div className="form group p-2">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name="email"/>
            </div>
            <div className="form group p-2">    
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="password" name="password"/>
            </div>
            <div className="form group p-2">    
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={onChange} type="password" name="confirmPassword"/>
            </div>
        </form>
        </div>
    );
};
export default Form;
