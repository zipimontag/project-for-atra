import React from 'react';
import {connect} from 'react-redux';
function mapStateToProps(state){
    return{
        users:state.users
    }
}
export default connect(mapStateToProps) (function UserDetails(props) {
const {users}=props;
return(
    <div>    
        <div className="card" style={{"width": "18rem;"}}>
  <div className="card-body">
    <h5 className="card-title">name: {users.nameUser}</h5>
    <h6 className="card-subtitle mb-2 text-muted">age: {users.age}</h6>
    <h6 className="card-subtitle mb-2 text-muted">city: {users.city}</h6>
    <h6 className="card-subtitle mb-2 text-muted">email: {users.email}</h6>
    <h6 className="card-subtitle mb-2 text-muted">phone: {users.phone}</h6>
  </div>
</div>
    </div>
)
})