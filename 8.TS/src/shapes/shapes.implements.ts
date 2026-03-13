export interface Shape {
    calculateArea(): number;
    calculatePerimeter(): number;
}

export class Rectangle implements Shape {
    base: number;
    hight: number;
    color: string;
    constructor(base: number, hight: number, color: string) {
        this.base = base;
        this.hight = hight;
        this.color = color;
    }
    calculateArea(): number {
        return this.base * this.hight;
    }
    calculatePerimeter(): number {
        return this.base * 2 + this.hight * 2;
    }
}

export class Square implements Shape {
    side: number;
    color: string;
    constructor(side: number, color: string) {
        this.side = side;
          this.color = color;
    }
    calculateArea(): number {
        return this.side ** 2;
    }
    calculatePerimeter(): number {
        return this.side * 4;
    }
}

export class Circle implements Shape {
    radio: number;
    color: string;
    constructor(radio: number, color: string) {
        this.radio = radio;
          this.color = color;
    }
    calculateArea(): number {
        return Math.PI * this.radio ** 2;
    }
    calculatePerimeter(): number {
        return Math.PI * this.radio * 2;
    }
}

export class Triangle implements Shape {
    base: number;
    hight: number;
    sides: [number, number];
    color: string;
    constructor(base: number, hight: number, sides: [number, number], color: string) {
        this.base = base;
        this.hight = hight;
        this.sides = sides;
          this.color = color;
    }
    calculateArea(): number {
        return (this.base * this.hight) / 2;
    }
    calculatePerimeter(): number {
        return this.base + this.sides.reduce((p, c) => p + c);
    }
}
