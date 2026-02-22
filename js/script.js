 // 1. Ambil data dari LocalStorage saat web pertama kali dibuka
// Jika belum ada data, kita mulai dari 0
let cartCount = localStorage.getItem('cartTotal') ? parseInt(localStorage.getItem('cartTotal')) : 0;

document.addEventListener('DOMContentLoaded', function() {
    // 2. Menambahkan badge ke Navbar
    const navbar = document.querySelector('.navbar-brand');
    const badge = document.createElement('span');
    badge.className = 'badge bg-danger ms-2';
    badge.id = 'cartBadge';
    badge.textContent = cartCount; // Menampilkan angka yang tersimpan
    navbar.appendChild(badge);

    // 3. Menambahkan fungsi klik ke semua tombol Add to Cart
    const cartButtons = document.querySelectorAll('.btn-success');
    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Tambah angka
            cartCount++;
            
            // Simpan angka terbaru ke LocalStorage
            localStorage.setItem('cartTotal', cartCount);
            
            // Update tampilan di layar
            document.getElementById('cartBadge').textContent = cartCount;
            
            alert('Produk berhasil ditambahkan ke memori!');
        });
    });
});