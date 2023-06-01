var detail = JSON.parse(localStorage.getItem("detail"))
var str = `
<div class="image">
      <img src="./images/${detail.image}" alt="">
      <div class="plus">+</div>
    </div>
    <div class="title">${detail.title}</div>
    <div class="describe">
      <ul>
        <li>
          Butter
        </li>
        <li>
          Peanut Butter
        </li>
        <li>
          Confectioners Sugar
        </li>
        <li>
          Heavy Cream
        </li>
        <li>
          Vanilla Extract
        </li>
      </ul>
    </div>
    <div class="cook">
      ${detail.cook}
    </div>
`
document.getElementById('content').innerHTML = str

//click adding button, adding the item to the list page.
var plus = document.getElementsByClassName('plus')
plus[0].onclick = function () {
  let foodList = JSON.parse(localStorage.getItem('foodList'))
  foodList.push(detail)
  localStorage.setItem('foodList',JSON.stringify(foodList))
}