"use strict";

const itemNameInput = document.querySelector(`.inputStyle`);
const itemTitle = document.querySelector(`section.layoutView section:nth-child(1) article`);
const itemSubTitle = document.querySelector(`section.layoutView section:nth-child(2) article`);
const itemRepresentativeImg = document.querySelector(`section.layoutView section:nth-child(3) article`);

const inputStyleSub = document.querySelector(`.inputStyleSub`);

inputStyleSub.addEventListener("keyup",(e)=>{
	let itemSub = e.target.value;
	itemSubTitle.innerText = itemSub;
});

itemNameInput.addEventListener("keyup",(e)=>{
	let itemName = e.target.value;
	itemTitle.innerText = itemName;
});

const titleSize = document.querySelector(`section.itemWrite article input[type="number"]`);
titleSize.addEventListener("change",(e)=>{
	let size = e.target.value;
	if(itemTitle.innerText == ""){
		alert("상품이름을 입력하세요!");
		e.target.value = 45;
		itemNameInput.focus();
	}else{
		if(size > 34 && size < 56){
			itemTitle.style.fontSize = size+"px";
		}else{
			if(size < 35){
				alert("글자 크기는 35px 이상이어야 합니다.");
				e.target.value = 35;
			}if(size > 55){
				alert("글자 크기는 55px 이하이어야 합니다.");
				e.target.value = 55;
			}
		}
	}
});

const fontColorApply = document.querySelectorAll(".fontColorApply");
fontColorApply.forEach((btn)=>{
	btn.addEventListener("click",(colorBtn)=>{
		if(itemTitle.innerText == ""){
			alert("상품이름을 입력하세요!");
			itemNameInput.focus();
		}else{
			itemTitle.style.color = colorBtn.target.style.getPropertyValue("background-color");
		}
	});
});

const btnBold = document.querySelector(".btnBold");
btnBold.addEventListener("click",(btn)=>{
	let condi = itemTitle.style.fontWeight;
	if(condi == "bold"){
		if(itemTitle.innerText == ""){
			alert("상품이름을 입력하세요!");
			itemNameInput.focus();
		}else{
			itemTitle.style.fontWeight = "normal";
		}
	}else{
		if(itemTitle.innerText == ""){
			alert("상품이름을 입력하세요!");
			itemNameInput.focus();
		}else{
			itemTitle.style.fontWeight = "bold";
		}
	}
});

const btnUnderline = document.querySelector(".btnUnderline");
btnUnderline.addEventListener("click",(btn)=>{
	let condi = itemTitle.style.textDecoration;
	if(condi == "underline"){
		if(itemTitle.innerText == ""){
			alert("상품이름을 입력하세요!");
			itemNameInput.focus();
		}else{
			itemTitle.style.textDecoration = "none";
		}
	}else{
		if(itemTitle.innerText == ""){
			alert("상품이름을 입력하세요!");
			itemNameInput.focus();
		}else{
			itemTitle.style.textDecoration = "underline";
		}
	}
});

const setRepresentativeImgInput = document.querySelector(".setRepresentativeImgInput");
const setRepresentativeImg = document.querySelector(".setRepresentativeImg");
setRepresentativeImg.addEventListener("click", (btn)=>{
	setRepresentativeImgInput.click();
});
setRepresentativeImgInput.onchange = ({target})=>{
	let fName = target.files[0].name;
	let fType = target.files[0].type;
	console.log({target});
}