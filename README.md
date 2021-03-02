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

## 12. sortByHeight

Function takes an array and sorts non-negative integers into ascending order. First, the array is split into 2 separate arrays, one for trees and the other for peoples heights. Next, it sorts the array of heights into ascending order. Finally, the trees are spliced back in at their original indexes. 

## 13. reverseInParentheses

## 14. alternatingSums

Function takes an array, splits it into two alternating arrays. It starts by iterating through the given array and splitting it up into two arrays by even and odd indexes. Then it returns the sum of each array, separate from each other into a new array with even in index 0 and off at index 1.

## 15. addBorder 

Function takes a given matrix and creates a border of asterisks around it. First, variable is declared that creates the top & bottom borders by taking the length of the string in the array + 2. Function then returns a new array with a new matrix with top and bottom borders hard coded into the array. In the middle, the map method takes the array and appends the asterisks to both ens of the string and spread operator spreads them out individually. 

## 16. areSimilar

## 17. arrayChange

## 18. palindromeRearranging

## 19. areEquallyStrong

Function takes 4 numbers (arm strengths) and compares if first set is equal to second set & if both are equal in strength as individuals, regardless of side. Checks if set 1 sum is equal with set 2 sum & if set 1 right side is equal to set 2 left or right side.

## 20. arrayMaximalAdjacentDifference

Function takes an array and returns the maximal absolute difference between two adjacent elements. It loops through the given array and finds the difference of two adjacent elements and pushes them into a new array. Then it returns the maximal difference, Math.max() + spread operator.

## 21. isIPv4Address

Function takes a string and checks for proper IPv4 naming rules. First, it splits the string into an array and it checks if there are 4 integers in the IP address. Then it loops through the array and checks for the following: if it's a non-integer, leading 0's , no larger than an 8-bit integer and negative integers. If non of those rules are applicable, it returns true. 

## 22. avoidObstacles

## 23.

## 24.

## 25. arrayReplace

Function takes an array and replace a given number with another. Function loops through given array and checks for elemToReplace. If false, pushed integer to new array, but if true, pushes substitutionElem instead of current integer. Return new array with substituted integer.

## 26. evenDigitsOnly

Function takes an integer and checks if all digits are even. First, integer is converted to string and split into individual digits in an array. The map method is to check if single digits are even and creates new array with booleans, reflecting whether digits was even or not. If false is included in array it returns false, else it returns true.

## 27. variableName

Function takes a given variable name and checks if it had been correctly written. Regex is used to include the appropriate characters and the test methods checks whether the string has these characters or not. Returns false if it finds characters not defined in the regular expression.

## 28. alphabeticShift

Function takes a given string and shifts all characters up by 1 in the English alphabet, except "z", which goes back to "a". Function takes string and converts it into any array, bracket notation + spread operator. It then maps through the array incrementing the charCode by 1 and converting it into a "string" via String.fromCharCode(). It joins the array back into a string and replaces the "{" which is right adjacent to "z" and replaces it with "a".

## 29. chessBoardCellColor

## 30. circleOfNumbers

Function finds the radially opposite position of number "first Number" based on second number "n" if it where equally spaced in a circle. Variable "middle" is declared and assigned the dividend of "n", the half way point. If the "firstNumber" is less than the half way point, add "middle" to it, else, subtract the middle to find the radially opposite position.

## 31. depositProfit

Functions takes a (deposit) and increases it each year by a specific (rate), adding to its initial deposit and returns the number of years it takes to reach its (threshold). Function starts by declaring a "savings" variable to store the increase of balance and a "years" variable to store the years. A while loop is used to add the balance increase and year amount until the threshold is met. then the amount of years is returned until the savings is larger than the threshold.

## 32. absoluteValuesSumMinimization

Function takes an array, determines which element is closest to all other values and returns smallest possible answer. A forEach loop iterates through the array finding the absolute sums of differences between each element and pushes them into "res" array. It then finds the lowest possible sum (Math.min()) and returns the number with the smallest possible sum.

## 33. stringsRearrangement

## 34. extractEachKth

Function removes an integer at kth element in array. "newArr" is declared as an empty array to be used to store values that aren't at kth element of array. For loop is used to iterate through array and push elements that aren't in kth element ( i % k !== 0) into "newArr".

## 35. firstDigit

Function finds the leftmost digit in a given string. It takes the input string and uses the match method to find digits via regex and returns the first, leftmost digit.

## 36. differentSymbolsNaive

Function takes a string and finds the number of different characters. new Set() is spread out inside of an array and given the string "s" as an argument which returns one of each character. Length of array is used to return number of different characters. 

## 37. arrayMaxConsecutiveSum

## 38. growingPlant

Function takes a number "desiredHeight", increments & decrements until desired height is reached and returns number of "days" taken to grow. Day and height variable are defined and given values of 0 to each. While loop increments if not at desired height and if the desired height is reached, amount of days spent growing is returned. Else, it decreases and loops through until desired height reached & number days spent growing is returned. 

## 39. knapsackLight

Function returns most valuable item or items, depending on the weight and if either is too heavy, returns 0. First, checks if both weight are less or equal in weight and returns value summed if true. Then it checks if both are too heavy and if true, returns 0. Finally, checks which is most valuable, based on which is heavier and returns the value. 

## 40. longestDigitsPrefix

Function takes string and returns longest prefix containing only digits. Spreads input string into "str" array and also declares variable prefix as an empty array. Loops through array and pushes digits into prefix array until non-digits are introduced that breaks the loop. Prefix array is joined as string and returned as prefix containing digits or " ".

## 41. digitDegree

Function takes a number and returns number of times a number is split and summed together util the sum is a single digit. Variable count tracks number of splits until sum is a single digit. Checks is a single digit and if true, returns count. If false, adds to count, splits number and sums digits together and if a single digit, the loop breaks and count is returned. If false, loop continues to iterate and add count until sum is a single digit. 

## 42. bishopAndPawn

## 43. isBeautifulString

Function takes string and checks for occurrences of each letter and based on alphabetical order, if the letter that precedes the current one has appeared more times, it is considered a beautiful string. First alphabet array is declared and populated with the alphabet via for loop. Then, its checks how many times that letter has occurred and pushes the results into the letters array. Finally, it checks if the current has appeared less then the next, if so it returns false. Otherwise, it returns true. 

## 44 findEmailDomain

Function takes a string (email address) and returns only the domain part. String is spread out into array("arr") and "domain" is declared as an empty array to hold the domain. For loop iterates through array until it reaches the "a" character, where it then slices the remaining elements of the array. Finally, domain array is joined together as a string and returned as the domain of the email address. 

## 45 buildPalindrome

## 46 electionsWinners

Function takes number of current votes casted + pending votes and checks for number of possible winners. "leader" is declared with the value of max votes and "ties" to hold the amount of current ties via for loop, prior to pending votes. Count is declared and holds the value of candidates that have higher votes after votes have been casted in comparison to previous leader. If none have higher counts and there was 1 tie, 1 winner is returned, unless there are more possible candidates, which then the count of possible candidates is returned. 

## 47 isMAC48Address

## 48 isDigit

Function takes a character and checks if it is a digit. Checks if symbol includes a number via .includes and Number(), returns true or false.

## 49 lineEncoding

## 50 chessKnight

## 51 deleteDigit

Function takes a number and returns the largest number obtained by deleting 1 digit. Number is converted to string to iterate through via for loop. Initially, first character is deleted and stored in variable "string". Next, it removes 1 character by concatenating everything around it to each other and checks if largest sum is bigger than that current string that has been parsedInt. Largest sum is then returned. 

## 52 longestWord

Function takes a string and returns the longest substring. It matches a string against a regular expression and splits it into an array of substrings. Loops through array and checks if current string is larger than current largest string, if larger, then it sets it as the longest string. 

## 53 validTime

Function takes a string and checks if it represents military time. It splits string into hours and minutes. It then checks if hours are under 24 & minutes under 60. If true, returns true, else returns false. 

## 54 sumUpNumbers

Function takes a string, extracts the consecutive numbers and returns the sum. inputString is checked with regex matching only digits and creates an array populated my extracted numbers or it creates an empty array. If array has only one number, it returns that number. If array has more than one number, it returns the sum. If array is empty, it returns 0.

## 55 differentSquares

## 56 digitsProduct

## 57 fileNaming

## 58 messageFromBinaryCode

Function takes binary code and converts it into message, string of characters. Takes binary code and breaks it up into 8  bits using regex to match pattern to break up into array at 8 character intervals. Then it maps through binary array and converts into an array of characters by converting to ASCII code -> character and joined into a string to reveal the message.

## 59 spiralNumbers

