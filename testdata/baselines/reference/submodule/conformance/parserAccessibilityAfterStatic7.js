//// [tests/cases/conformance/parser/ecmascript5/ErrorRecovery/AccessibilityAfterStatic/parserAccessibilityAfterStatic7.ts] ////

//// [parserAccessibilityAfterStatic7.ts]
class Outer
{
static public intI() {}
}


//// [parserAccessibilityAfterStatic7.js]
class Outer {
    static intI() { }
}
