function modal() {
    document.getElementById('modal_main').className = 'modal modal_active'

    const modalSuccess = document.getElementById('modal_success')
    const modalMain = document.getElementById('modal_main')
    const btn = document.querySelector('.show-success')
    btn.onclick = () => {
        modalMain.className = 'modal';
        modalSuccess.className = 'modal modal_active';
    }

    const modalClose = Array.from(document.querySelectorAll('.modal__close_times'))
    console.log(modalClose)
    modalClose.forEach((el) => {
        el.onclick = () => {
        modalMain.className = 'modal';
        modalSuccess.className = 'modal';
        }
    })
}

modal()