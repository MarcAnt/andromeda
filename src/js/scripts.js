new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    scrollHorizontally: true,
    sectionsColor : ['#a98eb0', '#f9d3f7']
});

//métodos
fullpage_api.setAllowScrolling(true, 'up, down');


document.querySelector('.flecha-abajo').addEventListener('click', e => {
    fullpage_api.moveSectionDown();
})
document.querySelector('.flecha-arriba').addEventListener('click', e => {
    fullpage_api.moveSectionUp();
})