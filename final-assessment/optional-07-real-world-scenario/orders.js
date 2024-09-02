// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menampung data orders
let orders = [];

// Fungsi untuk menambah pesanan baru
function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0); // Menghitung total harga dari items
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu', // Status awal 'Menunggu'
  };
  orders.push(newOrder);
}

// Fungsi untuk mengupdate status pesanan berdasarkan ID
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// Fungsi untuk menghitung total revenue dari pesanan yang berstatus 'Selesai'
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan berdasarkan ID
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
