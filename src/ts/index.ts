// headerアイコン取得
const openMenu = document.getElementById("js-header_navIcon"); 
if(openMenu){
    openMenu.addEventListener('click', (event: MouseEvent) => {
        if(openMenu && openMenu.classList.contains('js-active')){
            openMenu.classList.remove("js-active");
        }else{
            openMenu.classList.add("js-active");
        }
    });
}

const menuLink = document.getElementById("js-header_navLink"); 
// 子要素を取得
if(menuLink){
    const menuLinkBtn = menuLink.querySelectorAll<HTMLElement>('.js-header-navLink');
    for (const menuLinkBtnitem of menuLinkBtn) {
        menuLinkBtnitem.addEventListener('click', (event: MouseEvent) => {
            if(openMenu && openMenu.classList.contains('js-active')){
                openMenu.classList.remove("js-active");
            }
        });
    }
}

// スクロールでクラスを追加
const fadeInTextTarget = document.querySelectorAll<HTMLElement>(".js-fadeIn");
window.addEventListener("scroll", () => {
    fadeInTextTarget.forEach((item) => {
        const textPosition =  item.getBoundingClientRect();
        if (textPosition.top < window.innerHeight * 0.8) {
        item.classList.add("js-active");
      }
    })
});
// ページ読み込みでクラスを追加

const fadeInTextTargetOpen = document.querySelectorAll<HTMLElement>(".js-fadeInOpen");
window.addEventListener("DOMContentLoaded", () => {
    fadeInTextTargetOpen.forEach((item) => {
        if (item) {
            item.classList.add("js-active");
        }
    })
});

// illustrationgallery
// Topのスライダー
const topSlider = document.querySelector<HTMLElement>(".js-topSlider");
if (topSlider){
    let current = 0;
    const updateSlider = () => {
      topSlider.style.transform = `translateX(-${current * 100}%)`;

      topSliderBtn.forEach((btn) => {
          btn.classList.remove("js-active");
      });
      topSliderBtn[current]?.classList.add("js-active");

    };
    const topSliderBtn = document.querySelectorAll<HTMLElement>(".topSliderBtn li");
    // ボタンクリック
    topSliderBtn.forEach((button, index) =>{
        button.addEventListener("click", () =>{
            current = index;
            updateSlider();
            clearInterval(topSliderTimer);   // 今のタイマーを止める
            topSliderAuto();       // 新しく3秒カウント開始
        })
    })
    // 自動再生動再生
    const slideNum = topSliderBtn.length; // ボタンの個数
    let topSliderTimer: number;
    // 自動再生の関数
    const topSliderAuto = () => {
        topSliderTimer = window.setInterval(() => {
            current++;
            if (current >= slideNum) {
                current = 0;
            }
            updateSlider();
        }, 10000); 
    }

    topSliderAuto();
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
    },
    {
        time1: "2026",
        time2: "07",
        time3: "10",
        text: "スクロールアニメーション追加<br>スライダー追加"
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
        src: "../src/img/illust_01.png"
    },
    {
        src: "../src/img/illust_02.png"
    },
    {
        src: "../src/img/illust_03.png"
    },
    {
        src: "../src/img/illust_13.jpg"
    },
    {
        src: "../src/img/illust_12.jpg"
    },
    {
        src: "../src/img/illust_06.png"
    },
    {
        src: "../src/img/illust_07.png"
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
if(modal){
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
                if(modalFlame){
                    modalFlame.classList.add("js-active");
                }
            }
        });   
    }
    // // モーダルを閉じる
    if(modalFlame){
        modalFlame.addEventListener('click', (event: MouseEvent) => {
            if(modalFlame && modalFlame.classList.contains('js-active')){
                modalFlame.classList.remove("js-active");
            } else{
                // modalFlame.classList.add("js-active");
            }
        });
    }
}


