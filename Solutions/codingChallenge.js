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
// rotate, move, execute
// return the command when passed through

class marsRover {
    constructor(position, direction) {
        this.currentPosition_xy = position;
        this.compassPoints = compassPoints;
        this.direction = direction;
    }

    rotate(direction) {
        return "E";

    }
} 









// in order to export
module.exports = {
    marsRover,
};


