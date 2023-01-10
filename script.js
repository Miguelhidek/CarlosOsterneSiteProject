//Scroll Rolling
function scrollSections(secid){
	let scrollObject = document.getElementById(secid).getBoundingClientRect();
	let scrollPosition = scrollObject.y -100;
	window.scrollBy({
		top:scrollPosition,
		left:scrollObject.x,
		behavior:'smooth'
	});
}

//Menu Opener
let menuOpener = false

function menuMobileToggle(){
	let menu = document.querySelector('.menu-container');
	menuOpener = !menuOpener;

	if(menuOpener){
		menu.style.height = 'calc(100vh - 70px)';
	}else{
		menu.style.height = 0;
	}
}


//Set Colection Content

let coletionContent = {
	category:[
		casual = [
			label = 'Casual',
			brands = [
				{
					logoImg:'./assets/media/decoy.png',
					bgImg:'./assets/media/08.png',
					catalog:'https://lulitextil.com.br/decoybrand/catalogo/Catalogo-DECOY-COBERTURA-INVERNO-e-TROPICAL-2023.pdf'
				},
				{
					logoImg:'./assets/media/bgo.png',
					bgImg:'./assets/media/07.jpeg',
					catalog:''
				},
				{
					logoImg:'./assets/media/sglum.png',
					bgImg:'./assets/media/09.jpg',
					catalog:''
				}

			]
		],
		modaIntima = [
			label = 'Moda Íntima',
			brands = [
				{
					logoImg:'./assets/media/zeerucci.png',
					bgImg:'./assets/media/04.png',
					catalog:'https://www.zeerucci.com.br/catalogo/',
				}
			]
		],
		infantil = [
			label = 'Moda Infantil',
			brands = [
				{
					logoImg:'./assets/media/duduka&DDk.png',
					bgImg:'./assets/media/05.jpg',
					catalog:'https://www.lulitextil.com.br/catalogo-duduka-e-ddk/'
				}
			]
		],
		jeans = [
			label = 'Jeans',
			brands = [
				{
					logoImg:'./assets/media/zigurat.jpg',
					bgImg:'./assets/media/06.jpg',
					catalog:'https://www.instagram.com/ziguratjeans/'
				}
			]
		]
	]
}

//Set Colection Menu Bar
let coletionMenuItem = document.querySelector('.coletion-menu-bar');

function setColectionMenu(){
	coletionMenuItem.innerHTML = '';
	let count = 0;
	coletionContent.category.forEach((c)=>{
		if(count <=coletionContent.category.length){
			coletionMenuItem.innerHTML += '<div class="coletion-menu-item" id=c'+count+'>'+c[0]+'</div>';
			count++;
		}else{
			count = 0;
		}
	});
}

setColectionMenu();

let coletion = document.querySelector('.coletion');

//Slide Coletion
let coletionItemIndex = 0;
let colectionItemHeight = document.querySelector('.coletion-item').clientHeight;
let newColetionMargin = 0;
let colectionPointerContainer = document.querySelector('.coletion-pointer-container');

function setFirstColection(){
	coletion.innerHTML = '';
	let counter = 1;
	coletionContent.category[0][1].forEach((item)=>{
		if(counter >=coletionContent.category[0][1]){
			counter = 1;
		}else{
			if(counter%2==0){
				coletion.innerHTML += '<div class="coletion-item coletion-par"> <div class="coletion-item-image"> <img src="'+item.bgImg+'"/>	</div> <div class="coletion-item-description"> 	<img src="'+item.logoImg+'"/> <span>'+coletionContent.category[0][0]+'</span> <a class="section-button" href="'+item.catalog+'" target="_blank"> Ver Cartálogo </a> </div> </div>';
			}else{
				coletion.innerHTML += '<div class="coletion-item"> <div class="coletion-item-image"> <img src="'+item.bgImg+'"/>	</div> <div class="coletion-item-description"> 	<img src="'+item.logoImg+'"/> <span>'+coletionContent.category[0][0]+'</span> <a class="section-button" href="'+item.catalog+'" target="_blank"> Ver Cartálogo </a> </div> </div>';
			}
			counter++;
		}
	});
	let newColectionHeight = coletionContent.category[0][1].length * colectionItemHeight;
	coletion.style.height = newColectionHeight+'px';
	setColectionPointer(coletionContent.category[0][1].length);
	nextColectionPointer();
}


function nextColetion(){
	let coletionItem = document.querySelectorAll('.coletion-item');
	if(coletionItemIndex >=coletionItem.length-1){
		coletionItemIndex = 0;
		newColetionMargin = coletionItemIndex * colectionItemHeight;
	}else{
		coletionItemIndex++;
		newColetionMargin = coletionItemIndex * colectionItemHeight;
	}
	coletion.style.marginTop = -newColetionMargin+"px";
	nextColectionPointer();
}

coletionMenuItem.addEventListener('click',(e)=>{
	coletion.style.height = 0;
	let categoryId = parseInt(e.target.getAttribute('id').replace('c',''));
	coletion.innerHTML = '';
	let counter = 1;
	coletionContent.category[categoryId][1].forEach((b)=>{
		if(counter >=coletionContent.category[0][1]){
			counter = 1;
		}else{
			if(counter%2==0){
				coletion.innerHTML += '<div class="coletion-item coletion-par"> <div class="coletion-item-image"> <img src="'+b.bgImg+'"/>	</div> <div class="coletion-item-description"> 	<img src="'+b.logoImg+'"/> <span>'+coletionContent.category[categoryId][0]+'</span> <a class="section-button" href="'+b.catalog+'" target="_blank"> Ver Cartálogo </a> </div> </div>';
			}else{
				coletion.innerHTML += '<div class="coletion-item"> <div class="coletion-item-image"> <img src="'+b.bgImg+'"/>	</div> <div class="coletion-item-description"> 	<img src="'+b.logoImg+'"/> <span>'+coletionContent.category[categoryId][0]+'</span> <a class="section-button" href="'+b.catalog+'" target="_blank"> Ver Cartálogo </a> </div> </div>';
			}
			counter++;
		}
		//coletion.innerHTML += '<div class="coletion-item"> <div class="coletion-item-image"> <img src="'+b.bgImg+'"/>	</div> <div class="coletion-item-description"> 	<img src="'+b.logoImg+'"/> <span>'+coletionContent.category[categoryId][0]+'</span> <a class="section-button" href="'+b.catalog+'" target="_blank"> Ver Cartálogo </a> </div> </div>';
	});
	let colectionItemHeight = document.querySelector('.coletion-item').clientHeight;
	let newColectionWidth = coletionContent.category[categoryId][1].length * colectionItemHeight;
	coletion.style.height = newColectionWidth+'px';
	setColectionPointer(coletionContent.category[categoryId][1].length);
	nextColetion();
});

function setColectionPointer(n){
	colectionPointerContainer.innerHTML = '';
	let counter = 0;
	while(counter <= n - 1){
		colectionPointerContainer.innerHTML += '<div id='+counter+' class="pointer-container"></div>';
		counter++;
	}
}

function nextColectionPointer(){
	let colectionPointer = document.querySelectorAll('.pointer-container');
	colectionPointer.forEach((p)=>{
		p.classList.remove('actived');
	})
	colectionPointer[coletionItemIndex].classList.add('actived');
}

function setCurrentColectionPointer(pid){
	coletionItemIndex = pid - 1;

	let coletionItem = document.querySelectorAll('.coletion-item');
	if(coletionItemIndex >=coletionItem.length-1){
		coletionItemIndex = 0;
		newColetionMargin = coletionItemIndex * colectionItemHeight;
	}else{
		coletionItemIndex++;
		newColetionMargin = coletionItemIndex * colectionItemHeight;
	}
	coletion.style.marginTop = -newColetionMargin+"px";
	nextColectionPointer();

}

colectionPointerContainer.addEventListener('click', (e)=>{
	if(e.target != colectionPointerContainer){
		setCurrentColectionPointer(parseInt(e.target.id));
	}
})


setFirstColection();
setInterval(nextColetion, 5000);

//Set Patners Content
let partnerContainer = document.querySelector('.partners-logo-container');

function setPatnersContent(){
	partnerContainer.innerHTML = '';
	coletionContent.category.forEach((c)=>{
		c[1].forEach((b)=>{
			partnerContainer.innerHTML += '<div class="partners-logo"> <img src="'+b.logoImg+'"/>	</div>'
		});
	});	
}

setPatnersContent();

//Set News Content 

let newsContainer = document.querySelector('.section-news-container');

let newsContent = {
	news:[
		{imgAddress:'./assets/media/boas-festas.png'},
		{imgAddress:'./assets/media/carlos-osterne-banner.png'},
	]
}

function setNewsContent(){
	newsContainer.innerHTML = '';
	let counter = 0;
	newsContent.news.forEach((e)=>{
		newsContainer.innerHTML += '<div id=n'+counter+' class="news"> <img src="'+e.imgAddress+'" /> </div>'
		counter++;
	});
}

setNewsContent();

//News
let newsIndex = 0;
let newsItens = document.querySelectorAll('.news');
let newsItensWidth = newsItens[newsIndex].clientWidth;
	newsContainer.style.width = newsItens.length * newsItensWidth+'px';
let newsContainerMargin = 0;
let pointerContainer = document.querySelector('.section-news-pointer-container');

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
	pointerContainer.innerHTML = '';
	let counter = 0;
	newsItens.forEach(()=>{
		pointerContainer.innerHTML += '<div id='+counter+' class="pointer"></div>'
		counter++;
	});
	let pointersItens = document.querySelectorAll('.pointer');
	pointersItens[0].classList.add('actived');
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

function setCurrentNews(pid){
	setCurrentPointer(pid);
	newsIndex = pid - 1;
	
	if(newsIndex >= newsItens.length-1){
		newsIndex = 0;
		newsContainerMargin = newsItensWidth*newsIndex;
	}else{
		newsIndex++;
		newsContainerMargin = newsItensWidth*newsIndex;
	}
	newsContainer.style.marginLeft = -newsContainerMargin+'px';
}

pointerContainer.addEventListener('click', (e)=>{
	if(e.target != pointerContainer){
		setCurrentNews(parseInt(e.target.id));
	}
});

function setCurrentPointer(pid){
	let pointersItens = document.querySelectorAll('.pointer');
	pointersItens.forEach((e)=>{
		e.classList.remove('actived');
	});
	pointersItens[pid].classList.add('actived');
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
