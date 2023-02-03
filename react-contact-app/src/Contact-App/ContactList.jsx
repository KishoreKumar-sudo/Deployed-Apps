import React, { useEffect, useState } from 'react'
const ContactList = (props) => {
const [products, setProducts] = useState({})

useEffect(()=>{
    setProducts(props.data.users)
}, [props])
    return <>
        <h1>Contact List</h1>
        <div className="container">
            <pre>{JSON.stringify(products)}</pre>
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
    products.length>0?<>
   {
     products.map((user)=>{
        return <tr>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
        </tr>
     })
   }
    </>:null
}
 

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default ContactList