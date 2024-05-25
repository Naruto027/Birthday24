let slide_index = 0;

let image = document.querySelector("#image img");
let msg = document.querySelector(".msg");
let name = document.querySelector(".name");

let obj = {
  "Juhi": {
    msg: "Happiest Birthday Cutieeee!!! Wishing you a lot of strength to bare me for years to come and lots of happiness in lifee. Have a Blast Year ❤️",
    image: ['images/juhi-1.jpeg', 'images/juhi-2.jpeg', 'images/juhi-3.jpeg', 'images/juhi-4.jpeg']
  },
  "Prapti": {
    msg: "Happy birthday to my bestooo friendooo !!💛 You always have my back. Here's to another year of inside jokes and endless laughter...😜. Cheers to lifelong friendship🥂.You're truly one of a kind 🧁",
    image: ['images/prapti-1.jpeg', 'images/prapti-2.jpg', 'images/prapti-3.jpeg', 'images/prapti-4.jpg']
  },
  "Aryan": {
    msg: "Happy Birthday my younger brother! From midnight conversations and epic concerts to planning unforgettable trips, every moment with you is priceless. Here's to more amazing adventures together!",
    image: ['images/aryan-1.jpg', 'images/aryan-2.jpg', 'images/aryan-3.jpg']
  },
  "Shlok": {
    msg: "This Hokage & Shadow Hokage synergy will remain constant!!🫂",
    image: ['images/Shlok-1.jpeg', 'images/shlok-2.jpeg']
  },
  "Harmy": {
    msg: "HAPPIEST BIRTHDAY to the sweetest and the most humble guy I have ever met. GIVE ME SOME BOOK SUGGESTIONS 🤌",
    image: ['images/Harmy.jpg']
  },
  "Dhrumi": {
    msg: "Happyyy Birthdayyy Darshan! 🥳🥳🥳.Your genuine kindness and good company make us grateful to have such a wonderful friend. May you achieve all your goals this year and up and up you go🚀💥",
    image: ['images/Dhrumi.jpeg']
  },
  "Devanshi": {
    msg: "Happy happy birthday Darshan!! May this birthday bring you closer to your dreams.Here’s to another year of adventure, laughter, and amazing memories.Have a blast and have fun with Juhi!!💌",
    image: ['images/devanshi-1.jpg', 'images/devanshi-2.jpg', 'images/devanshi-3.jpg']
  },
  "Moksha": {
    msg: "Happiest birthday goodie!  You’re too old to be called a vintage. Cheers to another successful revolution around the Sun. Wishing you not only the success but also all the happiness & sleep in the world ! 💌",
    image: ['images/moksha-1.jpeg', 'images/moksha-2.jpeg', 'images/moksha-3.jpeg']
  },
  "Pooja": {
    msg: "Here's to the one who lights up the room with his energy and dark humor. I'm lucky to have you as a friend. Happy Birthday!",
    image: ['images/pooja.jpeg']
  },
  "Neerav": {
    msg: "The energy u have brings so much joy to every moment, and your friendship has been a blessing to me , thank you for everything and have a great day",
    image: ['images/neerav-1.jpeg']
  }
};

let keys = Object.keys(obj);
let len = keys.length;
let picNo = 0;
let slideShowTimeout;

function nextSlide(n) {
  displaySlides(slide_index += n);
}

function currentSlide(n) {
  displaySlides(slide_index = n);
}

displaySlides(0);

function displaySlides(n) {
  if (n >= len) {
    slide_index = 0;
  }
  if (n < 0) {
    slide_index = len - 1;
  }

  image.setAttribute("src", obj[keys[slide_index]].image[0]);
  msg.innerText = obj[keys[slide_index]].msg;
  name.innerText = "- " + keys[slide_index];

  let imageNo = obj[keys[slide_index]].image.length;

  if (imageNo > 1) {
    picNo = 0;
    clearTimeout(slideShowTimeout); // Clear any previous timeout
    showSlides(imageNo);
  } else {
    clearTimeout(slideShowTimeout); // Clear any previous timeout if it's a single image
  }
}

function showSlides(imageNo) {
  if (picNo >= imageNo) {
    picNo = 0;
  }

  image.setAttribute("src", obj[keys[slide_index]].image[picNo]);
  picNo += 1;
  slideShowTimeout = setTimeout(function () {
    showSlides(imageNo);
  }, 5000); // Change image every 5 seconds
}
