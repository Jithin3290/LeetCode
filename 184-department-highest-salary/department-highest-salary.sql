-- Write your PostgreSQL query statement below
select Department.name as Department,Employee.name as Employee,Employee.salary as Salary from Employee
join Department
on Department.id = Employee.departmentId
where salary = (select max(salary) from Employee where Department.id = Employee.departmentId)