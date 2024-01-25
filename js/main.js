/* ********** Tyiping effect ********** */
const $text = document.querySelector(".hero-pretitle-name");
let str = $text.innerHTML;
let i = 0;

$text.innerHTML = "";

function typing() {
  if (i < str.length) {
    $text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typing, 200);
  } else {
    setTimeout(() => {
      $text.innerHTML = "";
      i = 0;
      setTimeout(typing, 200);
    }, 2000);
  }
}

setTimeout(typing, 1500);

/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);


// Random User Generator API
$(document).ready(function () {

  var url = "https://randomuser.me/api/";
  fetchInformation(url);


  function fetchInformation(url) {
    fetch(url)
      .then((response) => response.json())
      .then(function (data) {

        data.results.forEach(person => {
          var iniciales = person.name.first.charAt(0) + person.name.last.charAt(0)

          $(".logo").append(`<span>${iniciales} | Dev.💻</span>`);

          $(".hero-image-title").append(`<span>${person.name.first} ${person.name.last}</span>`)

          $(".image-profile").append(`<img src="${person.picture.large}"  class="gray-scale" alt="image">`);

          $(".email").append(`<span><a href="mailto:july.an.ar88@gmail.com">${person.email}</a></span>`)

          $(".location").append(`<span><i>${person.location.city}</i>, ${person.location.country}</span>`)

        });

      })
  }

});

$(document).ready(function () {

  var url = "https://api.pexels.com/v1/curated?page=2&per_page=40";
  /* fetchInformation(url); */


  var headersOb = /* {'Access-Control-Allow-Origin': '*'} */
  { 'Authorization': 'Basic apikey:Ejj59mtpA6LngzuTaaW4464CGeyrXycmsYuqb2cHWdfTyoP5wQNXZwp1'};

  $.ajax({
    type: 'GET',
    mode: 'no-cors',
    crossDomain: true,
    credentials: 'include',
    url: url,
    headers: headersOb,
    contentType: 'application/json',
    dataType: 'json'
  }).done(function (data) {
    console.log(data);
    console.log('data called success');
  });

  /* function fetchInformation(url) {
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'authorization': 'Basic apikey:Ejj59mtpA6LngzuTaaW4464CGeyrXycmsYuqb2cHWdfTyoP5wQNXZwp1',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(function (data) {
        console.log(data)
        data.results.forEach(image => {


        });

      })
  } */

});


