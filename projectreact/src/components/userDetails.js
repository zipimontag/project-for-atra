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
    <h5 className="card-title">{users.nameUser}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{users.age}</h6>
    <h6 className="card-subtitle mb-2 text-muted">{users.city}</h6>
    <h6 className="card-subtitle mb-2 text-muted">{users.email}</h6>
    <h6 className="card-subtitle mb-2 text-muted">{users.phone}</h6>
  </div>
</div>
    </div>
)
})