"use strict";var App={init:function e(){this.showMenu(),this.hideMenu()},showMenu:function e(){var n=document.querySelector(".menu-btn"),t=document.querySelector(".menu"),s=document.querySelector(".grid");n&&t&&n.addEventListener("click",function(){n.classList.add("is-open"),t.classList.add("is-open"),s.classList.add("menu-open")})},hideMenu:function e(){var n=document.querySelector(".menu-btn"),t=document.querySelector(".menu"),s=document.querySelector(".grid");n&&t&&s.addEventListener("click",function(e){s.classList.contains("menu-open")&&(e.target.classList.contains("grid")||e.target.classList.contains("list"))&&(n.classList.remove("is-open"),t.classList.remove("is-open"),s.classList.remove("menu-open"))})}};App.init();
//# sourceMappingURL=./app.min.js.map