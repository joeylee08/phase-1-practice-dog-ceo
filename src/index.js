const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
  .then(res => res.json())
  .then(json => {
    let images = document.querySelector('#dog-image-container');
    for (let url of json.message) {
      let img = document.createElement('img');
      img.src = url;
      img.style.width = '400px';
      img.style.height = '300px';
      img.style.objectFit = 'cover';
      images.append(img);
    }
  })

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
  .then(res => res.json())
  .then(json => {
    let breeds = document.querySelector('#dog-breeds');
    for (let dog in json.message) {
      const li = document.createElement('li');
      li.addEventListener('click', function(e) {
        e.target.style.color = 'purple';
      })
      li.textContent = dog;
      breeds.append(li);
    }
  })

  const select = document.querySelector('#breed-dropdown');

  select.addEventListener('change', function(e) {
    let letter = e.target.value;
    let breedList = document.querySelectorAll('li');
    for (let item of breedList) {
      if (letter === "") {
        item.style.display = "";
        continue;
      } else if (item.textContent[0] !== letter) {
        item.style.display = 'none';
      } else {
        item.style.display = "";
      }
    }
  })
