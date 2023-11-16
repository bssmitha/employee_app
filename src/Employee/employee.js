import { useState } from 'react';
import './employee.css';

export default function Employee(props) {
    return (
        <div className="employee_container">
            <table>
                <thead>
                    <tr>
                        <th>EMPLOYEE ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>DEPARTMENT</th>
                    </tr>

                </thead>
                <tbody>
                    {props.empList && props.empList.map((item, index) => (<tr key={index}>
                        <td>{item.EMPLOYEE_ID}</td>
                        <td>{item.FIRST_NAME}</td>
                        <td>{item.LAST_NAME}</td>
                        <td>{item.DEPARTMENT}</td>
                    </tr>))}
                </tbody>
            </table>

        </div>
    );
}

