const navigation=document.querySelector(".navigation"),navToggle=document.querySelector(".navigation__toggle");navigation.classList.remove("navigation--nojs"),navToggle.addEventListener("click",(function(){navigation.classList.contains("navigation--closed")?(navigation.classList.remove("navigation--closed"),navigation.classList.add("navigation--opened")):(navigation.classList.add("navigation--closed"),navigation.classList.remove("navigation--opened"))}));