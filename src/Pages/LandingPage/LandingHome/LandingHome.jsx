//Dependencies
import { useForm } from 'react-hook-form';
import Lottie from "lottie-react";
//Components
import { Accordion } from '../../../components/organisms/landingComponents/landingHomeComponents/Accordion';
import { FormLanding } from '../../../components/organisms/landingComponents/landingHomeComponents/FormLanding';
import { LandingFooter } from '../../../components/organisms/footer/LandingFooter';
import { LandingHeader } from '../../../components/organisms/header/LandingHeader';
import CardGoals from '../../../components/organisms/cards/CardGoals';
//Assets
import { Animation } from "../../../assets/animations/AnimationsProvider";
import { Imagenes } from "../../../assets/Images/wImagenProvider";
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
// Components
const {AnimacionHuella} = Animation;
const {Grupo2830, Img2Banner2} = Imagenes;
const {Planetgrown} = Illustrations;

//Data for Accordion
const sons = [
  {
    id: 1,
    title: '¿Qué es carbono neutralidad?',
    description: 'Es un concepto que mezcla la implementación de acciones de mitigación, encaminadas reducir emisiones de gases de efecto invernadero (GEI), y la compensación de las emisiones residuales posteriores a las acciones de mitigación. Las acciones de compensación son una segunda opción complementaria para lograr un resultado de cero emisiones netas de GEI. (ICONTEC, 2023)',
  },
  {
    id: 2,
    title: '¿Qué significa ser Net Zero?',
    description: 'Ser Net Zero, o Cero Neto en castellano, indica reducir las emisiones de GEI mediante acciones de mitigación, hasta dejarlas lo más cerca posible de emisiones nulas. Es posible que luego de tomar las medidas de gestión queden algunas emisiones residuales que serán reabsorbidas por el ambiente.  (ONU, 2023)',
  },
  {
    id: 3,
    title: '¿Qué son los gases de efecto invernadero?',
    description: 'Desde 1992, la Convención de las Naciones Unidas sobre cambio climático, los define como aquellos componentes gaseosos de la atmosfera, que tienen su origen tanto de forma natural como producto de la actividad humana, que absorben y reemiten radiación infrarroja atrapando el calor y evitando que este salga de la atmosfera.<br><br>Son varios los principales gases causantes del efecto invernadero por la actividad humana, siendo el gas de referencia el dióxido de carbono (CO2), sin embargo, hay otros como el metano (CH4), el óxido nitroso (N2O), el hexafluoruro de azufre (SF6) y los fluoro carbonados como los HFC y PFC, que también contribuyen al cambio climático. (ONU,1992)'
    ,
  },
  {
    id: 4,
    title: '¿Cada cuanto debo medir mi huella de carbono?',
    description: 'Es usual que las organizaciones recopilen, organicen y calculen la información de las emisiones de sus actividades correspondientes al periodo de un año, para que luego esta información sea analizada y comparada con periodos anteriores, y con esta información, tomar acciones de mitigación. Es igualmente válido recopilar información y calcularla para un periodo menor de tiempo, con la intención de comparar datos obtenidos anteriormente para ese mismo periodo de tiempo.'
    ,
  },
  {
    id: 5,
    title: '¿Cómo consigo mi certificación carbono neutro? ',
    description: 'Para que tu organización sea carbono neutral debes, como primer paso, realizar la cuantificación y el inventario de GEI. El paso siguiente es implementar políticas y planes de monitoreo enfocados a reducir estas emisiones mediante acciones de mitigación. Luego, se deben compensar las emisiones residuales mediante acciones de compensación concretas, como la compra de bonos de carbono, cerrando así el ciclo de mitigación y compensación. Finalmente, el proceso debe pasar por el escrutinio de un tercero que validará y verificará las acciones tomadas para certificar a tu organización como carbono neutro. (ICONTEC, 2023)'
    ,
  },
];

export const LandingHome = () => {

  const {
    register: registerMoreInfo,
    handleSubmit: handleSubmitMoreInfo,
    formState: { errors: errorsMoreInfo },
  } = useForm();

  const onSubmitMoreInfo = (data, e) => {
    console.log(data);
  };

  return (
    <div className="LandingHome flex flex-col items-center bg-white w-full text-left text-lg text-darkslategray font-sora">

      <LandingHeader />

      <section className="Banner5 flex flex-col items-center mt-32 mb-32 w-full text-center text-lg text-darkslategray font-sora">
        <h1 className='fzp font-extrabold text-primary-title1 text-49xl h-[179px] w-[1224px] leading-[80px]'>Comienza tu camino hacia la descarbonización</h1>
        <h2 className=" font-sora text-dimgray-200">
          Toma acciones para reducir y remover las emisiones de carbono.
        </h2>
        <p className="font-sora text-dimgray-200">{`Alinéate con las metas climáticas que has asumido. `}</p>
        <button
          className="cursor-pointer [border:none] p-0 bg-orangered-100 rounded-3xs shadow-[0px_2px_6px_rgba(206,_65,_0,_0.4)] w-[278px] h-[42px] hover:bg-orangered-200 hover:items-center hover:justify-center mt-10 text-primary-white1 my-9 font-bold font-Sora"
          id="BtnPrincipal"
        >
          Iniciar diagnóstico
        </button>
        <div className="w-[1000px] h-[673.24px]"><Lottie animationData={AnimacionHuella} /></div>
        <h2 className="text-[inherit] tracking-[0.09px] font-bold font-Sora text-left text-primary-title1">El primer paso es medir tu impacto</h2>
      </section>

      <h2 className=" fzp m-0 text-49xl tracking-[1.36px] leading-[76px] font-extrabold text-primary-title1">Un futuro sostenible</h2>

      <div className=" tracking-[0.09px] font-Sora text-center mt-2 text-dimgray-200">{`¿Por qué debemos hacer parte de la descarbonización? `}</div>

      <CardGoals />

      <section className="Banner4 flex justify-between w-[90%] max-w-[1200px] mt-40 ">
        <div className="h-[460px] rounded-xl bg-whitesmoke-100 w-[691px]">
          <img
            className=" max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={Grupo2830}
          />
        </div>
        <div className="flex flex-col gap-3 text-left text-21xl text-darkslategray">
          <b className=" fzp font-bold tracking-[0.4px] leading-[50px] inline-block w-[457px] text-primary-title1">
            Tecnología que impulsa el cambio
          </b>
          <div className=" text-lg tracking-[0.09px] leading-[26px] text-gray-100 whitespace-pre-wrap inline-block w-[457px] font-sora">
            <p className="m-0">
              <span>{`▪  Comienza con la Descripción detallada de `}</span>
              <b className="font-sora">las sedes de tu organización.</b>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              <span className="font-sora">{`▪  Sigue la guía y crea `}</span>
              <b className="font-sora">los límites de emisiones contaminantes</b>
              <span> que incluye el impacto de tu huella ambiental.</span>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              <span>{`▪  Agrega la información y soportes relevantes para `}</span>
              <b className="font-sora">realizar reportes que generan valor</b>
              <span className="font-sora">.</span>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              <span className="font-sora">{`▪  `}</span>
              <b className="font-sora">Sigue el plan de mitigación</b>
              <span> y crea un balance de emisiones en CO2</span>
            </p>
          </div>
        </div>
      </section>

      <section className="Banner3 flex justify-between gap-10 mt-40 w-[90%] max-w-[1200px]">
        <div className="flex flex-col text-left text-21xl text-darkslategray font-prompt">
          <b className="fzp tracking-[0.4px] leading-[50px] inline-block w-[457px] text-primary-title1">
            Apostarle al planeta es crecer
          </b>
          <div className="text-lg tracking-[0.09px] leading-[26px] text-gray-100 whitespace-pre-wrap inline-block w-[457px] font-sora">
            <p className="m-0">
              <span className="font-sora">{`▪  Consolídate como un referente en el cuidado del medio ambiente, `}</span>
              <b className="font-sora">
                crea una ventaja competitiva de reputación y prestigio
              </b>
              <span>{` frente a tus competidores. `}</span>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              <span>{`▪  Conoce y compensa tus niveles de contaminación, `}</span>
              <b className="font-sora">mejora la productividad</b>
              <span className="font-sora"> y ayuda a reducir costos.</span>
            </p>
          </div>
        </div>
        <img
          className="h-[460px] max-h-full overflow-hidden w-[690px] object-cover"
          alt=""
          src={Planetgrown}
        />
      </section>

      <section className="Banner2 relative w-[90%] max-w-[1200px] h-[315.5px] text-left text-6xl text-white font-prompt mt-32">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute w-[calc(100%_-_2px)] right-[0px] bottom-[0.5px] left-[2px] rounded-xl bg-orangered-100 h-[266px]" />
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[505.82px] object-cover"
            alt=""
            src={Img2Banner2}
          />
        </div>
        <div className="absolute bottom-[37.5px] left-[calc(50%_-_125px)] w-[530px] h-[143px]">
          <b className="fzp absolute w-[calc(100%_+_1px)] top-[calc(50%_-_95.5px)] tracking-[0.80px] leading-[50px] inline-block text-26xl">
            Dile adiós a los métodos manuales
          </b>
          <div className="absolute w-[calc(100%_-_24px)] bottom-[30px] text-lg tracking-[0.09px] leading-[16px] inline-block font-sora">
            <b>{`Haz la diferencia, `}</b>
            <span>comienza tu camino ágil en la descarbonización.</span>
            <b>{` `}</b>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-darkslategray-100 absolute top-[calc(50%_+_10.25px)] right-[40px] rounded-3xs w-[237px] h-[42px] hover:bg-palegoldenrod-200 text-lg tracking-[0.09px] leading-[22px] font-bold font-sora text-white text-left hover:text-darkslategray px-6">
          Iniciar diagnóstico
        </button>
      </section>

      <section className='Banner1 flex gap-40 justify-between my-32 w-[90%] max-w-[1200px]'>

        <Accordion
          title='Preguntas frecuentes'
          sons={sons}
        />

        <FormLanding
          title='¿Quieres saber más?'
          subTitle='Escríbenos'
          bgFlag={true}
          register={registerMoreInfo}
          handleSubmit={handleSubmitMoreInfo}
          onSubmit={onSubmitMoreInfo}
          errors={errorsMoreInfo}
        />

      </section>

      <LandingFooter />

    </div>
  );
}