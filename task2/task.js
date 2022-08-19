function menu() {
    const menuBar = Array.from(document.querySelectorAll(".menu__link"));
    for (let i = 0; i < menuBar.length; i++) {
        menuBar[i].onclick = () => { 
            menuBar[i].nextElementSibling.className='menu menu_sub menu_active';
            return false 
        }
    }     
}

menu()