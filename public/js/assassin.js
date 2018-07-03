
document.addEventListener("DOMContentLoaded", function (event) {
    let newAssassin = document.getElementById('newAssassin');

    function assassinContainer(newAssassin){
      let assassinContainer = document.createElement('container');
      newAssassin.append(assassinContainer);
      return assassinContainer;
    }

    function assassinImage(assassinPic){
      let assassinImage = document.createElement('img');
      image.src = 'goo.gl/N8JZzi';
      image.alt = 'first-assassin';
      assasinPic.append(assassinImage);
    }

    function assassinInfo(assassinPic, assasinName, codeName, rating, price, kills, age, weapon, contact_info) {
        let assassinInfoContainer = document.createElement('section');
        assassinInfoContainer.append(populateAssassinName(assasinName, codeName));

      }

});

