//Components
import { Accordion } from '../../../components/organisms/landingComponents/landingHomeComponents/Accordion';
import { LandingFooter } from '../../../components/organisms/footer/LandingFooter';
import { LandingHeader } from '../../../components/organisms/header/LandingHeader';
import CardLanding from '../../../components/organisms/cardLanding/CardLanding';
//Data for Cards
const card_1 = {
  title: "Licencia semestral",
  price: "6'600.000",
  listItems: [
    "Acceso a la plataforma automatizada de medición de huella de carbono.",
    "Usuarios + Roles Ilimitados.",
    "Medir 3 centro de trabajo.",
    "Acceso a 5 cálculo",
    "Inventario semestral de gases de efecto invernadero de la organización, generado según los estándares de la norma: GHG Protocol, ISO 14064-1 2020 y GRI.",
    "Alcance 1 y 2.",
    "Resumen de emisiones.",
    "4 horas de servicio de acompañamiento para consultoría y asesoramiento.",
  ],
};

const card_2 = {
  title: "Licencia mensual",
  price: "650.000",
  listItems: [
    "Acceso a la plataforma automatizada de medición de huella de carbono.",
    "2 usuarios / roles.",
    "Medir 1 centro de trabajo.",
    "Acceso a 1 cálculo",
    "Inventario mensual de gases de efecto invernadero de la organización, generado según los estándares GHG Protocol, ISO 14064-1 2020 y GRI",
    "Alcance 1 y 2.",
    "Resumen de emisiones.",
  ],
};

const cardla_3 = {
  title2: "Licencia anual",
  price2: "12'600.000 ",
  listItems2: [
    "Acceso a la plataforma automatizada de medición de huella de carbono.",
    "Usuarios + Roles Ilimitados.",
    "Acceso para 10 proyectos.",
    "Inventario anual de gases de efecto invernadero de la organización, generado según los estándares de la norma: GHG Protocol, ISO 14064-1 2020 y GRI.",
    "Alcance 1, 2 y 3 (sin cálculo de movilidad sostenible).",
    "Resumen de emisiones.",
    "6 horas de servicio de acompañamiento para consultoría y asesoramiento.",
    "Estrategias de mitigación.",
  ],
};

//Data for Accordion
const sons = [
  {
    id: 1,
    title: '¿Cómo defino un centro de trabajo?',
    description: 'También definidas como instalaciones, se definen dentro de los límites de la organización para el cálculo de la huella de carbono. Dentro de estos límites se encuentran el conjunto de instalaciones, actividades o procesos en los cuales se desea llevar el control de las emisiones, ya sea porque la organización tiene un control operativo sobre estas, o porque tiene una participación en capital correspondiente. (ISO, 2020).<br><br>Carbonlytics Frootprint ofrece la posibilidad de desarrollar el cálculo de la huella de carbono para varias sedes o procesos dentro de tu organización de una manera ágil y ordenada. ',
  },
  {
    id: 2,
    title: '¿Qué es un plan de mitigación?',
    description: 'Según el Ministerio del Medio Ambiente y Desarrollo Sostenible de Colombia, un plan de mitigación es un conjunto de acciones, programas y políticas que permitirán reducir los gases de efecto invernadero respecto a una línea base, en el corto, mediano y largo plazo. (MinAmbiente, 2018)',
  },
  {
    id: 3,
    title: '¿Qué son los Alcance 1, 2 y 3?',
    description: 'Para la medición de la huella de carbono se hace una diferenciación entre emisiones directas y emisiones indirectas.<br><br>Las emisiones directas provienen de fuentes de propiedad de la organización o que están bajo su control.<br><br>Las emisiones indirectas son resultado de las actividades de la organización.<br><br>A continuación, se muestra su clasificación en alcances.<br><br>Según se enuncia en el GHG Protocol, el alcance 1 son todas las emisiones directas que son propiedad de la empresa o que están bajo su control. Esto incluye la energía in situ, como el gas natural y el combustible, los refrigerantes y las emisiones procedentes de la combustión en calderas y hornos propios o controlados, así como las emisiones de los vehículos de flota. También se abarcan las emisiones de proceso que se liberan durante los procesos industriales y la fabricación, como por ejemplo humos de la fábrica y los productos químicos.<br><br>El alcance 2 comprende las emisiones indirectas asociadas a la generación de electricidad adquirida y consumida por la empresa, como el vapor de la electricidad, la calefacción o la refrigeración.<br><br>En el alcance 3 se consideran todas las emisiones indirectas que se producen en la cadena de valor de una empresa y que no están bajo su control o propiedad. Como el uso de productos y servicios, transporte de materias primas, uso de combustibles a través de servicios ofrecidos por terceros, entre otros. (GHG Protocol, 2019)<br><br>En Carbonlytics Footprint es posible tener un cálculo confiable de cada uno de estos alcances para tu organización.',
  },
  {
    id: 4,
    title: '¿Qué son los estándares de medición de huella de carbono?',
    description: 'Los estándares internacionales de medición de huella de carbono permiten cuantificar y reportar las emisiones directas e indirectas de gases de efecto invernadero a diferentes escalas. A escala organizacional, los estándares más usados son el GHG Protocol, ISO 14064-1, el estándar GRI 305, entre otros.<br><br>Carbonlytics Footprint es capaz de reportar en estos estándares el inventario de gases de efecto invernadero de tu organización.',
  },
];

export const LandingPrecios = () => {
  return (
    <div className="LandingPrecios bg-white w-full text-left text-lg text-darkslategray font-sora flex flex-col">

      <LandingHeader />

      <div className=" h-[1100px] flex flex-col items-center pt-10 gap-8 bg-primary-buttonBg1 mt-20 my-16">

        <h1 className="fzp text-49xl tracking-[1.36px] leading-[76px] font-extrabold text-primary-title1">
          Elige el mejor plan para tu empresa
        </h1>

        <p className=" tracking-[0.09px] text-primary-title2">
          <span>{`Aquí comienza el camino hacia el `}</span>
          <b>carbono neutro</b>
        </p>

        <div className="ContenedorCartas text-21xl flex justify-center gap-8 w-[90%] max-w-[1300px]">
          <CardLanding
            title={card_2.title}
            price={card_2.price}
            listItems={card_2.listItems}
          />
          <CardLanding
            title={cardla_3.title2}
            price={cardla_3.price2}
            listItems={cardla_3.listItems2}
            cardFlag={true}
          />
          <CardLanding
            title={card_1.title}
            price={card_1.price}
            listItems={card_1.listItems}
          />
        </div>
      </div>

      <Accordion
        title='Preguntas frecuentes'
        sons={sons}
      />

      <br />

      <LandingFooter />

    </div>
  );
};