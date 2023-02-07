import React, { useEffect, useState } from 'react'
const ContactList = (props) => {
    const [users, setUsers] = useState({})

    useEffect(() => {
        setUsers(props.data.users)
    }, [props])

    let selectedUser = (user) => {
        props.method(user)
    }
    return <>
        <h1>Contact List</h1>
        <div className="container">
            {/* <pre>{JSON.stringify(users)}</pre> */}
            <div className="row">
                <div className="col-md">
                    <table className="table table-hover">
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 ? <>
                                    {
                                        users.map((user) => {
                                            return <tr onMouseOver={selectedUser.bind(this, user)}>
                                                <td>{user.id}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                            </tr>
                                        })
                                    }
                                </> : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default ContactList