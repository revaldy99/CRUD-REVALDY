//1.Database adalah  kumpulan data yang dikelola sedemikian rupa berdasarkan ketentuan tertentu yang saling berhubungan sehingga mudah dalam pengelolaannya.
//2.perbedaan SQL dan NO sql => NoSQL memiliki struktur data yang lebih fleksibel dan tidak memiliki tabel. Data disimpan dalam dokumen, grafik, atau key-value store. Sedangkan struktur data SQL adalah sistem database relasional. Ini berarti data disimpan dalam bentuk tabel dengan kolom dan baris.
//3.pernah,beajar menggunakan mysql, membuat table, relasi, dan perintah CRUD
// contoh query => 
// SELECT a.id,a.nama_depan,a.nama_belakang,a.tanggal_lahir,a.alamat from nasabah a
// LEFT join rekening b on a.id = b.id_nasabah 
// left join transaksi c on b.id = c.pengirim
// where c.tanggal = '2020-10-10' and c.status ='SUCCESS';
// 4.findall monggo db
// db.aku().find()
 