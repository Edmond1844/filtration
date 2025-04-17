function cartRenderItem(item) {
    let cartItems = localStorage.getItem('array'); 
    let arrayCart = [];

    if (cartItems) {
        arrayCart = JSON.parse(cartItems);
    } else {
        console.log('Корзина пуста');
    }

    let cartList = document.querySelector('.filtration__cart-list');
    cartList.innerHTML = ''; 

    arrayCart.forEach((item, index) => {
        let cartItem = document.createElement('div');
        cartItem.className = 'filtration__cart-item';

        let itemImage = document.createElement('img');
        itemImage.src = item.img;
        itemImage.width = 250;
        itemImage.height = 150;

        let itemName = document.createElement('p');
        itemName.className = 'filtration__cart-item-name';
        itemName.textContent = item.productName;

        let itemPrice = document.createElement('p');
        itemPrice.className = 'filtration__cart-item-price';
        itemPrice.textContent = item.price;

        let btnRemove = document.createElement('button');
        btnRemove.className = 'filtration__cart-remove-btn';
        btnRemove.textContent = 'Удалить';
        btnRemove.addEventListener('click', () => {
            arrayCart.splice(index, 1);
            localStorage.setItem('array', JSON.stringify(arrayCart));
            cartRenderItem();
        });

        cartItem.append(itemImage, itemName, itemPrice, btnRemove);
        cartList.appendChild(cartItem);
    });
}   

export default cartRenderItem;