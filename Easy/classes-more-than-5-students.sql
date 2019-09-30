# Problem: Classes More Than 5 Students
# Difficulty: Easy
# Runtime: 188 ms
# Date: 2019/09/30
# Author: Aonan He

# Write your MySQL query statement below
SELECT class FROM courses GROUP BY class HAVING COUNT(DISTINCT student) >= 5