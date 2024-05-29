let imagenes = [
    {
        "url": "img/carrusel1.png",
        "nombre": "Un lugar de encuentro !!",
        "descripcion": "Ven con amigos, y disfruta del mejor ambiente, y la comodiad de nuestras instalaciones"

    },
    {
        "url": "img/carrusel2.png",
        "nombre": "El lugar perfecto para deleitar el paladar",
        "descripcion": "Disfruta de nuestra gran variedad de tragos, y cocteles de gran sabor y con la mejor calidad"

    },
    {
        "url": "img/carrusel3.png",
        "nombre": "Fusion perfecta entre comidas y tragos",
        "descripcion": "A la carta se le suman sándwiches, ensaladas, pizzas, tablas de charcutería y las mejores hamburguesas de la zona"

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}