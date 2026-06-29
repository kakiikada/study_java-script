// headerアイコン取得
const openMenu = document.getElementById("js-header_navIcon");
openMenu.addEventListener('click', (event) => {
    if (openMenu && openMenu.classList.contains('js-active')) {
        openMenu.classList.remove("js-active");
    }
    else {
        openMenu.classList.add("js-active");
    }
});
const menuLink = document.getElementById("js-header_navLink");
// 子要素を取得
const menuLinkBtn = menuLink.querySelectorAll('.js-header-navLink');
for (const menuLinkBtnitem of menuLinkBtn) {
    menuLinkBtnitem.addEventListener('click', (event) => {
        if (openMenu && openMenu.classList.contains('js-active')) {
            openMenu.classList.remove("js-active");
        }
    });
}
// モーダルを開く
const modal = document.getElementById("js-modal");
// 子要素を取得
const modalBtn = modal.querySelectorAll('.js-modalItem');
const modalFlame = document.getElementById("js-modalFlame");
for (const modalItem of modalBtn) {
    modalItem.addEventListener('click', (event) => {
        if (modalFlame && modalFlame.classList.contains('js-active')) {
            // modalFlame.classList.remove("js-active");
        }
        else {
            const modalImgSrc = modalItem.querySelector('img');
            if (modalImgSrc) {
                // 画像要素の取得
                const modalFlameImg = document.getElementById('js-modalFlameImg');
                // srcを新しいURLやパスに置き換える
                if (modalFlameImg) {
                    modalFlameImg.src = modalImgSrc.src;
                }
            }
            modalFlame.classList.add("js-active");
        }
    });
}
// モーダルを閉じる
// ×ボタン
// const modalClose = document.getElementById("js-modalFlame_close"); 
//     modalClose.addEventListener('click', (event: MouseEvent) => {
//     if(modalFlame && modalFlame.classList.contains('js-active')){
//                 modalFlame.classList.remove("js-active");
//     } else{
//         modalFlame.classList.add("js-active");
//     }
// });
modalFlame.addEventListener('click', (event) => {
    if (modalFlame && modalFlame.classList.contains('js-active')) {
        modalFlame.classList.remove("js-active");
    }
    else {
        // modalFlame.classList.add("js-active");
    }
});
export {};
//# sourceMappingURL=index.js.map