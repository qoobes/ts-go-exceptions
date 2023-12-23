"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleException = void 0;
const handleException = (promise) => promise
    .then(data => [data, null])
    .catch(error => [null, error]);
exports.handleException = handleException;
//# sourceMappingURL=index.js.map