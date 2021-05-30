const compassPoints = {
N: {
    L: 'W',
    R: 'E',
    move: (x, y)=>{
    return {x:x, y:y+1};
    },
},
E: {
    L: 'N',
    R: 'S',
    move: (x, y)=>{
    return {x:x+1, y:y};
    },
},
S: {
    L: 'E',
    R: 'W',
    move: (x, y)=>{
    return {x:x, y:y-1};
    },
},
W: {
    L: 'S',
    R: 'N',
    move: (x, y)=>{
    return {x:x-1, y:y};
    },
},
};

// move, direction, possibly track (class structure first, restructure with functional prog)
// classes rover, plateau

class marsRover {
    constructor(gridDimension = 5) {
        this.currentPosition = [0, 0];
        this.compassPoints = ["N", "E", "W", "S"];
        this.direction = "N";

    }
} 









// in order to export
module.exports = {
    marsRover,
};


