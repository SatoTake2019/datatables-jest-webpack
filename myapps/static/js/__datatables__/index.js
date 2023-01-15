import DataTable from "datatables.net-bs5";

// export is for test
export function initTable() {
    let table = new DataTable('#example', {paging: false});
    return table;
}
document.addEventListener('DOMContentLoaded', function () {
    let table = initTable();
});
