# Problem: Valid Phone Numbers
# Difficulty: Easy
# Runtime: 12 ms
# Date: 2018/05/01
# Author: Aonan He

egrep -o "^([0-9]{3}-[0-9]{3}-[0-9]{4})$|^(\([0-9]{3}\) [0-9]{3}-[0-9]{4})$" file.txt