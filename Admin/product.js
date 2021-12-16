console.log("test");

var arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
console.log(arrofobj);

//Filtering Function

//High to low
document.querySelector("#high").addEventListener("change", hightolowfunction);

function hightolowfunction() {
  if (this.checked) {
    arrofobj.sort(function (a, b) {
      return b.price - a.price;
    });
    displayUi(arrofobj);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//low to high
document.querySelector("#low").addEventListener("change", lowtohighfunction);

function lowtohighfunction() {
  if (this.checked) {
    arrofobj.sort(function (a, b) {
      return a.price - b.price;
    });
    displayUi(arrofobj);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

displayUi(arrofobj);

//All Products

document.querySelector("#all").addEventListener("change", allprioductfun);

function allprioductfun() {
  arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
  displayUi(arrofobj);
  console.log("Test");
}

//Price bello 499
document.querySelector("#below499").addEventListener("change", below499fun);

function below499fun() {
  if (this.checked) {
    var storearr1 = arrofobj.filter(function (el) {
      if (el.price <= 499) {
        return el;
      }
    });
    storearr1.sort(function (a, b) {
      return a.price - b.price;
    });
    displayUi(storearr1);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Price between 500 to 999

document.querySelector("#p500to999").addEventListener("change", below999fun);

function below999fun() {
  if (this.checked) {
    var storearr2 = arrofobj.filter(function (el) {
      if (el.price >= 500 && el.price <= 999) {
        return el;
      }
    });
    storearr2.sort(function (a, b) {
      return a.price - b.price;
    });
    displayUi(storearr2);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Price between 1000 and 1999

document.querySelector("#p1000to1999").addEventListener("change", below1999fun);

function below1999fun() {
  if (this.checked) {
    var storearr3 = arrofobj.filter(function (el) {
      if (el.price >= 1000 && el.price <= 1999) {
        return el;
      }
    });
    storearr3.sort(function (a, b) {
      return a.price - b.price;
    });
    displayUi(storearr3);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Price above 2000

document.querySelector("#p2000").addEventListener("change", above2000fun);

function above2000fun() {
  if (this.checked) {
    var storearr4 = arrofobj.filter(function (el) {
      if (el.price >= 2000) {
        return el;
      }
    });
    storearr4.sort(function (a, b) {
      return a.price - b.price;
    });
    displayUi(storearr4);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Discount upto 20%

document.querySelector("#upto20").addEventListener("change", disupto20);

function disupto20() {
  if (this.checked) {
    var storearrdis1 = arrofobj.filter(function (el) {
      if (el.discount <= 20) {
        return el;
      }
    });
    storearrdis1.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrdis1);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Discount upto 50%
document.querySelector("#upto50").addEventListener("change", disupto50);

function disupto50() {
  if (this.checked) {
    var storearrdis2 = arrofobj.filter(function (el) {
      if (el.discount > 20 && el.discount <= 50) {
        return el;
      }
    });
    storearrdis2.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrdis2);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Discount upto 70

document.querySelector("#upto70").addEventListener("change", disupto70);

function disupto70() {
  if (this.checked) {
    var storearrdis3 = arrofobj.filter(function (el) {
      if (el.discount > 50 && el.discount <= 70) {
        return el;
      }
    });
    storearrdis3.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrdis3);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

//Discount more than 70

document.querySelector("#more70").addEventListener("change", dismore70);

function dismore70() {
  if (this.checked) {
    var storearrdis4 = arrofobj.filter(function (el) {
      if (el.discount > 70) {
        return el;
      }
    });
    storearrdis4.sort(function (a, b) {
      return b.discount - a.discount;
    });
    displayUi(storearrdis4);
  } else {
    arrofobj = JSON.parse(localStorage.getItem("lsproductdetails"));
    displayUi(arrofobj);
  }
}

function displayUi(arrofobj) {
  document.querySelector("#jsproduct").innerHTML = "";
  arrofobj.map(function (el, i) {
    //Create all html tags

    var singlemainbox = document.createElement("div");
    var likebox = document.createElement("div");
    var spanbox1 = document.createElement("span");
    var mainproductbox = document.createElement("div");
    var firstimagediv = document.createElement("div");
    var innerimagediv = document.createElement("div");
    var innerimagetag = document.createElement("img");

    var namediv = document.createElement("div");
    var priceanddisdiv = document.createElement("div");
    var pricediv = document.createElement("div");
    var discountdiv = document.createElement("div");
    var mrpdiv = document.createElement("div");
    var stardiv = document.createElement("div");
    var spanbox2 = document.createElement("span");
    var spanbox3 = document.createElement("span");
    var spanbox4 = document.createElement("span");
    var spanbox5 = document.createElement("span");
    var spanbox6 = document.createElement("span");
    var freeshipingdiv = document.createElement("div");
    var lstdiv = document.createElement("div");
    var branddiv = document.createElement("div");
    var colordiv = document.createElement("div");

    //creating attributes
    spanbox1.setAttribute("id", "heart");
    mainproductbox.setAttribute("id", "prod");
    innerimagetag.setAttribute("src", el.imgURL);

    spanbox2.setAttribute("class", "fa fa-star checked");
    spanbox3.setAttribute("class", "fa fa-star checked");
    spanbox4.setAttribute("class", "fa fa-star checked");
    spanbox5.setAttribute("class", "fa fa-star");
    spanbox6.setAttribute("class", "fa fa-star");

    //Set all values
    namediv.textContent = el.name;
    // pricediv.textContent = "&#8377;" + el.price;
    pricediv.innerHTML = "₹" + el.price;
    discountdiv.textContent = el.discount + "% Off";
    mrpdiv.textContent = "₹" + el.mrp;
    branddiv.textContent = "Brand: " + el.brand;
    colordiv.textContent = "Color-Family: " + el.color_family;
    freeshipingdiv.textContent = "Free Shipping";

    //Append all the element
    lstdiv.append(branddiv, colordiv);
    stardiv.append(spanbox2, spanbox3, spanbox4, spanbox5, spanbox6);
    priceanddisdiv.append(pricediv, discountdiv);
    innerimagediv.append(innerimagetag);
    firstimagediv.append(innerimagediv);

    mainproductbox.append(
      firstimagediv,
      namediv,
      priceanddisdiv,
      mrpdiv,
      stardiv,
      freeshipingdiv,
      lstdiv
    );

    likebox.append(spanbox1);
    singlemainbox.append(likebox, mainproductbox);

    document.querySelector("#jsproduct").append(singlemainbox);

    //Click any single product
    singlemainbox.addEventListener("click", function () {
      //console.log(arrofobj[i]);
      var singledata = arrofobj[i];
      localStorage.setItem("SingleProd", JSON.stringify(singledata));
      window.location.href = "singlepage.html";
    });
  });
}
