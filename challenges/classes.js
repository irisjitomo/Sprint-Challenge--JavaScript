// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attributes){
//     this.length = attributes.length;
//     this.width = attributes.width;
//     this.height = attributes.height;
//   };

class cuboidMaker{
    constructor(attrs){
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
    }
    volume(length, width, height){
        return this.length * this.width * this.height;
    }
    surfaceArea(length, width, height){
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}


//   CuboidMaker.prototype.volume = function(length, width, height){
//     return this.length * this.width * this.height;
//   }

//   CuboidMaker.prototype.surfaceArea = function(length, width, height){
//     console.log(2 * (this.length * this.width + this.length * this.height + this.width * this.height));
//   }

const Cuboid = new cuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(Cuboid.volume()); // 100
console.log(Cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(attrs){
        super(attrs);
    }
    surfaceArea(length) {
        return (Math.pow(6 * this.length, 2))
    };
}

const Cube = new CubeMaker({
    length: 5,
    height: 5,
    width: 5
})

console.log(Cube.volume());
console.log(Cube.surfaceArea());