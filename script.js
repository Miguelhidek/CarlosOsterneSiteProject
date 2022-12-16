


//News
let newsIndex = 0;
let newsItens = document.querySelectorAll('.news');
let newsItensWidth = newsItens[newsIndex].clientWidth;
let newsContainer = document.querySelector('.section-news-container');
	newsContainer.style.width = newsItens.length * newsItensWidth+'px';
let newsContainerMargin = 0;


function nextNews(){
	nextNewsPointer();
	if(newsIndex >= newsItens.length-1){
		newsIndex = 0;
		newsContainerMargin = newsItensWidth*newsIndex;
	}else{
		newsIndex++;
		newsContainerMargin = newsItensWidth*newsIndex;
	}
	newsContainer.style.marginLeft = -newsContainerMargin+'px';	
}

function setPointers(){
	let pointerContainer = document.querySelector('.section-news-pointer-container');
	pointerContainer.innerHTML = '';
	newsItens.forEach(()=>{
		pointerContainer.innerHTML += '<div id='+newsIndex+' class="pointer"></div>'
	});

	document.getElementById('0').classList.add('actived');
}

function nextNewsPointer(){
	let pointersItens = document.querySelectorAll('.pointer');
	pointersItens.forEach((e)=>{
		e.classList.remove('actived');
	});
	let count = newsIndex+1;
	if(count >= pointersItens.length){
		count = 0;
	}
	pointersItens[count].classList.add('actived');	

}

setPointers();
setInterval(nextNews, 5000);


//Partners
let partnerIndex = 0;
let partnerItens = document.querySelectorAll('.partners-logo');

function nextPartner(){
	cleanPartner();
	partnerItens[partnerIndex].classList.add('actived-partners');

	if(partnerIndex >= partnerItens.length-1){
		partnerIndex = 0;
	}else{
		partnerIndex++;
	}	
}

function cleanPartner() {
	// body...
	partnerItens.forEach((e)=>{
		e.classList.remove('actived-partners');
	})
}

setInterval(nextPartner, 3000);
