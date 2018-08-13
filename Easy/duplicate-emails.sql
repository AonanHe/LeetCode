# Problem: Duplicate Emails
# Difficulty: Easy
# Runtime: 217 ms
# Date: 2018/04/28
# Author: Aonan He

# Write your MySQL query statement below
SELECT Email FROM Person GROUP BY Email HAVING COUNT(*) > 1;