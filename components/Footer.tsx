'use client'
import React from 'react'
import { RainbowButton } from './ui/RainbowButton'
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input'


export const Footer = () => {
    const placeholders = [
        "Apa Cita - Cita Kamu ?",
        "Mengapa Ambil Pendidikan Teknik Informatika?",
        "Bahasa Pemrograman Kesukaan Kamu Apa ?",
        "Bagaimana Plan Kamu Kedepan ?",
      ];
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
      };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
      };
  return (
    <div className='py-20 text-center'>
        <RainbowButton>
            Mari Kita Belajar Bareng 🔥
        </RainbowButton>
        <h1 className='heading font-extrabold text-center justify-center leading-relaxed '> "Masa Depan Adalah Milik Mereka Yang Percaya Dengan Impiannya"
        </h1>
        <p className='text-center text-[#a3a3a3] mx-auto max-w-[700px] text-xl/relaxed text-muted-foreground justify-center mt-5 mb-5'>Ada yang ingin disampaikan? 
        Tulis pesan Anda di bawah, dan mari kita bahas tentang teknologi baru dan mungkin kita bisa mengaplikasikannya hehe. Mohon jangan spam ya guys
        </p>
        <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
    
  )
}

export default Footer