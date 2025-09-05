import bgImg from "../assets/imgs/hero/bgHeroInfluencer.webp";
import logo from "../assets/imgs/logo/logo.webp";
import imagemAbout from "../assets/imgs/about/aboutImg.webp";
import { infos } from "./content";
import { Shield } from "lucide-react";
import { File } from "lucide-react";
import { Banknote } from "lucide-react";
import { FileKey2 } from "lucide-react";
import { Scale } from "lucide-react";
import { Handshake } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { Accessibility } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { Ban } from "lucide-react";
import { IdCard } from "lucide-react";
import { Gavel } from "lucide-react";

// import img1 from "../assets/imgs/about/image1.webp";
// import img2 from "../assets/imgs/about/image2.webp";
// import img3 from "../assets/imgs/about/image3.webp";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title:
      "Teixeira Silva Advocacia | Especialista em Usucapião em Campinas - SP",
    description:
      "O escritório Teixeira Silva Advocacia, em Campinas - SP, oferece soluções jurídicas especializadas usucapião. Garantimos atendimento eficiente, seguro e personalizado para proteger seus direitos e formalizar a propriedade do seu imóvel.",
    keywords:
      "Teixeira Silva Advocacia, Advogado em Campinas, Advocacia em Campinas, Pensão Alimentícia Campinas, Usucapião Campinas, Direito de Família Campinas, Direito Imobiliário Campinas, Regularização de Imóveis Campinas, Processo de Usucapião, Ação de Pensão Alimentícia, Advogado de Família, Advogado Imobiliário, Consultoria Jurídica Campinas, Assessoria Jurídica em Campinas, Direitos dos Filhos, Regularização Patrimonial, Advogado Especialista em Usucapião, Defesa de Pensão Alimentícia, Teixeira Silva Advogado, Serviços Jurídicos em Campinas.",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    textArea: {
      title: (
        <h1>
          Usucapião: transforme posse em
          <span className="text-lpTitle"> propriedade definitiva!</span>
        </h1>
      ),
      subtitle:
        "Se você mora em um imóvel há anos sem escritura, pode ter direito à propriedade por usucapião. Regularize sua situação e conquiste segurança jurídica.",
      buttonLabel: "Quero regularizar meu imóvel por usucapião",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "QUEM TEM DIREITO À USUCAPIÃO?",
      title:
        "Saiba em quais situações você pode conquistar a propriedade do seu imóvel através da usucapião.",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-house-icon lucide-house"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        ),
        title: "Imóveis abandonados",
        description:
          "Quem ocupa um imóvel abandonado, de forma pacífica e contínua, pode regularizar a posse e garantir a propriedade por usucapião.",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-users-icon lucide-users"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <path d="M16 3.128a4 4 0 0 1 0 7.744" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <circle cx="9" cy="7" r="4" />
          </svg>
        ),
        title: "Herdeiros e terrenos de família",
        description:
          "Familiares que ocupam terrenos há muitos anos, mesmo sem escritura, podem requerer a usucapião para formalizar a titularidade do bem.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-building-icon lucide-building"
          >
            <path d="M12 10h.01" />
            <path d="M12 14h.01" />
            <path d="M12 6h.01" />
            <path d="M16 10h.01" />
            <path d="M16 14h.01" />
            <path d="M16 6h.01" />
            <path d="M8 10h.01" />
            <path d="M8 14h.01" />
            <path d="M8 6h.01" />
            <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
            <rect x="4" y="2" width="16" height="20" rx="2" />
          </svg>
        ),
        title: "Usucapião urbana",
        description:
          "Quem mora em imóveis urbanos de forma contínua, pacífica e sem contestação pode obter a propriedade legal por usucapião urbana.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-trees-icon lucide-trees"
          >
            <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
            <path d="M7 16v6" />
            <path d="M13 19v3" />
            <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
          </svg>
        ),
        title: "Ocupantes de imóveis rurais",
        description:
          "Quem ocupa terras rurais de forma produtiva e sem oposição tem direito de solicitar a usucapião rural e assegurar a propriedade definitiva.",
      },
    },
  },
  about: {
    bgImg: bgImg,
    // imagesGaleria: {
    //   imagem1: img1,
    //   imagem2: img2,
    //   imagem3: img3,
    // },
    imgAbout: {
      img: imagemAbout,
    },
    logo: {
      logoImg: logo,
      alt: "logomarca",
    },
    sectionHeader: {
      miniTag: "USUCAPIÃO SEGURA",
      title: "Transforme posse em propriedade definitiva",
    },
    paragraph: (
      <p>
        Se você ocupa um imóvel há anos, pode ter direito à propriedade por
        usucapião. Esse processo permite regularizar a situação do seu bem e
        conquistar segurança jurídica.
        <br />
        <br />
        Atuo de forma ágil e estratégica para que você obtenha o reconhecimento
        legal do que já é seu por direito.
      </p>
    ),
    buttonLabel: "Regularize seu imóvel por usucapião",
    ctaButtonAriaLabel: "Botão de Contato",
  },
  steps: {
    miniTag: "A_Definir",
    title: "A_Definir",
    subtitle: "A_Definir",
    alt: "A_Definir",
    cards: {
      card1: {
        stepNumber: 1,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      card2: {
        stepNumber: 2,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      card3: {
        stepNumber: 3,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      buttonLabel: "A_Definir",
      ariaLabel: "A_Definir",
    },
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A ESCOLHA CERTA",
      title: "Por que escolher nosso escritório para conduzir seu usucapião?",
    },
    cards: {
      card1: {
        icon: <Gavel width={32} height={32} />,
        title: "Segurança jurídica garantida",
        description:
          "A usucapião é o caminho legal para conquistar a propriedade do imóvel ocupado. Com nosso suporte, você assegura que cada etapa seja cumprida corretamente, evitando riscos e problemas futuros.",
      },
      card2: {
        icon: <Shield width={32} height={32} />,
        title: "Posse reconhecida de forma definitiva",
        description:
          "Transformamos sua posse em propriedade formalizada. Atuamos com respaldo jurídico para que seu direito seja reconhecido e registrado, trazendo tranquilidade e controle total sobre o imóvel.",
      },
      card3: {
        icon: <Handshake width={32} height={32} />,
        title: "Valorização do seu patrimônio",
        description:
          "Regularizar o imóvel por usucapião aumenta sua segurança patrimonial e valoriza o bem. O que antes era apenas posse se torna um direito sólido e reconhecido por lei.",
      },
      card4: {
        icon: <Scale width={32} height={32} />,
        title: "Prevenção de disputas e conflitos",
        description:
          "Com a propriedade regularizada, você evita disputas com vizinhos, herdeiros ou terceiros. Nosso acompanhamento garante um processo transparente, assegurando estabilidade jurídica para você e sua família.",
      },
    },
  },
  video: {
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "NÃO ESPERE MAIS",
      title: "Usucapião: regularize seu imóvel agora!",
      subtitle: (
        <p className="opacity-80">
          Se você ocupa um imóvel há anos, pode conquistar a propriedade
          definitiva por usucapião. Atuamos de forma rápida e segura para
          garantir seus direitos e formalizar a posse legal do seu bem. Não adie
          — transforme sua posse em propriedade hoje mesmo!
        </p>
      ),
    },
    buttonLabel: "Quero regularizar por usucapião",
    ctaButtonAriaLabel: "Botão de Contato",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.domain}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
    },
    card4: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phoneSecundario.ddd}) ${infos.phoneSecundario.firstPart}-${infos.phoneSecundario.secondPart}`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};
export default contentLp01;
