import React from 'react';
import foto from "./Aga.jpg";
import "./Aga-style.css";
import RiwayatPendidikan from './RiwayatPendidikan'; 

function Profile() {
  return <img src={foto.src} alt="Aga Aprilyan Permana" className="fotoku" />;
  }

  export default function Gallery() {
    const riwayatPendidikan = [
      { jenjang: 'SD', namaSekolah: 'SDN Kencana Indah 1', tahun: '2010-2016' },
      { jenjang: 'SMP', namaSekolah: 'SMPN 3 Rancaekek', tahun: '2016-2019' },
      { jenjang: 'SMA', namaSekolah: 'SMK Lugina Rancaekek', tahun: '2019-2022' },
    ];
  
    return (
      <section>
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-300 font-bold">CV. Online</h1>
          <h2 className="text-3x1">Aga Aprilyan Permana</h2>
          <Profile />
          <p>
            Saya adalah mahasiswa semester 5, jurusan sistem informasi, Ma'soem University.
            Cita-cita saya ingin menjadi programmer. Saya juga ingin masuk surga bersama keluarga saya.
          </p>
  
          <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="font-bold text-2x1">Riwayat Pendidikan</h2>
            {riwayatPendidikan.map((pendidikan, index) => (
              <RiwayatPendidikan key={index} pendidikan={pendidikan} /> 
            ))}
          </div>
        </div>
      </section>
    );
  }