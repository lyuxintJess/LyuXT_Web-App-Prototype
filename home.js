// ！not done yet！
var foodList = [
  {
    image: "1.jpg",
    title: "Cake",
    describe: "xxxxxxxxxxxxxxx",
    cook: "xxxxxxxxxxxxxxx",
  },
  {
    image: "2.jpg",
    title: "Cake",
    describe: "xxxxxxxxxxxxxxx",
    cook: "xxxxxxxxxxxxxxx",
  },
  {
    image: "3.jpg",
    title: "Cake",
    describe: "xxxxxxxxxxxxxxx",
    cook: "xxxxxxxxxxxxxxx",
  },
  {
    image: "4.jpg",
    title: "Cake",
    describe: "xxxxxxxxxxxxxxx",
    cook: "xxxxxxxxxxxxxxx",
  },
  {
    image: "5.jpg",
    title: "Cake",
    describe: "xxxxxxxxxxxxxxx",
    cook: "xxxxxxxxxxxxxxx",
  },
  {
    image: "7.jpg",
    title: "Cake",
    describe: "xxxxxxxxxxxxxxx",
    cook: "xxxxxxxxxxxxxxx",
  },
]


var str = ""
for (let index = 0; index < foodList.length; index++) {
  str += `
  <a href="Detail.html">
  <div class="item">
  <img src="./images/${foodList[index].image}" alt="">
        <div class="plus">+</div>
  </div></a>`
}
document.getElementById("food").innerHTML = str

//click on adding button
let plusList = document.getElementsByClassName("plus")
let arr = []
for (let index = 0; index < plusList.length; index++) {
  const element = plusList[index]
  element.onclick = function () {
    arr.push(foodList[index])
    localStorage.setItem("foodList", JSON.stringify(arr))
  }
}

//linking to details page
let itemList = document.getElementsByClassName('item')
for (let index = 0; index < itemList.length; index++) {
  const element = itemList[index];
  element.onclick = function () {
    localStorage.setItem('detail',JSON.stringify(foodList[index]))
  }
}
