document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!



  const sfPlaces = document.getElementsByClassName('favorite-submit')[0];
  sfPlaces.addEventListener('click',
    (e) => {
      e.preventDefault();
      let ul = document.getElementById('sf-places');
      let li = document.createElement('li');
      let text = document.getElementsByClassName('favorite-input')[0].value.toString();
      li.textContent = text;
      ul.appendChild(li);
      document.getElementsByClassName('favorite-input')[0].value = '';
    }
  );
  


  // adding new photos

  // --- your code here!


  const hidePhotos = document.getElementsByClassName('photo-show-button')[0];
  hidePhotos.addEventListener('click',
    (e) => {
      e.preventDefault();
      let hidden = document.getElementsByClassName('photo-form-container hidden')[0]
      if (hidden) {
        hidden.className = 'photo-form-container';
      }
      else  {
        document.getElementsByClassName('photo-form-container')[0].className = 'photo-form-container hidden';
      }
    }
  );
  const dogPhotos = document.getElementsByClassName('photo-url-submit')[0];
  dogPhotos.addEventListener('click',
    (e) => {
      e.preventDefault();
      let ul = document.getElementsByClassName('dog-photos')[0];
      let li = document.createElement('li');
      let img = document.createElement('img');
      img.src = document.getElementsByClassName('photo-url-input')[0].value;
      li.appendChild(img);
      ul.appendChild(li);
    }
  );

});
