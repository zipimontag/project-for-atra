import React,{createRef} from 'react';
import { connect } from 'react-redux';
import { actions } from '../Store/action';
function mapStateToProps(state) {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch) => ({
    setName: (name) => dispatch(actions.setName(name)),
    setAge: (age) => dispatch(actions.setAge(age)),
    setCity: (city) => dispatch(actions.setCity(city)),
    setEmail: (email) => dispatch(actions.setEmail(email)),
    setPhone: (phone) => dispatch(actions.setPhone(phone))
})

export default connect(mapStateToProps, mapDispatchToProps)(function FormLogin(props) {
   const {setName,setAge,setCity,setEmail,setPhone}=props
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const reftoFullName = createRef();
    const reftoAge = createRef();
    const reftoCity = createRef();
    const reftoEmail = createRef();
    const reftoPhone = createRef();

    function register() {
        const user = {
            "userName": reftoFullName.current.value,
            "age": reftoAge.current.value,
            "city": reftoCity.current.value,
            "email": reftoEmail.current.value,
            "phone": reftoPhone.current.value
        }
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(user),
        };
        fetch("http://localhost:3300/createUser", requestOptions)
            .then(response => response.json())
            .then(res => {
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            <form>
                <h1>Register</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">full name</label>
                    <input type="text" className="form-control" id="name" ref={reftoFullName} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">age</label>
                    <input type="text" className="form-control" id="age" ref={reftoAge} onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">city</label>
                    <input type="text" className="form-control" id="city" ref={reftoCity} onChange={(e)=>setCity(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">email</label>
                    <input type="text" className="form-control" id="email" ref={reftoEmail} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">phone</label>
                    <input type="text" className="form-control" id="phone" ref={reftoPhone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
            </form>
            <button className="btn btn-primary" onClick={register}>submit</button>
        </div>
    )
})