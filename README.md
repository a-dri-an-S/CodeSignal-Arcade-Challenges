# CodeSignal Arcade Challenges

## 1. add

Wrote function to return the sum of two parameters

## 2. centuryFromYear

This function returns the century a given year is in. It takes the year and divides it by 100. Then it rounds it up and returns the century as a number. 

## 3. checkPalindrome

Function takes a string, splits into single characters in an array, reverses and the adds characters back into a single string. That string is then checked to see if it is an exact copy of the original string. If they are exact, it returns true, else it returns false. 

## 4. adjacentElementsProduct

Function takes an array and loops through the an array of integers. Each loop takes integer [i] and integer [i + 1] (integer to the right), multiplies it and checks to see if it is larger than then the previous product. Once loop is complete, it returns the largest product based on adjacent elements in the array.

## 5. shapeArea

Function finds the area of a polygon that multiplies by adding to its rim. To find the area, add the area of the previous polygon area (n -1) ^ 2 with the area that surrounds its rim n ^ 2.

## 6. makeArrayConsecutive2

Function subtracts smallest statue height by the tallest, takes the remainder and subtracts that out of the # of statues in the array. The remaining number is the minimum amount of status needed to fill in the gaps to order the statues from shortest to largest by factor of 1. 

## 7. almostIncreasingSequence


## 8. matrixElementsSum

## 9. allLongestStrings

Function finds the longest string and created new array populated with longest strings. For loop is used to iterate through array and find longest character string by checking if string length is larger than previous string. Once longest string is found, it is filtered into new array by string length.

## 10. commonCharacterCount

Function finds common characters between two strings and returns the count. Breaks string into arrays, for loop is used to iterate through string 1 to find common character in string 2. When common character found, count is incremented by 1 and character is deleted from str 2 to avoid duplicate counts. 

## 11. isLucky

Function sums first half of an integer and compares it with the sum of the second half and checks if sums are equal(true) or not (false). Function takes the integer and finds the half way point (number of digits / 2), turns integer into array of separate characters. Splice method was used to extract 1st half of array as its sum and checks it against the sum of the second half of the array. 

