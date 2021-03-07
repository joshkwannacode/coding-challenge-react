import React from 'react'
import Table from 'react-bootstrap/Table'

export default function MainTable({data}) {

    return (
        <>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Job Title</th>
              </tr>
            </thead>
      {data.map(a=>{
        return(
              <tbody key={a.id}>
                <tr>
                  <td>{a.id}</td>
                  <td>{a.first_name}</td>
                  <td>{a.last_name}</td>
                  <td>{a.email}</td>
                  <td>{a.job_title}</td>
                </tr>
              </tbody>
        )
      })}
        </Table>
        </>
    )
}
