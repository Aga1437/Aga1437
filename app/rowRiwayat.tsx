import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    <div className="container mx-auto p-2 text-center">
        <div className="container mx-auto p-2 text-center py-20">
            <h2 className="text 2xl">Riwayar Pendidikan</h2>
            </div>
            <RowRiwayat jenjeng="SD" Sekolah="SDN Kencana Indah 1" tahun="2009" />
            <RowRiwayat jenjeng="SMP" Sekolah="SMPN 3 Rancaekek" tahun="2015" />
            <RowRiwayat jenjeng="SMK" Sekolah="SMK Lugina" tahun="2018" />
            <RowRiwayat jenjeng="Kuliah" Sekolah="Masoem University" tahun="2022" />
            </div>
          );
        }            