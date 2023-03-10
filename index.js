// Write your solution in this file!
const employee = {
    name: "name",
    streetAddress: "",
}
// Jai's work
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = {...employee};
    newObject[key] = value;
    return newObject;
}
//Should solve first issue
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
//should solve second issue - destructively update
function deleteFromEmployeeByKey(employee, key) {
    const deletedObject = {...employee};

    delete deletedObject[key];
    return deletedObject;
}
//this part confused me for a while - key delete
function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
//yay done