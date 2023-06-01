var foodList = JSON.parse(localStorage.getItem("foodList"))
var str = ""
for (let index = 0; index < foodList.length; index++) {
  const element = foodList[index]
  str += `
    <div class="content-item">
        <div class="title">${element.title}</div>
        <div class="descrip-img">
          <img src="./images/${element.image}" alt="">
          <div class="detail">${element.describe}</div>
        </div>
        <div class="reduce">-</div>
      </div>
    `
  document.getElementById("content").innerHTML = str
}

//click on minus button, to cancel items from the list page.
let reduceList = document.getElementsByClassName("reduce")
var foodList = JSON.parse(localStorage.getItem("foodList"))
for (let index = 0; index < reduceList.length; index++) {
  const element = reduceList[index]
  element.onclick = function () {
    foodList.splice(0, index + 1)
    localStorage.setItem('foodList', JSON.stringify(foodList))
    window.location.reload()
  }
}
