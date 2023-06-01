// List store the foods' information
var foodList = [
  {
    image: "1.jpg",
    title: "Blueberry Cheesecake",
    describe: "Description: Blueberry Cheesecake, made by blueberry and cheese. 485cal (per 100g)",
    cook: "Step 1 Preheat oven to 325°. In a small food processor, blend blueberries until no large chunks remain. Step 2 In a small saucepan over medium heat, add blueberry puree, sugar, and lemon juice. Bring to a boil, then reduce heat and let simmer until slightly reduced, stirring occasionally, 10 minutes. Let cool to room temperature. Step 3 Make crust......"
  },

  {
    image: "2.jpg",
    title: "Flora Cheesecake",
    describe: "Description: Flora Cheesecake, made by mango and cheese. 450cal (per 100g)",
    cook: "Step 1 Process biscuits in a food processor until finely crushed. Add butter and pulse to combine. Press over the base of a 20cm springform pan. Chill for 15 mins or until firm. Step 2 Meanwhile, use an electric mixer to beat the cream cheese and sugar in a bowl until smooth and creamy. Fold in the cream. Whisk the gelatine and hot water in a small bowl until the gelatine dissolves. Stir 1/4 cup of the cream cheese mixture into the gelatine mixture, then add to the remaining mixture and mix well....",
  },
  {
    image: "3.jpg",
    title: "Vanilla Cheesecake",
    describe: "Description: Vanilla Cheesecake, made by vanilla, milk and cheese. 460cal (per 100g)",
    cook: "Step 1 Release the base from a 22cm (base measurement) springform pan and invert. Line the base with non-stick baking paper, allowing the edges to overhang. Secure the base back into the pan. Step 2 Place the biscuits in the bowl of a food processor and process until finely crushed. Add the butter and process until well combined. Transfer to the lined pan. Use the back of a spoon or a straight-sided glass to spread and press the biscuit mixture firmly over ....",
  },
  {
    image: "4.jpg",
    title: "Cheesecake",
    describe: "Description: Cheesecake, made by egg, milk and cheese. 445cal (per 100g)",
    cook: "Step 1 Preheat oven to 160°C/140°C fan-forced. Place a baking tray in oven. Release the base from a 20cm (base) springform pan and turn over. Place baking paper over base, allowing a 5cm overhang. Secure the base, paper side-up, back in pan. Spray side of pan with canola oil spray. Step 2 Make pastry: Place flour, cornflour, sugar and butter in a food processor. Process until mixture resembles fine breadcrumbs. Add egg and milk. Process until mixture...",
  },
  {
    image: "5.jpg",
    title: "Chocolate Peanut Cake",
    describe: "Description: Chocolate Peanut Cake, made by chocolate, peanut and cheese. 490cal (per 100g)",
    cook: "Let's break down each component of this unapologetically indulgent cake: Dark Chocolate Cake: We're starting with the same cake batter from dark chocolate mousse cake and chocolate raspberry cake, both reader favorites. The cake batter is essentially the same as this chocolate cake, but we're using the sour cream variation because it produces a sturdier cake—certainly beneficial for tall and towering layers...",
  },
  {
    image: "7.jpg",
    title: "Berry Cheesecake",
    describe: "Description: Berry Cheesecake uses redberry or cherry with egg. 380cal (per 100g)",
    cook: "Step 1 Line the base and side of a round 20cm (base measurement) springform pan with baking paper. Step 2 Process the combined biscuit in a food processor until the mixture resembles fine breadcrumbs. Add butter and process until well combined. Place in the prepared pan and use a straight-sided glass to spread and press the biscuit mixture over the base and side. Place in the fridge for 30 minutes to chill...",
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

//click adding button, adding the item to the list page.
let plusList = document.getElementsByClassName("plus")
let arr = []
for (let index = 0; index < plusList.length; index++) {
  const element = plusList[index]
  element.onclick = function () {
    arr.push(foodList[index])
    localStorage.setItem("foodList", JSON.stringify(arr))
  }
}

//linking to each details pages of each type of cake.
let itemList = document.getElementsByClassName('item')
for (let index = 0; index < itemList.length; index++) {
  const element = itemList[index];
  element.onclick = function () {
    localStorage.setItem('detail',JSON.stringify(foodList[index]))
  }
}
