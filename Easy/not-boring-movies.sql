# Problem: Not Boring Movies
# Difficulty: Easy
# Runtime: 119 ms
# Date: 2019/10/01
# Author: Aonan He

# Write your MySQL query statement below
SELECT * FROM cinema WHERE MOD(id, 2) = 1 and description != 'boring' ORDER BY rating DESC