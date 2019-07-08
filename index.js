document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {});

    elems = document.querySelector('.tap-target');
    instances = M.TapTarget.init(elems, {});

    elems = document.querySelectorAll('.parallax');
    instances = M.Parallax.init(elems, {});

  });

  let where = document.querySelectorAll('a.where');
  if (where){
      where.forEach(el => {
          el.addEventListener('click',e => setTimeout(() => {
            if (sessionStorage.getItem('showPhone')==null) {
                let elems = document.querySelector('.tap-target');
                let instance = M.TapTarget.getInstance(elems);
                    instance.open(); 
                    sessionStorage.setItem('showPhone',true);
            }
          },1000));
      })
  }

//   let map;
//   function initMap1() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: -34.397, lng: 150.644},
//       zoom: 8
//     });
//   let marker = new google.maps.Marker({

//     // Определяем позицию маркера
//     position: {lat: 59.853879, lng: 30.521553},

//     // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
//     map: map,

//     // Пишем название маркера - появится если навести на него курсор и немного подождать
//     title: 'Наш маркер: Большой театр'
// });
//   }
//   initMap1();