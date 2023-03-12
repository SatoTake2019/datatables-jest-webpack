import { readFileSync } from "fs";
import { initTable } from "../index";


describe("test Datatable initialization", () => {
    beforeEach(() => {
        document.body.innerHTML = readFileSync("__tests__/example.html", { encoding: "utf-8" });
    });
    test("make sure rowReorder extension is loaded", () => {

        const table = initTable();

        // if exist table Api Object & rowReorder 
        expect(table).not.toBeUndefined();
        expect(table.hasOwnProperty("rowReorder")).toBeTruthy();
    });
    test("confirm response to each event", async () => {
        /**
         * このテストでは、mousedown, mousemove, mouseup それぞれ単体のイベントに対して、
         * dataTables.rowReorder.js内のコールバックが作動することを確認し、
         * 下記テスト中にも、'pre-row-reorder', 'row-reorder'のイベントリスナーを設置して、
         * それが反応することをここのイベントごとに確認するところまでテストした。
         * 
         * しかし、jest, jsdomの環境では、ドラッグアンドドロップで、要素を移動するようなテストまでは、マウスイベントで
         * 再現できないようだ。やるとすれば、モックを作成することになるが、画面や表の行の要素へ幅と高さを導入する
         * 必要があるので、かなり面倒な実装になるようだ。それぐらいなら、Django上でseleniumによるテストでドラッグアンドドロップを
         * テストした方が、簡単だと思う。
         * 
         * jsdomには、画面の２次元の距離情報を扱っていないので、クリックした（x、ｙ）座標を使うことができない。
         *      https://github.com/jsdom/jsdom/issues/1435
         * 
         */
        const datatable = initTable();

        const $ = require('jquery');
        const mockInnerPre = jest.fn((e) => {console.log(`"pre-row-reorder" event fired!!!: ${e.type}`);});
        const mockInnerRowReorder = jest.fn((e) => {console.log(`"row-reorder" callback function is called!!!: ${e.type}`);});

        /**
         * 下記個々のマウスイベントには反応しているが、addEventListenerでは、
         * row-reorderイベントに反応しなかったので、
         *      （反応なし）document.addEventListener("row-reorder", mockInnerRowReorder, false);
         * マニュアル通りの jQuery式の書き方を試してみる。
         */
        datatable.on( 'pre-row-reorder', function ( e, node, index ) {
            mockInnerPre(e);
            console.log( 'Row reorder started: ', node, index );
        } );
        datatable.on( 'row-reorder', function ( e, diff, edit ) {
            mockInnerRowReorder(e);
            for ( var i=0, ien=diff.length ; i<ien ; i++ ) {
                $(diff[i].node).addClass("reordered");
            }
        } );

        require('../dataTables.rowReorder.js');  // was copied inside of this project and modified import statements
        const spyMouseDown = jest.spyOn($.fn.dataTable.RowReorder.prototype, "_mouseDown");
        const spyMouseMove = jest.spyOn($.fn.dataTable.RowReorder.prototype, "_mouseMove");
        const spyMouseUp = jest.spyOn($.fn.dataTable.RowReorder.prototype, "_mouseUp");

        const td_1_1 = document.querySelector('td:first-child');  // first td, not th
        const td_2_1 = td_1_1.parentElement.nextElementSibling.firstElementChild
        td_1_1.dispatchEvent(new MouseEvent("mousedown", {"bubbles": true}));

        expect(spyMouseDown).toHaveBeenCalledTimes(1);
        expect(td_1_1.parentElement.classList.value).toContain('dt-rowReorder-moving');
        expect(document.body.classList.value).toBe('dt-rowReorder-noOverflow');
        expect(mockInnerPre).toHaveBeenCalledTimes(1);
        td_2_1.dispatchEvent(new MouseEvent("mousemove", {"bubbles": true}));

        expect(spyMouseMove).toHaveBeenCalledTimes(1);
        td_2_1.dispatchEvent(new MouseEvent("mouseup", {"bubbles": true}));

        expect(spyMouseUp).toHaveBeenCalledTimes(1);
        expect(mockInnerRowReorder).toHaveBeenCalledTimes(1);
    });


    

    

});
