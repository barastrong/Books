let buku = {
    1:  {
      nama: "Helloworld",
      year: 1999,
      genre: "Action",
      author: "John Doe"
    }
  };
  
  function addBuku(id, nama, year, genre, author) {
    if (buku[id]) {
      console.log(`Buku dengan ID ${id} sudah ada!`);
    } else {
      buku[id] = { nama, year, genre, author };
      console.log(`Buku ${nama} berhasil ditambahkan!`);
    }
  }
  
  function getBuku(id) {
    if (buku[id]) {
      return buku[id];
    } else {
      console.log(`Buku dengan ID ${id} tidak ditemukan.`);
      return null;
    }
  }
  
  function updateBuku(id, updateNama, updateYear, updateGenre, updateAuthor) {
    if (buku[id]) {
      buku[id].nama = updateNama || buku[id].nama;
      buku[id].year = updateYear || buku[id].year;
      buku[id].genre = updateGenre || buku[id].genre;
      buku[id].author = updateAuthor || buku[id].author;
      console.log(`Buku dengan ID ${id} berhasil diupdate!`);
    } else {
      console.log(`Buku dengan ID ${id} tidak ditemukan.`);
    }
  }
  
  function deleteBuku(id) {
    if (buku[id]) {
      delete buku[id];
      console.log(`Buku dengan ID ${id} berhasil dihapus.`);
    } else {
      console.log(`Buku dengan ID ${id} tidak ditemukan.`);
    }
  }
  
  addBuku(2, "Harry Potter", 2000, "Fantasy", "J.K. Rowling");
  console.log(getBuku(1));
  updateBuku(2, "Harry Potter and the Chamber of Secrets", 2002, "Fantasy", "J.K. Rowling");
  console.log(getBuku(2));
  deleteBuku(1);
  console.log(buku);
  