//// [tests/cases/conformance/es6/yieldExpressions/generatorTypeCheck24.ts] ////

//// [generatorTypeCheck24.ts]
class Foo { x: number }
class Bar extends Foo { y: string }
class Baz { z: number }
function* g3() {
    yield;
    yield * [new Foo];
    yield new Bar;
    yield new Baz;
    yield *[new Bar];
    yield *[new Baz];
}

//// [generatorTypeCheck24.js]
class Foo {
    x;
}
class Bar extends Foo {
    y;
}
class Baz {
    z;
}
function* g3() {
    yield;
    yield* [new Foo];
    yield new Bar;
    yield new Baz;
    yield* [new Bar];
    yield* [new Baz];
}
