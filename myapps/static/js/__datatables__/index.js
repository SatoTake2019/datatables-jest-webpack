import DataTable from "datatables.net-bs5";

// export is for test
export function initTable() {
    let table;
    const options = { paging: false };

    if (globalThis.hasOwnProperty('test')) {
        /*
            This initialization expression passes Jest unit tests,
            but webpack-built bundle file gives an error in the browser.
         */
        let DataTableFunc = new DataTable(null, null);
        table = DataTableFunc.Api('#example', options);
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
