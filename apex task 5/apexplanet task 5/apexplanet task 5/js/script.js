let cart = [], wishlist = [], orders = [], recentlyViewed = [];

function displayProducts(category = null, searchText = '') {
  const section = document.getElementById('products');
  section.innerHTML = '';

  let filtered = products;
  if (category) filtered = filtered.filter(p => p.category === category);
  if (searchText) filtered = filtered.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()));

  if (filtered.length === 0) {
    section.innerHTML = "<h3>No products found.</h3>";
    return;
  }

  filtered.forEach(p => {
    section.innerHTML += `
      <div class="card">
        <img src="${p.img}" alt="${p.name}" onclick="showPopup(${p.id})">
        <div class="card-details">
          <h3>${p.name}</h3>
          <p><strong>Price:</strong> ${p.price}</p>
          <p><strong>Material:</strong> ${p.material}</p>
          <p><strong>Review:</strong> ${p.review}</p>
          <p><strong>Size:</strong> ${p.size}</p>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
          <button onclick="addToWishlist(${p.id})">Wishlist</button>
        </div>
      </div>`;
  });
}

function filterCategory(category) {
  displayProducts(category);
}

function searchProducts() {
  const text = document.getElementById('search').value;
  displayProducts(null, text);
}

function addToCart(id) {
  if (!cart.includes(id)) cart.push(id);
  alert("Added to cart");
}

function addToWishlist(id) {
  if (!wishlist.includes(id)) wishlist.push(id);
  alert("Added to wishlist");
}

function removeFromList(id, listName) {
  if (listName === 'cart') {
    cart = cart.filter(item => item !== id);
    showCart();
  } else if (listName === 'wishlist') {
    wishlist = wishlist.filter(item => item !== id);
    showWishlist();
  }
}

function showCart() {
  const section = document.getElementById('products');
  section.innerHTML = '<h2>🛒 Your Cart</h2>';
  const items = products.filter(p => cart.includes(p.id));
  if (items.length === 0) section.innerHTML += "<p>No items in cart</p>";
  items.forEach(p => {
    section.innerHTML += `<div class="card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p><strong>Price:</strong> ${p.price}</p>
      <button onclick="removeFromList(${p.id}, 'cart')">❌ Remove</button>
    </div>`;
  });
}

function showWishlist() {
  const section = document.getElementById('products');
  section.innerHTML = '<h2>💖 Your Wishlist</h2>';
  const items = products.filter(p => wishlist.includes(p.id));
  if (items.length === 0) section.innerHTML += "<p>No items in wishlist</p>";
  items.forEach(p => {
    section.innerHTML += `<div class="card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p><strong>Price:</strong> ${p.price}</p>
      <button onclick="removeFromList(${p.id}, 'wishlist')">❌ Remove</button>
    </div>`;
  });
}

function showOrders() {
  const section = document.getElementById('products');
  section.innerHTML = '<h2>📦 Your Orders</h2>';
  if (orders.length === 0) {
    section.innerHTML += "<p>No orders placed yet.</p>";
    return;
  }
  orders.forEach(o => {
    section.innerHTML += `<div class="card">
      <img src="${o.product.img}">
      <h3>${o.product.name}</h3>
      <p><strong>Price:</strong> ${o.product.price}</p>
      <p><strong>Order Placed:</strong> ${o.orderDate}</p>
      <p><strong>Delivery By:</strong> ${o.deliveryDate}</p>
      <button onclick="showPopup(${o.product.id}, true)">✏️ Edit Order</button>
    </div>`;
  });
}

function showRecentlyViewed() {
  const section = document.getElementById('products');
  section.innerHTML = '<h2>👀 Recently Viewed Products</h2>';
  if (recentlyViewed.length === 0) {
    section.innerHTML += "<p>No products viewed yet.</p>";
    return;
  }

  recentlyViewed.slice().reverse().forEach(p => {
    section.innerHTML += `<div class="card">
      <img src="${p.img}" onclick="showPopup(${p.id})">
      <h3>${p.name}</h3>
      <p><strong>Price:</strong> ${p.price}</p>
    </div>`;
  });
}

function showPopup(id, isEdit = false) {
  const p = products.find(p => p.id === id);
  const popup = document.getElementById("popup");
  const content = document.getElementById("popupContent");

  // Track recently viewed
  if (!recentlyViewed.find(item => item.id === p.id)) {
    recentlyViewed.push(p);
    if (recentlyViewed.length > 5) recentlyViewed.shift();
  }

  const existingOrder = orders.find(o => o.product.id === id);

  content.innerHTML = `
    <span class="close" onclick="closePopup()">&times;</span>
    <div style="text-align:center;">
      <h2>${p.name}</h2>
      <img src="${p.img}" style="width: 150px; height: 150px; object-fit:cover; border-radius: 8px; margin-bottom: 10px;">
      <p><strong>Price:</strong> ${p.price}</p>
      <p><strong>Material:</strong> ${p.material}</p>
      <p><strong>Review:</strong> ${p.review}</p>
      <p><strong>Size:</strong> ${p.size}</p>
      <div style="margin-top: 10px;">
        <button onclick="addToCart(${p.id})">Add to Cart</button>
        <button onclick="addToWishlist(${p.id})">Add to Wishlist</button>
        <button onclick="toggleBuyNow(${p.id})">Buy Now</button>
      </div>
    </div>

    <div id="buyOptions-${p.id}" class="buy-now-section" style="display: none; margin-top: 20px;">
      <h3>Enter Delivery Details</h3>
      <input type="text" id="name-${p.id}" placeholder="Full Name" value="${existingOrder ? existingOrder.name : ''}">
      <input type="text" id="phone-${p.id}" placeholder="Phone Number" value="${existingOrder ? existingOrder.phone : ''}">
      <input type="text" id="pincode-${p.id}" placeholder="Pincode" value="${existingOrder ? existingOrder.pincode : ''}">
      <textarea id="address-${p.id}" placeholder="Full Address">${existingOrder ? existingOrder.address : ''}</textarea>

      <h3>Select Payment Method</h3>
      <label><input type="radio" name="payment-${p.id}" value="cod"> Cash on Delivery</label><br>
      <label><input type="radio" name="payment-${p.id}" value="online"> Online Payment</label>

      <div id="onlineApps-${p.id}" style="display:none; margin-top: 10px;">
        <h4>Select Payment App</h4>
        <label><input type="radio" name="app-${p.id}" value="GPay"> GPay</label><br>
        <label><input type="radio" name="app-${p.id}" value="PhonePe"> PhonePe</label><br>
        <label><input type="radio" name="app-${p.id}" value="Paytm"> Paytm</label>
      </div>

      <button class="place-order-btn" onclick="confirmBuy(${p.id})" style="margin-top: 15px;">Place Order</button>
    </div>

    <div style="text-align:center; margin-top: 20px;">
      <button onclick="closePopup()" style="background-color:#e91e63; color:white; border:none; padding:10px 20px; border-radius:5px;">⬅ Back</button>
    </div>
  `;

  popup.style.display = 'block';

  setTimeout(() => {
    const paymentRadios = document.getElementsByName(`payment-${p.id}`);
    paymentRadios.forEach(radio => {
      radio.onclick = () => {
        document.getElementById(`onlineApps-${p.id}`).style.display = radio.value === 'online' ? 'block' : 'none';
      };
    });

    if (isEdit) toggleBuyNow(p.id);
  }, 100);
}

function toggleBuyNow(id) {
  const section = document.getElementById(`buyOptions-${id}`);
  section.style.display = 'block';
}

function confirmBuy(id) {
  const name = document.getElementById(`name-${id}`).value.trim();
  const phone = document.getElementById(`phone-${id}`).value.trim();
  const pincode = document.getElementById(`pincode-${id}`).value.trim();
  const address = document.getElementById(`address-${id}`).value.trim();
  const payment = document.querySelector(`input[name="payment-${id}"]:checked`);

  if (!name || !phone || !pincode || !address || !payment) {
    alert("Please fill all fields and select a payment method.");
    return;
  }

  let method = payment.value;
  if (method === "online") {
    const app = document.querySelector(`input[name="app-${id}"]:checked`);
    if (!app) {
      alert("Please select a payment app.");
      return;
    }
    method = `Online (${app.value})`;
  }

  const product = products.find(p => p.id === id);
  const today = new Date();
  const orderDate = today.toLocaleDateString("en-GB");
  const deliveryDate = new Date(today.setDate(today.getDate() + 5)).toLocaleDateString("en-GB");

  const existingOrderIndex = orders.findIndex(o => o.product.id === id);
  const orderData = {
    product,
    name, phone, pincode, address,
    paymentMethod: method,
    orderDate,
    deliveryDate
  };

  if (existingOrderIndex !== -1) {
    orders[existingOrderIndex] = orderData;
    alert("✅ Order Updated!");
  } else {
    orders.push(orderData);
    alert("✅ Order Placed!");
  }

  closePopup();
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  document.getElementById("popupContent").innerHTML = "";
}

window.onload = () => displayProducts();
