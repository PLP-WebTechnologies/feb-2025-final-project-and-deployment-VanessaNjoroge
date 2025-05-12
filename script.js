// Light/Dark Mode Toggle
document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  });
  
  // Cart Logic
  const cart = [];
  
  function addToCart(product) {
    const existing = cart.find(item => item.name === product.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCart();
    alert(`${product.name} added to cart!`);
  }
  
  function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalDiv = document.getElementById('total');
    cartItemsDiv.innerHTML = '';
    let total = 0;
  
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
  
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="50" />
        <strong>${item.name}</strong> - $${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}
      `;
      cartItemsDiv.appendChild(itemDiv);
    });
  
    totalDiv.textContent = `Total: $${total.toFixed(2)}`;
  }
  
  // Attach event listeners to "Add to Cart" buttons on shop.html
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.product-card');
      const product = {
        name: card.dataset.name,
        price: parseFloat(card.dataset.price),
        image: card.dataset.img
      };
      addToCart(product);
    });
  });
  
