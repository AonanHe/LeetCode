# Problem: Combine Two Tables
# Difficulty: Easy
# Runtime: 216 ms
# Date: 2018/04/25
# Author: Aonan He

# Write your MySQL query statement below
SELECT FirstName, LastName, City, State FROM Person LEFT OUTER JOIN Address ON Person.PersonId = Address.PersonId;