let employeDetails=[
    {
        "id":2,
        "Name":"Venky",
        "salary":200
    },
    {
        "id":3,
        "Name":"Raj",
        "salary":300
    },
    {
        "id":4,
        "Name":"Sai",
        "salary":400
    }
]

//Print an array of all employee ids
let arrayOfIDs=employeDetails.map((item)=>item.id);
console.log(arrayOfIDs);

//Print count of employees
let empCOunt=employeDetails.length;
console.log(empCOunt);

//Print the name of the employee according to their id { key: value }
let nameOFEmpID=employeDetails.map(({id,Name})=>({id,Name}))
console.log(nameOFEmpID);

//Store the salaries of all employees in an array

let empSalaries=employeDetails.map((item)=>item.salary)
console.log(empSalaries)

//Calculate the average salary the company is paying to its employees
let avgValue=empSalaries.reduce((sum,num)=>sum+num,0)
console.log(avgValue/empSalaries.length)