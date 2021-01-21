# Weather-Dashboard
[Introduction](#Introduction)


[Prerequisites](#Prerequisites)

[Installation](#Installation)

[Summary](#Summary)

[Psuedo code](#Psuedo-code)

[Author](#Author)


## Introduction

The Weather-Dashboard: AS part of the program this assignment is to use a HTML, CSS, Javascript, JQuery etc to program a Weather-Dashboard to add events and store in a localStorage and show the Weather for the current date and the weather forcast for five days. Differentiating the UVIndex with favourable, moderate and extreme conditions with colurs as favourable(yellow), moderate(green) and extreme (red).

## Prerequisites
To program and write code you need a text editor. Visual Studio Code is the best option to choose.

This assignment project has been delpoyed to Githubpages. To use this project, project link [Link to Github](https://github.com/netsy001/Theworkdayscheduler)

## Installation

To install the code you can clone it at github repository using github guidelines.

## Summary

This project includes four files:- 

`index.html` 

`script.js`

`style.css`

`README.md`

`assets`

These files include all the code and information of this assignment project and the screenshot images of the responsive are included in assets.

## Psuedo code
### HTML
In the HTML div tags are used to seperate the current and the five day forecast..
input to get the input for the city name and to show the city wweather conditions for the current and for five days. Search button to add event on click and display weather conditions.

1. moment.js is used to get the time format which is most recomended for the best output to get time and date.
2. ``` $.ajax({url: method:"get"})``` is used to call APi and use API to get weather conditions.
3. ``.forEach`` to itterate via datalist.

4. ```if (result.value <= 2) {
                        $(".uvI").html("UV Index: " + uvindex).css('color', 'yellow');
                    }
                    else if (result.value > 2 && result.value <= 7) {
                        $(".uvI").html("UV Index: " + uvindex).css('color', 'green');
                    }
                    else if (result.value > 7) {
                        $(".uvI").html("UV Index: " + uvindex).css('color', 'red');
                    }``` 
                     Differentiating the UVIndex with favourable, moderate and extreme conditions with colurs as favourable(yellow), moderate(green) and extreme (red).

5. ```&units=imperial``` is used to get temperatures fahrenheits.

Execution: Open in browser

## Author
Surendra Choudary Nettam
