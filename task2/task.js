function menu() {
    const menuBar = Array.from(document.querySelectorAll(".menu__link"));
    for (let i = 0; i < menuBar.length; i++) {
        menuBar[i].onclick = () => { 
            if ((menuBar[i].nextElementSibling != null)) {
                if (menuBar[i].nextElementSibling.className == "menu menu_sub menu_active") {
                    menuBar[i].nextElementSibling.className = "menu menu_sub";
                    return false
                }
                const closeMenu = document.getElementsByClassName("menu menu_sub menu_active");
                if (closeMenu.length > 0) {
                    closeMenu[0].className = "menu menu_sub";
                }
                menuBar[i].nextElementSibling.className = "menu menu_sub menu_active";
                return false 
            }               
        }
    }     
}

menu()