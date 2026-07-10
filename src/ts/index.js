// headerアイコン取得
const openMenu = document.getElementById("js-header_navIcon");
if (openMenu) {
    openMenu.addEventListener('click', (event) => {
        if (openMenu && openMenu.classList.contains('js-active')) {
            openMenu.classList.remove("js-active");
        }
        else {
            openMenu.classList.add("js-active");
        }
    });
}
const menuLink = document.getElementById("js-header_navLink");
// 子要素を取得
if (menuLink) {
    const menuLinkBtn = menuLink.querySelectorAll('.js-header-navLink');
    for (const menuLinkBtnitem of menuLinkBtn) {
        menuLinkBtnitem.addEventListener('click', (event) => {
            if (openMenu && openMenu.classList.contains('js-active')) {
                openMenu.classList.remove("js-active");
            }
        });
    }
}
// スクロールでクラスを追加
const fadeInTextTarget = document.querySelectorAll(".js-fadeIn");
window.addEventListener("scroll", () => {
    fadeInTextTarget.forEach((item) => {
        const textPosition = item.getBoundingClientRect();
        if (textPosition.top < window.innerHeight * 0.8) {
            item.classList.add("js-active");
        }
    });
});
// ページ読み込みでクラスを追加
const fadeInTextTargetOpen = document.querySelectorAll(".js-fadeInOpen");
window.addEventListener("DOMContentLoaded", () => {
    fadeInTextTargetOpen.forEach((item) => {
        if (item) {
            item.classList.add("js-active");
        }
    });
});
const changelogData = [
    {
        time1: "2026",
        time2: "06",
        time3: "21",
        text: "ポートフォリオサイト作成開始"
    },
    {
        time1: "2026",
        time2: "06",
        time3: "28",
        text: "TOPページのHTML/CSS作成。SPメニューなど一部js追加"
    },
    {
        time1: "2026",
        time2: "06",
        time3: "30",
        text: "GitHub Pagesでサイト公開"
    },
    {
        time1: "2026",
        time2: "07",
        time3: "10",
        text: "スクロールアニメーション追加"
    }
];
const changelogList = document.querySelector("#js-topPage_changelog");
if (changelogList) {
    changelogData.forEach((logData) => {
        const changelogText = document.createElement("li");
        changelogText.innerHTML = `
        <time datetime="${logData.time1}-${logData.time2}-${logData.time3}">${logData.time1}.${logData.time2}.${logData.time3}</time>
        <p>${logData.text}</p>
        `;
        changelogList.appendChild(changelogText);
    });
}
const GalleryData = [
    {
        src: "src/img/illust_01.png"
    },
    {
        src: "src/img/illust_02.png"
    },
    {
        src: "src/img/illust_03.png"
    },
    {
        src: "src/img/illust_13.jpg"
    },
    {
        src: "src/img/illust_12.jpg"
    },
    {
        src: "src/img/illust_06.png"
    },
    {
        src: "src/img/illust_07.png"
    }
];
const GalleryList = document.querySelector("#js-modal");
if (GalleryList) {
    GalleryData.forEach((imgData) => {
        const GalleryBtn = document.createElement("li");
        GalleryBtn.classList.add("js-modalItem");
        GalleryBtn.innerHTML = `
            <div class="topPage_gallery_img"><img src="${imgData.src}" alt=""></div>
        `;
        GalleryList.appendChild(GalleryBtn);
    });
}
// モーダルを開く
const modal = document.getElementById("js-modal");
// // 子要素を取得
if (modal) {
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
                if (modalFlame) {
                    modalFlame.classList.add("js-active");
                }
            }
        });
    }
    // // モーダルを閉じる
    if (modalFlame) {
        modalFlame.addEventListener('click', (event) => {
            if (modalFlame && modalFlame.classList.contains('js-active')) {
                modalFlame.classList.remove("js-active");
            }
            else {
                // modalFlame.classList.add("js-active");
            }
        });
    }
}
export {};
//# sourceMappingURL=index.js.map