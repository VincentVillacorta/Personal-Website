var counter = 0;

$( document ).ready(function() {
    $(".content").fadeIn(1000);
});

function aboutMe(){
  if(counter == 0){
    $(".text-box p1").fadeOut(function() {
        $(".text-box p1").html("I am searching for my first software development role.").fadeIn();
    });
    counter = 1;
  }
  else if(counter == 1){
    $(".text-box p1").fadeOut(function() {
        $(".text-box p1").html("Contact me through the links below!").fadeIn();
    });
    counter = 2;
  }
  else{
    $(".text-box p1").fadeOut(function() {
        $(".text-box p1").html("I'm an aspiring software developer named Vince.").fadeIn();
    });
    counter = 0;
  }
};
