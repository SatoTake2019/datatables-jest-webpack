import fs from "fs";
import { initTable } from "../index";

describe("test Datatable initialization", () => {
    test("test one module", () => {
        // provide an empty implementation for window.alert
        window.alert = () => {};

        document.body.innerHTML = fs.readFileSync(
            __dirname + `/rendered.html`, { encoding: "utf-8" });

        // these elements are not existing before init
        let pagination_elements = document.getElementsByClassName('pagination');
        expect(pagination_elements).toEqual(expect.arrayContaining([]));
        let search_elements = document.getElementById('example_filter');
        expect(search_elements).toBeNull();
        let info_element = document.getElementById('example_info');
        expect(info_element).toBeNull();

        document.addEventListener('DOMContentLoaded', function () {
            let table = initTable();
        });

        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);

        // if options["paging"] = true
        pagination_elements = document.getElementsByClassName('pagination');
        expect(pagination_elements).toBeDefined();
        // if options['searching'] = true
        search_elements = document.getElementById('example_filter');
        expect(search_elements).toBeDefined();
        // if options['info'] = true
        info_element = document.getElementById('example_info');
        expect(info_element.innerHTML).toMatch(/^Showing.*entries/)
    });
});
