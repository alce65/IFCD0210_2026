import { describe, test, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { Circle, Rectangle, Square, Triangle } from "./shapes.implements.ts";

describe("Con un rectángulo de base 3 y altura 4", () => {
    let shape: Rectangle;
    beforeEach(() => {
        // Arrange
        const base = 3;
        const hight = 4;
        shape = new Rectangle(base, hight, "rojo");
    });
    test("El area es 12", () => {
        // Act
        const area = shape.calculateArea();
        // Assert
        assert.equal(area, 12);
    });
    test("El perírmetro es 14", () => {
        // Act
        const perimeter = shape.calculatePerimeter();
        // Assert
        assert.equal(perimeter, 14);
    });
});

describe("Con un cuadrado de lado 3", () => {
    let shape: Square;
    beforeEach(() => {
        // Arrange
        const side = 3;
        shape = new Square(side, "rojo");
    });
    test("El area es 9", () => {
        // Act
        const area = shape.calculateArea();
        // Assert
        assert.equal(area, 9);
    });
    test("El perírmetro es 12", () => {
        // Act
        const perimeter = shape.calculatePerimeter();
        // Assert
        assert.equal(perimeter, 12);
    });
});

describe("Con un círculo de radio 3", () => {
    let shape: Circle;
    beforeEach(() => {
        // Arrange
        const radio = 3;
        shape = new Circle(radio, "rojo");
    });
    test("El area es 28 y pico", () => {
        // Act
        const area = shape.calculateArea();
        // Assert
        assert.equal(Math.round(area), 28);
    });
    test("El perírmetro es 19 y pico", () => {
        // Act
        const perimeter = shape.calculatePerimeter();
        // Assert
        assert.equal(Math.round(perimeter), 19);
    });
});

describe("Con un triangulo de lados 3, 3, 3 y altura 3", () => {
    let shape: Triangle;
    beforeEach(() => {
        // Arrange
        const base = 3;
        const hight = 3
        const sides: [number, number] = [3,3]
        shape = new Triangle(base, hight, sides, "rojo");
    });
    test("El area es 4.5", () => {
        // Act
        const area = shape.calculateArea();
        // Assert
        assert.equal(area, 4.5);
    });
    test("El perírmetro es 9", () => {
        // Act
        const perimeter = shape.calculatePerimeter();
        // Assert
        assert.equal(perimeter, 9);
    });
});
