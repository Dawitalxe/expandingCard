let panels = document.querySelectorAll('.panel');
// let active =  document.querySelector('.active');

panels.forEach((panel) => {
    // console.log(panel)
    panel.addEventListener('click', function(){
        removeActiveClass();
        panel.classList.add('active')
    })
})
function removeActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

if(window.innerWidth < 768){
    document.getElementById('tit').textContent= "Expand Your verticals  "
}