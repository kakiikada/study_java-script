// headerアイコン取得
const openMenu = document.getElementById("js-header_navIcon"); 
openMenu.addEventListener('click', (event: MouseEvent) => {
    if(openMenu && openMenu.classList.contains('js-active')){
        openMenu.classList.remove("js-active");
    }else{
        openMenu.classList.add("js-active");
    }
});

const menuLink = document.getElementById("js-header_navLink"); 
// 子要素を取得
const menuLinkBtn = menuLink.querySelectorAll<HTMLElement>('.js-header-navLink');
for (const menuLinkBtnitem of menuLinkBtn) {
    menuLinkBtnitem.addEventListener('click', (event: MouseEvent) => {
        if(openMenu && openMenu.classList.contains('js-active')){
            openMenu.classList.remove("js-active");
        }
    });
}

// Top 変更履歴
type Changelog = {
    time1: string;
    time2: string;
    time3: string;
    text: string; 
};

const changelogData: Changelog[] = [
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
    }
];

const changelogList = document.querySelector<HTMLUListElement>("#js-topPage_changelog");
if(changelogList) {
    changelogData. forEach((logData) => {
        const changelogText = document.createElement("li");
        changelogText.innerHTML = `
        <time datetime="${logData.time1}-${logData.time2}-${logData.time3}">${logData.time1}.${logData.time2}.${logData.time3}</time>
        <p>${logData.text}</p>
        `
        changelogList.appendChild(changelogText);
    });
}

// TOP ギャラリー
type Gallery = {
    src: string;
};

const GalleryData: Gallery[] = [
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

const GalleryList = document.querySelector<HTMLUListElement>("#js-modal");
if(GalleryList) {
    GalleryData. forEach((imgData) => {
        const GalleryBtn= document.createElement("li");
        GalleryBtn.classList.add("js-modalItem");
        GalleryBtn.innerHTML = `
            <div class="topPage_gallery_img"><img src="${imgData.src}" alt=""></div>
        `
        GalleryList.appendChild(GalleryBtn);
    });
}

// モーダルを開く
const modal = document.getElementById("js-modal"); 
// // 子要素を取得
const modalBtn = modal.querySelectorAll<HTMLElement>('.js-modalItem');
const modalFlame = document.getElementById("js-modalFlame"); 
for (const modalItem  of modalBtn ) {
     modalItem.addEventListener('click', (event: MouseEvent) => {
        if(modalFlame && modalFlame.classList.contains('js-active')){
            // modalFlame.classList.remove("js-active");
        } else{
            const modalImgSrc = modalItem.querySelector<HTMLImageElement>('img');
            if (modalImgSrc) {
                // 画像要素の取得
                const modalFlameImg = document.getElementById('js-modalFlameImg') as HTMLImageElement;
                // srcを新しいURLやパスに置き換える
                if (modalFlameImg) {
                modalFlameImg.src = modalImgSrc.src;
                }
            }
            modalFlame.classList.add("js-active");
        }
    });   
}
// // モーダルを閉じる
    modalFlame.addEventListener('click', (event: MouseEvent) => {
    if(modalFlame && modalFlame.classList.contains('js-active')){
        modalFlame.classList.remove("js-active");
    } else{
        // modalFlame.classList.add("js-active");
    }
});


