// import {jest} from '@jest/globals';
import { initTable } from "../index";

describe("test Datatable initialization", () => {
    test("test one module", () => {
        document.addEventListener('DOMContentLoaded', function () {
            let table = initTable();
        });

        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
    });
});
