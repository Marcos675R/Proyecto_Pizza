function cambiarColor(){

    document.body.style.backgroundColor = '#a9a9a9';

}

$( "button" ).click(function() {
    $( "p" ).show( "slow" );
});

const myCarousel = new Carousel(document.querySelector(".carousel"), {
    slides: [
      {
        html: "1",
      },
      {
        html: "2",
      },
      {
        html: "3",
      },
      {
        html: "4",
      },
      {
        html: "5",
      },
    ],
  });

   Swal.fire({
     title:"Bienvenido",
     text: "Las Mejores Pizzas en 20 minutos",
     icon: 'success',
 })

