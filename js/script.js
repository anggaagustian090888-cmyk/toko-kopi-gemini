// 1. Ambil data tersimpan (Total Harga & Daftar Nama Barang)
let totalBelanja = localStorage.getItem('totalHarga') ? parseInt(localStorage.getItem('totalHarga')) : 0;
let listProduk = JSON.parse(localStorage.getItem('listProduk')) || [];

document.addEventListener('DOMContentLoaded', function() {
    const badge = document.getElementById('cartBadge');
    
    // 2. Tampilkan data awal saat halaman dibuka
    updateTampilan();

    // 3. Logika Klik Tombol Beli
    const cartButtons = document.querySelectorAll('.btn-beli');
    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nama = this.getAttribute('data-name');
            const harga = parseInt(this.getAttribute('data-price'));

            // Tambahkan ke sistem
            totalBelanja += harga;
            listProduk.push({ nama: nama, harga: harga });

            // Simpan ke memori browser
            localStorage.setItem('totalHarga', totalBelanja);
            localStorage.setItem('listProduk', JSON.stringify(listProduk));

            updateTampilan();
            alert(`${nama} berhasil masuk struk!`);
        });
    });

    // 4. Fungsi untuk update Badge dan isi Struk Modal
    function updateTampilan() {
        // Update Badge Navbar
        if (badge) {
            badge.textContent = `Rp ${totalBelanja.toLocaleString('id-ID')}`;
        }

        // Update Daftar di dalam Modal
        const daftarHtml = document.getElementById('daftarBelanja');
        const totalModal = document.getElementById('totalModal');

        if (daftarHtml && totalModal) {
            daftarHtml.innerHTML = ''; 
            listProduk.forEach((item, index) => {
                daftarHtml.innerHTML += `
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        ${item.nama}
                        <span>Rp ${item.harga.toLocaleString('id-ID')}</span>
                    </li>`;
            });
            totalModal.textContent = `Rp ${totalBelanja.toLocaleString('id-ID')}`;
        }
    }
});

// 5. Fungsi Reset (untuk tombol Kosongkan di modal)
function resetKeranjang() {
    if (confirm('Kosongkan struk belanja?')) {
        localStorage.clear();
        location.reload(); // Refresh halaman agar data bersih kembali
    }
}

function kirimWA() {
    let nomorWA = "6281234567890"; // Ganti dengan nomor WhatsApp kamu
    let pesan = "Halo Bouthop Coffee! Saya mau pesan:%0A";
    
    listProduk.forEach((item) => {
        pesan += `- ${item.nama} (Rp ${item.harga.toLocaleString('id-ID')})%0A`;
    });
    
    pesan += `%0A*Total Bayar: Rp ${totalBelanja.toLocaleString('id-ID')}*`;
    
    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, '_blank');
}