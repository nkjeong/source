"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const NavigationModule = {
        navItems: ['Home', 'Nav1', 'Nav2', 'Nav3'],
        selector: "ul.first-nav",

        generateNavHTML() {
            return this.navItems.map(item => `<li>${item}</li>`).join("");
        },

        render(direction = 'horizontal') {
            const navWrapper = document.querySelector(this.selector);
            const header = document.querySelector('header');

            if (!navWrapper || !header) return;

            // 기존 클래스 제거
            navWrapper.classList.remove('horizontal', 'vertical');
            header.classList.remove('horizontal', 'vertical');

            // 새로운 방향 설정
            navWrapper.classList.add(direction);
            header.classList.add(direction);

            // 네비게이션 렌더링
            navWrapper.innerHTML = this.generateNavHTML();
        }
    };

    // vertical(세로) 또는 horizontal(가로) 설정 가능
    NavigationModule.render('horizontal');
});