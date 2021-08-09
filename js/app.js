window.onscroll = function() {
	// console.info(document.documentElement.scrollTop);
	if(document.documentElement.scrollTop > 100) {
		document.querySelector('.go-top-container').classList.add('show');
	} else {
		document.querySelector('.go-top-container').classList.remove('show');
	}
}

document.querySelector('.go-top-container').addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});




const noche = document.querySelector('#night');
console.info(noche);

noche.










addEventListener('DOMContentLoaded', () => {
	const btnMenu = document.querySelector('.btn-menu');
	if(btnMenu) {
        btnMenu.addEventListener('click', () => {
            const menuItems = document.querySelector('.menu-items'); /* query selector: selector de consultas*/
            menuItems.classList.toggle('show'); /* Accedemos a toggle porque al dar click, si el elemento tiene la clase, se la va a quitar, y si no la tiene, se la va a agregar. De esta manera lo va a mostrar u ocultar en nuestro navegador */
        })
    }
})

 