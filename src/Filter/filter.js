import { useState } from 'react';
import './filter.css';

export default function Filter(props) {
    function getUniqValue(key) {
        return [...new Set(props.originalList.map(a => a[key]))];
    }
    function setValue(key, value) {
        let tmp = Object.assign({}, props.filterData)
        tmp[key] = value
        props.setFilterData(tmp)
    }
    function resetFunction() {
        props.setFilterData({
            EMPLOYEE_ID: "",
            FIRST_NAME: "",
            LAST_NAME: "",
            EMAIL: "",
            DEPARTMENT: ""
        })
        props.setEmpList(props.originalList)
    }
    function filterList() {
        let filteresData = [...props.originalList]
        Object.keys(props.filterData).forEach(key => {
            filteresData = filteresData.filter(a => { return a[key] == props.filterData[key] || props.filterData[key] == "" })
        })
        props.setEmpList(filteresData)
    }
    return (
        <div className="filter_container">
            <div className='heading'>
                Filter:
            </div>
            <div className='select_tag'>
                <div className='filter_title'>Employee ID</div>
                <select value={props?.filterData?.EMPLOYEE_ID} onChange={(e) => { setValue("EMPLOYEE_ID", e.target.value) }}>
                    <option value={""}>
                        ALL
                    </option>
                    {getUniqValue("EMPLOYEE_ID").map((item, index) => (<option key={index} value={item}>
                        {item}
                    </option>))}
                </select>
            </div>
            <div className='select_tag'>
                <div className='filter_title'>First Name</div>
                <select value={props?.filterData?.FIRST_NAME} onChange={(e) => { setValue("FIRST_NAME", e.target.value) }}>
                    <option value={""}>
                        ALL
                    </option>
                    {getUniqValue("FIRST_NAME").map((item, index) => (<option key={index} value={item}>
                        {item}
                    </option>))}
                </select>
            </div>

            <div className='select_tag'>
                <div className='filter_title'>Last Name</div>
                <select value={props?.filterData?.LAST_NAME} onChange={(e) => { setValue("LAST_NAME", e.target.value) }}>
                    <option value={""}>
                        ALL
                    </option>
                    {getUniqValue("LAST_NAME").map((item, index) => (<option key={index} value={item}>
                        {item}
                    </option>))}
                </select>
            </div>
            <div className='select_tag'>
                <div className='filter_title'>Department</div>
                <select value={props?.filterData?.DEPARTMENT} onChange={(e) => { setValue("DEPARTMENT", e.target.value) }}>
                    <option value={""}>
                        ALL
                    </option>
                    {getUniqValue("DEPARTMENT").map((item, index) => (<option key={index} value={item}>
                        {item}
                    </option>))}
                </select>
            </div>
            <div className='button_area'>
                <button className='filter_btn' onClick={filterList}>Filter</button>
                <button className='reset_btn' onClick={resetFunction}>Reset</button>
            </div>

        </div>
    );
}

