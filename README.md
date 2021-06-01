# codingChallenge
TR-N Coding Challenge / Mars Rover Kata

- A squad of robotic rovers by NASA are set to land on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can obtain a complete view of the surrounding terrain to send back to Earth. 

- A rover's position is represented as [0, 0, N]; which is defined as the bottom left corner of the rectangular plateau, facing north. Compass directions may be 'N', 'E', 'W', 'S'; north, east, west, south respectively.  

- Rover movement is determined by a string: 'L', 'R' or 'M.'
'L' and 'R' spin the rover 90 degrees without movement, whereas 'M' moves the rover forward one grid point while maintaining the same direction.

- Assume the square directly North from (x, y) is (x, y+1).

- The output for each rover should be its final co-ordinates and heading.

Input required / Unit testing framework / TDD approach (red, green, refactor)

## Visuals


## Prerequisites

```javascript
npm >= 6.14.11
```

## Install

```javascript
npm install
```

## Usage

```javascript
npm start
```

## Run Tests

```javascript
npm test
```

## Test Input

```javascript
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

## Expected Output

```javascript
1 3 N
5 1 E
```

## Roadmap

## Project Status

## Contributing

As this exercise is a technical test for employment, the project is private, and not open to contributions.

## License
[MIT](https://choosealicense.com/licenses/mit/)
