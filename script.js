 let cartCount = 0;

        // Add cart badge to navbar
        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.querySelector('.navbar-brand');
            const badge = document.createElement('span');
            badge.className = 'badge bg-danger ms-2';
            badge.id = 'cartBadge';
            badge.textContent = cartCount;
            navbar.appendChild(badge);

            // Add click listeners to all cart buttons
            const cartButtons = document.querySelectorAll('.btn-success');
            cartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    cartCount++;
                    document.getElementById('cartBadge').textContent = cartCount;
                    alert('Produk berhasil ditambahkan!');
                });
            });
        });