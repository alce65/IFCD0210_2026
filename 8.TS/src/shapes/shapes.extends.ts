abstract class Shape {
    color: string;
    constructor(color: string) {
        this.color = color;
    }

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
}

export class Rectangle extends Shape {
    base: number;
    hight: number;

    constructor(base: number, hight: number, color: string) {
        super(color);
        this.base = base;
        this.hight = hight;
    }
    calculateArea(): number {
        return this.base * this.hight;
    }
    calculatePerimeter(): number {
        return this.base * 2 + this.hight * 2;
    }
}

export class Square extends Shape {
    side: number;
    constructor(side: number, color: string) {
        super(color);
        this.side = side;
    }
    calculateArea(): number {
        return this.side ** 2;
    }
    calculatePerimeter(): number {
        return this.side * 4;
    }
}

export class Circle extends Shape {
    radio: number;
    constructor(radio: number, color: string) {
        super(color);
        this.radio = radio;
    }
    calculateArea(): number {
        return Math.PI * this.radio ** 2;
    }
    calculatePerimeter(): number {
        return Math.PI * this.radio * 2;
    }
}

export class Triangle extends Shape {
    base: number;
    hight: number;
    sides: [number, number];

    constructor(
        base: number,
        hight: number,
        sides: [number, number],
        color: string,
    ) {
        super(color);
        this.base = base;
        this.hight = hight;
        this.sides = sides;
    }
    calculateArea(): number {
        return (this.base * this.hight) / 2;
    }
    calculatePerimeter(): number {
        return this.base + this.sides.reduce((p, c) => p + c);
    }
}
