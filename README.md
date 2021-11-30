# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ratul14april/lotide`

**Require it:**

`const _ = require('@ratul14april/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Returns the first element of an array. Returns a string or a number.
* `middle(...)`: Returns the middle element(s) of an array. If the array length is odd, returns only one element as a string or a number. Else returns the central two elements as an array. 
* `tail(...)`: Returns all elements of an array except the first one. Return an array. 