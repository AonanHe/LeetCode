# Problem: Delete Duplicate Emails
# Difficulty: Easy
# Runtime: 432 ms
# Date: 2018/05/01
# Author: Aonan He

# Write your MySQL query statement below
DELETE FROM Person WHERE Email IN (SELECT * FROM (SELECT Email FROM Person GROUP BY Email HAVING COUNT(Email) > 1) AS P1) AND Id NOT IN (SELECT * FROM (SELECT Min(Id) FROM Person GROUP BY Email HAVING COUNT(Email) > 1) AS P2);