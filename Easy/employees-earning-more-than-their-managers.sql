# Problem: Employees Earning More Than Their Managers
# Difficulty: Easy
# Runtime: 297 ms
# Date: 2018/04/27
# Author: Aonan He

# Write your MySQL query statement below
SELECT a.Name AS 'Employee' FROM Employee AS a, Employee AS B WHERE a.ManagerId = b.Id AND a.Salary > b.Salary;