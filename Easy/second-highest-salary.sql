# Problem: Second Highest Salary
# Difficulty: Easy
# Runtime: 128 ms
# Date: 2018/04/26
# Author: Aonan He

# Write your MySQL query statement below
SELECT MAX(Salary) AS SecondHighestSalary FROM Employee WHERE Salary < (SELECT MAX(Salary) FROM Employee);