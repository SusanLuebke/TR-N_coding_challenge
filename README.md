# codingChallenge
TR-N Coding Challenge / Mars Rover Kata

- A squad of robotic rovers by NASA are set to land on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can obtain a complete view of the surrounding terrain to send back to Earth. 

- A rover's position is represented as [0, 0], 'N'; which is defined as the bottom left corner of the rectangular plateau, facing north. Compass directions may be 'N', 'E', 'W', 'S'; north, east, west, south respectively.  

- Rover movement is determined by a string: 'L', 'R' or 'M.'
'L' and 'R' spin the rover 90 degrees without movement, whereas 'M' moves the rover forward one grid point while maintaining the same direction.

- Assume the square directly North from (x, y) is (x, y+1).

- The output for each rover should be its final co-ordinates and heading.

Input required / Unit testing framework / TDD approach (red, green, refactor)

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
Future considerations may include, but are not limited to:
- Input caputure for accessibility considerations (collect helpful user data, to determine most likely presets for future updates)
- Expand obstacle detection and avoidance capabilities of defunct rovers, rocks, canyons, etc.
- Informational chatbot (to provide educational information about the rover, region, data collected, signs of microbial life, how to become involved/support, suggested names for the next rover, etc.)
    - Example: "You've encountered the Valles Marineris, a system of canyons 2,500 miles long; 3x deeper than the Grand Canyon in Arizona! You'll need to choose a new path."
- Input option for x, y coordinates to receive back an image of that exact location
    - Example: "You are here!"
    - Source: NASA, "Ingenuity Looks West", taken May 22, 2021

<p align="center">
  <img width="460" height="300" src="Documents\NASA_Ingenuity_Looks_West_PIA24600.png" alt="NASA Ingenuity Looks West">
</p>


## Project Status
Additional beyond scope features include:
- Handles edge cases for sphere simulation
- Handles the input of x, y coordinates and direction rather than static starting point of [0, 0], 'N'
- Refactored with forEach for dry code
- Added cursory bones of obstacle function for future consideration

## Contributing

As this exercise is a technical test for employment, the project is currently not open to contributions.

## License
[MIT](https://choosealicense.com/licenses/mit/)
