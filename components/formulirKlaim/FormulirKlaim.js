import React from "react";
import Card_Form from "../base/Card_Form";
import Card_Forms from "../base/Card_Forms";
// import { GenIcon } from "react-icons";

export default function FormulirKlaim() {
  return (
    <>
      <section className="p-8">
        <div className="flex mb-6 ">
          <p className="text-2xl font-semibold text-mn">Registrasi Klaim</p>
        </div>
        <div className="grid grid-cols-2 gap-10 mb-6">
          <Card_Form>
            <p className="text-l text-label ">Formulir Klaim</p>
          </Card_Form>
          <Card_Form>
            <p className="text-l text-label ">Formulir Klaim</p>
          </Card_Form>
        </div>
        <div className="p-2 bg-line flex justify-center mb-6">
          <p className="text-l text-mn font-semibold">
            Registrasi Klaim: B 1234 EFG
          </p>
        </div>
        <Card_Forms className={`mb-6`}>
          <div className="grid grid-cols-2 gap-1 ">
            <span className="text-m text-mn font-semibold">
              <p>No. Polisi</p>
              <p>Nama Tertanggung</p>
              <p>No. Polis</p>
              <p>Periode</p>
              <p>Nilai Pertanggungan</p>
              <p>Buatan/Merk</p>
              <p>Tahun Pembuatan</p>
              <p>No. Mesin</p>
              <p>No. Rangka</p>
            </span>
            <span className="text-m text-label font-semibold">
              <p>B 1234 EFG</p>
              <p>Pajar Pribadi</p>
              <p>VCL2007001</p>
              <p>1 Juli 2020-30 Juli 2021</p>
              <p>Rp 120.000.000</p>
              <p>Jepang/Honda</p>
              <p>2019</p>
              <p>NHX120000</p>
              <p>MCM24000</p>
            </span>
          </div>
        </Card_Forms>
        <Card_Forms>
          <div className=" ">
            <span className="text-m text-mn font-semibold">
              <p>No. Polisi</p>
              <p>Nama Tertanggung</p>
              <p>No. Polis</p>
              <p>Periode</p>
              <p>Nilai Pertanggungan</p>
              <p>Buatan/Merk</p>
              <p>Tahun Pembuatan</p>
              <p>No. Mesin</p>
              <p>No. Rangka</p>
            </span>
          </div>
        </Card_Forms>
      </section>
    </>
  );
}
