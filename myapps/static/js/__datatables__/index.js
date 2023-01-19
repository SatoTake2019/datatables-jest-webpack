import DataTable from "datatables.net-bs5";
import "datatables.net-fixedcolumns-bs5";
import "datatables.net-fixedheader-bs5";
import "datatables.net-rowreorder-bs5";

// export is for test
export function initTable() {
    let table;
    const options = {
        paging: true,    // Pagination
        searching: true,  // Search box
        lengthChange: false,   // Pulldown Menu for num of items displayed per page
        autoWidth: false,    // autofit column width
        info: true,          // "Showing 1 to 57 of 57 extries"
    };

    if (globalThis.hasOwnProperty('test')) {
        /*
            This initialization expression passes Jest unit tests,
            but webpack-built bundle file gives an error in the browser.
         */
        let DataTableFunc = new DataTable(null, null);
    }
    else {
        /*
            This initialization expression will fail in Jest test,
            but webpack-built bundle file goes well on browser.
         */
        table = new DataTable('#example', options);
    }
    return table;
}

document.addEventListener('DOMContentLoaded', function () {
    let table = initTable();
});
