# Problem: Big Countries
# Difficulty: Easy
# Runtime: 224 ms
# Date: 2019/09/30
# Author: Aonan He

# Write your MySQL query statement below
SELECT name, population, area FROM World WHERE area > 3000000 OR population > 25000000