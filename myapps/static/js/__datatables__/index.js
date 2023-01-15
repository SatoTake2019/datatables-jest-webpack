import DataTable from "datatables.net-bs5";

// export is for test
export function initTable() {
    let DataTableFunc = new DataTable(null, null);
    let table = DataTableFunc.Api('#example', { paging: false});
    return table;
}
document.addEventListener('DOMContentLoaded', function () {
    let table = initTable();
});
