import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import CardServico from "../components/CardServico";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Servicos.css';

function Servicos() {
  const listaServicos = [
    {
      titulo: "Consultoria",
      descricao: "Ajudamos empresas a crescer com estratégias inovadoras e personalizadas.",
      icone: "💡"
    },
    {
      titulo: "Desenvolvimento Web",
      descricao: "Criamos aplicações modernas, responsivas e de alta performance.",
      icone: "💻"
    },
    {
      titulo: "Automação",
      descricao: "Automatizamos processos para aumentar sua eficiência e produtividade.",
      icone: "⚙️"
    },
    {
      titulo: "Marketing Digital",
      descricao: "Estratégias completas para aumentar sua presença online.",
      icone: "📱"
    },
    {
      titulo: "Cloud Computing",
      descricao: "Soluções em nuvem escaláveis e seguras para seu negócio.",
      icone: "☁️"
    },
    {
      titulo: "Segurança da Informação",
      descricao: "Proteja seus dados com nossas soluções avançadas de segurança.",
      icone: "🔒"
    }
  ];

  return (
    <section className="servicos">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Soluções personalizadas para impulsionar seu negócio
        </p>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="servicos-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
        >
          {listaServicos.map((servico, index) => (
            <SwiperSlide key={index} className="servico-slide">
              <CardServico
                titulo={servico.titulo}
                descricao={servico.descricao}
                icone={servico.icone}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="servicos-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Projetos Entregues</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Clientes Satisfeitos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Anos de Experiência</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicos;