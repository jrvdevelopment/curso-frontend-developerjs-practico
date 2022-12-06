const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerBtn = document.querySelector('.menu')
const carritoBtn = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click', toggleDesktopMenu)
burgerBtn.addEventListener('click', toggleMobileMenu)
carritoBtn.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
  const isCarritoClosed = aside.classList.contains('inactive')

  if (!isCarritoClosed){
    aside.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){

  const isCarritoClosed = aside.classList.contains('inactive')

  if (!isCarritoClosed){
    aside.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){

  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

  if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
  }

  if (!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive')
  }

  aside.classList.toggle('inactive')
}

const productList = []

productList.push({
  name: 'Electric Bike',
  price: 120,
  image: 'https://pedegoelectricbikes.com/wp-content/uploads/2022/08/Avenue-ST-Carribean-Blue-Mags.jpg?%3E'
})
productList.push({
  name: 'Monitor',
  price: 230,
  image: 'https://images.philips.com/is/image/PhilipsConsumer/271E1SCA_55-IMS-es_AR?$jpglarge$&wid=960'
})
productList.push({
  name: 'Computadora',
  price: 350,
  image: 'https://bangho.vtexassets.com/arquivos/ids/161038/Pc-Gamer-GM-CARBIDE-i5-Nvidia-GTX-1660ti.jpg?v=637853575984600000'
})

function renderProducts (arr) {
  for (product of productList) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
  
    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)
  
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
  
    const productInfoDiv = document.createElement('div')
  
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price
  
    const productName = document.createElement('p')
    productName.innerText = product.name
  
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
  
    const productInfoFigure = document.createElement('figure')
  
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    productInfoFigure.appendChild(productImgCart)
  
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
  
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
  
    cardsContainer.appendChild(productCard)
  }
}

renderProducts(productList)