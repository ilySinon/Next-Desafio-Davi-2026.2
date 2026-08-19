'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Titulo } from '../../Titulos'
import { CardNormal } from '../../Cards'
import { Produto } from "@/types/data"

import 'swiper/css'
import 'swiper/css/navigation'

type ProdutosProps = {
  produtos: Produto[] 
}

export default function NovosCarrossel({produtos}: ProdutosProps) {
  return (
    <section className="w-full bg-[#f6f5ef] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <Titulo texto="NOVOS" />

        <div className="relative w-full">
          <button className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 -left-3 lg:-left-6 p-3 rounded-full bg-white shadow-md border border-gray-100 text-black hover:bg-gray-50 transition-colors z-10 disabled:opacity-50">
            <ChevronLeft size={24} />
          </button>

          <button className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 -right-3 lg:-right-6 p-3 rounded-full bg-white shadow-md border border-gray-100 text-black hover:bg-gray-50 transition-colors z-10 disabled:opacity-50">
            <ChevronRight size={24} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="w-full"
          >
            {produtos.map((produto) => (
              <SwiperSlide key={produto.id}>
                <CardNormal produto={produto} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}