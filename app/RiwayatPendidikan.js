import RowRiwayat from "./components/rowRiwayat";
import foto from "./Aga.jpg";
import "./riezz-style.css";

function Profile() {
  return <img src={foto.src} alt="Aga Aprilyan Permana" className="fotoku" />;
}

export default function Gallery() {
  return (
    <section>
      <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-300 font-bold">CV. Online</h1>
        <h2 className="text-3x1">Aga Aprilyan Permana</h2>
        <Profile />
        <p>
          Nama Saya adalah Aga Aprilyan Permana mahasiswa semester 5, jurusan Sistem Informasi dari Universitas Ma'soem.
          Hobi saya adalah bermain bola.
        </p>

        {/* Riwayat Pendidikan */}
        <div className="container mx-auto p-2 text-center pt-20">
          <h2 className="font-bold text-2x1">Riwayat Pendidikan</h2>
        </div>
        <RowRiwayat jenjang="SD" sekolah="MI Cibeusi" tahun="2010 - 2016" />
        <RowRiwayat jenjang="SD" sekolah="MI Cibeusi" tahun="2010 - 2016" />
        <RowRiwayat jenjang="SD" sekolah="MI Cibeusi" tahun="2010 - 2016" />
        <RowRiwayat jenjang="SD" sekolah="MI Cibeusi" tahun="2010 - 2016" />
      </div>
    </section>
  );
}