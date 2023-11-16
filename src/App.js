import logo from './logo.svg';
import './App.css';
import Employee from './Employee/employee';
import Filter from './Filter/filter';
import { useEffect, useState } from 'react';

function App() {
  const [empList, setEmpList] = useState([])
  const [originalList, setOriginalList] = useState([])

  const [filterData, setFilterData] = useState(
    {
      EMPLOYEE_ID: "",
      FIRST_NAME: "",
      LAST_NAME: "",
      EMAIL: "",
      DEPARTMENT: ""
    }
  )

  useEffect(() => {
    initialLoad()
  }, [])

  function initialLoad() {
    let temp = [
      {
        "EMPLOYEE_ID": "198",
        "FIRST_NAME": "Donald",
        "LAST_NAME": "OConnell",
        "EMAIL": "DOCONNEL",
        "DEPARTMENT": "50"
      },
      {
        "EMPLOYEE_ID": "199",
        "FIRST_NAME": "Douglas",
        "LAST_NAME": "Grant",
        "DEPARTMENT": "50"
      },
      {
        "EMPLOYEE_ID": "200",
        "FIRST_NAME": "Jennifer",
        "LAST_NAME": "Whalen",
        "DEPARTMENT": "PROD"
      },
      {
        "EMPLOYEE_ID": "201",
        "FIRST_NAME": "Michael",
        "LAST_NAME": "Hartstein",
        "DEPARTMENT": "PROD"
      },
      {
        "EMPLOYEE_ID": "202",
        "FIRST_NAME": "Pat",
        "LAST_NAME": "Fay",
        "DEPARTMENT": "PROD"
      }
    ]
    setEmpList(temp)
    setOriginalList(temp)
  }

  return (
    <div className="app_container">
      <br />
      <div className='heading'>Employee Data</div>
      <br />
      <Filter originalList={originalList} empList={empList} setEmpList={setEmpList} filterData={filterData} setFilterData={setFilterData}></Filter>
      <br />
      <Employee empList={empList}></Employee>
    </div>
  );
}

export default App;
