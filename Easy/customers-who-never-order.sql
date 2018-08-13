# Problem: Customers Who Never Order
# Difficulty: Easy
# Runtime: 281 ms
# Date: 2018/04/29
# Author: Aonan He

# Write your MySQL query statement below
SELECT Name AS Customers FROM Customers where (SELECT COUNT(*) FROM Orders WHERE Customers.Id = Orders.CustomerId) = 0;