function mostrarMenu(){
    $('nav#nav-esquerda ul.menu-principal').css("right", "-100%").fadeIn(200).animate({ right: "0" }, 300);
    $('nav#nav-esquerda ul.menu-principal').addClass('animate__animated animate__fadeInRight animate__slow');
    $('nav#nav-esquerda ul#icone-menu li#menu').fadeOut(300, function() {
    $('nav#nav-esquerda ul#icone-menu li#menuX').fadeIn(300);
    });
}

function esconderMenux(){
    $('nav#nav-esquerda ul.menu-principal').animate({ right: "-100%" }, 300, function() {
    $(this).fadeOut(200, function() {
        $(this).css("right", "0");
    });
    });
    $('nav#nav-esquerda ul#icone-menu li#menuX').fadeOut(300, function() {
    $('nav#nav-esquerda ul#icone-menu li#menu').fadeIn(300);
    });
}

let controle = true;

$('nav#nav-esquerda ul#icone-menu').click(function(){
  if (window.innerWidth < 768) { // só ativa se for mobile
    if(controle){
      mostrarMenu();
      controle = false;
    } else {
      esconderMenux();
      controle = true;
    }
  }
});