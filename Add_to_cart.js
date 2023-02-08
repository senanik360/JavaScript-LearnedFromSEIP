let price1 = 0;
let price2 = 0;
let q1 = 0;
let q2 = 0;
let tp = 0;
let tq = 0;

function myFunction1() {
  price1 += 100;
  document.getElementById("click1").innerHTML = price1;
  tp += 100;
  document.getElementById("tp").innerHTML = tp;
}
function myFunction1p() {
  if (price1 == 0) {
    return 0;
  }
  price1 -= 100;
  document.getElementById("click1").innerHTML = price1;
  tp -= 100;
  document.getElementById("tp").innerHTML = tp;
}
function qu1() {
  q1++;
  document.getElementById("q1").innerHTML = q1;
}

function qu1p() {
  if (q1 == 0) {
    return 0;
  }
  q1--;
  document.getElementById("q1").innerHTML = q1;
}

function myFunction2() {
  price2 += 100;
  document.getElementById("click2").innerHTML = price2;
  tp += 100;
  document.getElementById("tp").innerHTML = tp;
}
function myFunction2p() {
  if (price2 == 0) {
    return 0;
  }
  price2 -= 100;
  document.getElementById("click2").innerHTML = price2;
  tp -= 100;
  document.getElementById("tp").innerHTML = tp;
}
function qu2() {
  q2++;
  document.getElementById("q2").innerHTML = q2;
}
function qu2p() {
  if (q2 == 0) {
    return 0;
  }
  q2--;
  document.getElementById("q2").innerHTML = q2;
}
function confirm() {
  tq = q1 + q2;
  // tp = 0;
  tp = price1 + price2;
  document.getElementById("uname").innerHTML = "User Name";
  document.getElementById("uname_value").innerHTML = "Anik";
  document.getElementById("dot").innerHTML = ".....";
  document.getElementById("rep_des").innerHTML = "Description";

  document.getElementById("rtq").innerHTML = tq;
  document.getElementById("rrtq").innerHTML = "Product Quantity";
  document.getElementById("rtp").innerHTML = tp;
  document.getElementById("rrtp").innerHTML = "  Total Price    ";
}

