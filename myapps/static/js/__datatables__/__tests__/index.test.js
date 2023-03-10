import { readFileSync } from "fs";
import { initTable } from "../index";


describe("test Datatable initialization", () => {
    beforeEach(() => {
        document.body.innerHTML = readFileSync("__tests__/example.html", { encoding: "utf-8" });
    });
    test("test one module", () => {

        const table = initTable();

        expect(table).not.toBeUndefined();


        const table_element = document.getElementById('example');
    });
});
