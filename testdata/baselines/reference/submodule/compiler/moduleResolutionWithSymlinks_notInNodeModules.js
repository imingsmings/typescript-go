//// [tests/cases/compiler/moduleResolutionWithSymlinks_notInNodeModules.ts] ////

//// [abc.ts]
export const x = 0;

//// [app.ts]
import { x } from "./shared/abc";
import { x as x2 } from "./shared2/abc";
x + x2;


//// [/src/bin/app.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abc_1 = require("./shared/abc");
const abc_2 = require("./shared2/abc");
abc_1.x + abc_2.x;
