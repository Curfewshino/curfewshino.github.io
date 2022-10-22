bar.addEventListener('click', () => {
    if(menu.classList.contains('hidden') && window.innerWidth < 768){
        menu.classList.remove('hidden', 'p-4');
        menu.classList.add(
            'flex',
            'flex-col', 
            'text-justify', 
            'w-1/3', 
            'absolute', 
            'top-16', 
            'right-0', 
            'durartion-300', 
            'border-2',
            'border-gray-900', 
            'rounded-xl'
        );
    } else {
        menu.classList.add('hidden', 'p-4');
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 768) {
        bar.classList.add('hidden')
        menu.classList.add('hidden', 'p-4')
        menu.classList.remove(
            'flex',
            'flex-col', 
            'text-justify', 
            'w-1/3', 
            'absolute', 
            'top-16', 
            'right-0', 
            'durartion-300', 
            'border-2', 
            'border-gray-900', 
            'rounded-xl'
        )
    } else{
        bar.classList.remove('hidden')
    }
});