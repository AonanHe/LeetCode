# Problem: Swap Salary
# Difficulty: Easy
# Runtime: 154 ms
# Date: 2019/10/01
# Author: Aonan He

# Write your MySQL query statement below
UPDATE salary
SET
    sex = CASE sex
        WHEN 'm' THEN 'f'
        ELSE 'm'
    END