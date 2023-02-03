import React, { useEffect, useState } from 'react'
const ContactList = (props) => {
    let [contacts, setContacts] = useState()
    useEffect(() => {
        setContacts(props.users.users)
    },[props])
    return <>
        <h1>Contact List</h1>
        <div className="container">
            <pre>{JSON.stringify(contacts)}</pre>
            <div className="row">
                <div className="col-md">
                    <table className="table table-hover">
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile Num</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.length > 0 ? <>
                                    {
                                        contacts.map((contact) => {
                                            return <tr>
                                                <td>{contact.id}</td>
                                                <td>{contact.firstName}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.phone}</td>
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