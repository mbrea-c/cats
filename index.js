let d1 = new Date();   
let d2 = new Date("08/26/2021");   
    
let difference = d2.getTime() - d1.getTime();   
    
let week_difference = difference / (1000 * 60 * 60 * 24);  

console.log(week_difference);

document.querySelector('#cat_count').textContent = `${week_difference.toFixed(1)} c🐈ts!`


function add_cat(percentage) {
	const container = document.querySelector('#progress_container')
	const image = document.createElement('img')
	image.src = 'cat.webp'
	image.className = 'cat'
	image.style.objectFit = 'cover'
	image.style.objectPosition = '0%'
	image.style.height = '2em'
	image.style.width = `${percentage * 2}em`
	container.appendChild(image)
}

let i = 1;
for (; i < week_difference; i++) {
	add_cat(1)
}
add_cat(week_difference - Math.floor(week_difference))
