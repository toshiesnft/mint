const chImage = document.getElementById('ch-img');
const chButton = document.getElementById('random-ch');



chButton.addEventListener('click', fetchChImage);



















function fetchChImage() {
    const rndInt =randomIntFromInterval(1,50);
    console.info(rndInt)
    chImage.innerHTML = `<img class="display-nft" src="assets/img/nfts/${rndInt}.png">`;
    
  }
  

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }




  $(".open").click( function () {
    var container = $(this).parents(".topic");
    var answer = container.find(".answer");
    var trigger = container.find(".faq-t");
    
    answer.slideToggle(200);
    
    if (trigger.hasClass("faq-o")) {
      trigger.removeClass("faq-o");
    }
    else {
      trigger.addClass("faq-o");
    }
    
    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    }
    else {
      container.addClass("expanded");
    }
  });













