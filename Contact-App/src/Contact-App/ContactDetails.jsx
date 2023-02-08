import React from 'react'

const ContactDetails = (props) => {

    let userData = props.userData

    return <>
    <h1>Contact Details</h1>
  <div className="container">
    <div className="row">
        <div className="col-md">
            {/* <pre>{JSON.stringify(userData)}</pre> */}
            <div className="card">
                <div className="card-header">
                    <img src={userData.image} alt="Hi KK" />
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">{userData.firstName}</li>
                        <li className="list-group-item">{userData.gender}</li>
                        <li className="list-group-item">{userData.email}</li>
                        <li className="list-group-item">{userData.phone}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default ContactDetails