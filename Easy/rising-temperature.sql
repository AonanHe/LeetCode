# Problem: Rising Temperature
# Difficulty: Easy
# Runtime: 324 ms
# Date: 2018/05/02
# Author: Aonan He

# Write your MySQL query statement below
SELECT W1.Id FROM Weather W1, Weather W2 WHERE W1.Temperature > W2.Temperature AND DATEDIFF(W1.RecordDate, W2.RecordDate) = 1;