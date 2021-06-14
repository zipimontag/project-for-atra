import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
function mapStateToProps(state) {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(function AllUsers(props) {
    const { users } = props;
    const [allUser, setAllUser] = useState()
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("authorization", users);
    var requestOptions = {
        method: 'GET'
        // redirect:'follow'
        // headers: myHeaders,
    };
    useEffect(() => {
        fetch('http://localhost:3300/getAllUsers', requestOptions)
            .then(response => response.json())
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log('error', error));

    }, [])
    return (
        <div>
            {
                users.map((user, index) => (
                    <div key={index} className="card" style="width: 18rem;">
                        <div className="card-body">
                            <h5 className="card-title">{user.userName}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{user.age}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">{user.city}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">{user.phone}</h6>
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
})