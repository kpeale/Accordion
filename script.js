'use strict';

const arrow = document.querySelectorAll('.faqsection3img');
const paragraph = document.querySelectorAll('.faqsection2__div1-a1')



const answer =  function () {paragraph.forEach(p => {
    p.classList.remove('hide')
})};


const closeArrow = function () {
    paragraph.classList.add("hide");
  };
  
  for (let i = 0; i < arrow.length; i++) {
     arrow[i].addEventListener("click", function (e) {
      paragraph[i].classList.toggle("hide");
    });
  }







