import b, { namedExport, unusedExport } from "./b"; // eslint-disable-line no-unused-vars
import { exportA, exportB } from "./c";

console.log(b, namedExport, exportA, exportB);
