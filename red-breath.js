const width = 570;
const height = 570;
const halfWidth = width / 2;
const halfHeight = height / 2;
const spaceOffset = 15;
const finalSizeSmallest = 5;
const finalSizeBiggest = 20;
const finalSizeOffset = finalSizeBiggest - finalSizeSmallest;
const sinDuration = 50;
let distFromZeroToCenter = 0;
let points = [];

function setup() {
    createCanvas(width, height);

    rectMode(CENTER);

    distFromZeroToCenter = dist(0, 0, halfWidth, halfHeight);

    for (let i = 0; i <= width; i += spaceOffset) {
        for (let j = 0; j <= height; j += spaceOffset) {
            let distFromCenter = dist(i, j, halfWidth, halfHeight);

            let ratio = 1 - (distFromCenter / distFromZeroToCenter);

            let finalSize = finalSizeSmallest + (finalSizeOffset * ratio);

            points.push({
                x: i,
                y: j,
                size: 0,
                ratio: ratio,
                sizeModifier: finalSize
            });
        }
    }

    console.info(points);
}

function draw() {
    background(0);

    noStroke();

    for (let point of points) {
        fill(55 + 200 * (1 - point.ratio), 0, 0);
        rect(
            point.x,
            point.y,
            sin(point.size / sinDuration) * point.sizeModifier,
            sin(point.size / sinDuration) * point.sizeModifier
        );
        point.size++;
    }
}
