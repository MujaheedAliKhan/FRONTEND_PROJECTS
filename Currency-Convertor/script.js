// const BASE_URL = "https:/cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json"

// const ConverNow = () =>
//     {
//         let Amount = parseInt(document.getElementsByClassName("amount").value);
//         let Amount = parseInt(document.getElementsByClassName("amount").value);
//         let Amount = parseInt(document.getElementsByClassName("amount").value);
//     }

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    }
    if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
}

const updateflag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtval = amount.value;
  console.log(amtval);
  if (amtval === "" || amtval < 1) {
    amtval = 1;
    amount.value = "1";
  }
});

const Convernow = () => {
  let amount = parseInt(document.getElementById("amount").value);
  let fromCurrency = parseInt(document.getElementById("fromcurrency").value);
  let toCurrency = parseInt(document.getElementById("tocurrency").value);

  var myHeaders = new Headers();
  myHeaders.append("apikey", "Zb9XfKXwXPMhBoCyBTaPrXK9sAr9RoI9");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    "https://api.apilayer.com/exchangerates_data/convert?to=" + toCurrency + "&from=" + fromCurrency + "&amount=" + amount + "",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result));
};
