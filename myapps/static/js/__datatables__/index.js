import DforJEST from "./datatables.bootstrap5";  // inside my project
import './dataTables.rowReorder';                // inside my project
import DforBROWSER from "datatables.net-bs5";   // from ./node_modules/...
import "datatables.net-rowreorder-bs5";         // from ./node_modules/...

let DataTable;
DataTable = (process.env['NODE_ENV'] === 'test') ? DforJEST : DforBROWSER;

// export for test
export function initTable() {
    const options = {
        rowReorder: {
            snapX: true,        // ドラッグした時に横方向に動かないようにする。
            update: false        //  ドロップした時に、自動再描画する
        },
    };
    let table = new DataTable('#example', options);
    return table;
}

document.addEventListener("DOMContentLoaded", function (event) {
    const datatable = initTable();
    const table_element = document.getElementById('example');
    // So that I can try with DataTable Api on the browser
    table_element.datatable = datatable;
    console.log("Existence check of rowReorder", datatable.rowReorder);
});
