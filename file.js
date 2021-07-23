function home() {}

function slideShow() {
  var hm = document.getElementById("home");

  var arr = [
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3028/1033028-h-f99689c557b0",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8773/1028773-h-48170a73363e",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9260/889260-h",
  ];
  let i = 0;

  var img = document.createElement("img");

  hm.append(img);

  setInterval(function () {
    img.src = arr[i];
    i++;
    if (i == 3) {
      i = 0;
    }
  }, 1000);
}
slideShow();

function login() {
  alert("login");
}
function signup() {
  alert("signup");
}

const moviename = [
  {
    name: "Movie - The Godfather",
    att: "9.2",
    relese: "Relese year - 2001",
    img: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    name: "Movie - The Dark Knight",
    att: "9.0",
    relese: "Relese year - 2006",
    img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    name: "Movie - Fight Club",
    att: 8.8,
    relese: "Relese year - 1992",
    img: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
  },
  {
    name: "Movie - Inception",
    att: "8.2",
    relese: "Relese year - 2010",
    img: "https://m.media-amazon.com/images/M/MV5BN2JmMjViMjMtZTM5Mi00ZGZkLTk5YzctZDg5MjFjZDE4NjNkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    name: "Movie - The Shawshank Redemption",
    att: "9.3",
    relese: "Relese year - 20011",
    img: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    name: "Movie - Amelie",
    att: "9.0",
    relese: "Relese year - 1994",
    img: "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX45_CR0,0,45,67_AL_.jpg",
  },
  {
    name: "Movie - Seven Samurai",
    att: "8.1",
    relese: "Relese year - 2000",
    img: "https://m.media-amazon.com/images/M/MV5BZmM0NGY3Y2MtMTA1YS00YmQzLTk2YTctYWFhMDkzMDRjZWQzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX45_CR0,0,45,67_AL_.jpg",
  },
  {
    name: "Movie - A Sepration",
    att: "9.1",
    relese: "Relese year - 2005",
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3362/1033362-v-f040a1d9b494",
  },
  {
    name: "Movie - The Life is Wonderful",
    att: "8.6",
    relese: "Relese year - 20019",
    img: "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
];

localStorage.setItem("movienames", JSON.stringify(moviename));
function showMovie() {
  var t = localStorage.getItem("movienames");
  var movie = document.getElementById("movie");
  t.forEach(function (el) {
    var div = document.createElement("div");

    var n_name = document.createElement("p");
    n_name.innerHTML = el.name;
    var n_att = document.createElement("p");
    n_att.innerHTML = el.att;
    var n_;
  });
}

console.log(t);
