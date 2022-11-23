// Write your solution in this file!
const employee = {
    name:'Jared',
    streetAddress:34
};
//Return a clone with the new data without modifying original employee
function updateEmployeeWithKeyAndValue(employee, key, value){
    const employeeRecords = {...employee};
    employeeRecords[key ] = value;
    return employeeRecords;
    }
// Destructively update employee and return updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
// Delete key from employee clone key and return new employee
function deleteFromEmployeeByKey(employee, key){ 
    const newEmployee = {...employee};
        newEmployee[key] = undefined;
    return newEmployee;
}
// Return employee without the deleted key 
//Modify employee
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    
    return employee;
}