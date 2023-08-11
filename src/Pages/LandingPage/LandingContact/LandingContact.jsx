//Dependencies
import { useForm } from 'react-hook-form';
//Components
import { Contact } from '../../../components/organisms/landingComponents/landingHomeComponents/Contact';
import { FormLanding } from '../../../components/organisms/landingComponents/landingHomeComponents/FormLanding';
import { LandingFooter } from '../../../components/organisms/footer/LandingFooter';
import { LandingHeader } from '../../../components/organisms/header/LandingHeader';

import { Imagenes } from "../../../assets/Images/wImagenProvider";
import { useLocation } from 'react-router';
import { useEffect } from 'react';
// Components
const { ImgBannerContact, Huella, Doctora, Reunion, Mecanico, Trabajador, Elipse210, Trazado17916, Trazado17917, Grupo2403, Grupo2409, Botella, Elipse218, Trazado17926, Elipse219, Grupo2411 } = Imagenes;

export const LandingContact = () => {

  const { state } = useLocation(); //Obtenemos el estado de la ubicación

  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: errorsContact },
  } = useForm();

  const onSubmitContact = (data, e) => {
    console.log(data);
  };

  useEffect(() => {
    if (state) {
      const { scroll } = state;
      // Desplázate a la posición del punto medio
      window.scrollTo({
        top: scroll,
        behavior: 'smooth', // Agrega un desplazamiento suave
      });
    }
  }, []);

  return (
    <div className="LandingContact bg-white cursor-pointer text-left text-lg text-darkslategray font-sora flex flex-col items-center">
      <LandingHeader />
      <div className="Banner relative bg-darkslategray-100 w-full h-[800px] text-[100px] flex">
        <img
          className="absolute h-[800px] top-[0px] bottom-[0px] left-[0px] max-h-full w-[840px] object-cover"
          alt=""
          src={ImgBannerContact}
        />
        <h1 className="fzp text-[90px] absolute top-[calc(50%_-_144px)] left-[124px] tracking-[2px] leading-[80px] font-extrabold inline-block w-[729px] text-primary-title1">
          Comencemos analizando tu empresa
        </h1>
        <h2 className="absolute top-[calc(50%_+_120px)] left-[124px] text-lg tracking-[0.09px] text-primary-title2 inline-block w-[650px] font-Sora">
          La forma más fácil de conocer tu impacto, inicia y sé parte del
          cambio.
        </h2>
        <button className="cursor-pointer [border:none] p-0 bg-orangered-100 absolute top-[calc(50%_+_190px)] left-[124px] rounded-3xs shadow-[0px_2px_6px_rgba(206,_65,_0,_0.4)] w-[358px] h-[42px]">
          <b className="absolute top-[10px] left-[90px] text-lg tracking-[0.09px] font-sora text-white text-center">
            Iniciar diagnóstico
          </b>
        </button>
        <div className="Orbita absolute h-[calc(100%_-_205.94px)] top-[106.94px] right-[49px] bottom-[99px] w-[488px] text-[13px] text-whitesmoke-100">
          <img
            className="absolute top-[calc(50%_-_201.97px)] left-[57px] w-[356.5px] h-[356.5px] object-cover"
            alt=""
            src={Huella}
          />
          <div className="absolute right-[0px] bottom-[0px] rounded-3xs bg-whitesmoke-100 shadow-[0px_5px_20px_rgba(0,_0,_0,_0.16)] w-36 h-[269px]">
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-t-3xs rounded-b-none bg-darkcyan h-[31px]" />
            <b className="absolute top-[7px] left-[calc(50%_-_41px)] tracking-[0.07px]">
              Actividades
            </b>
            <img
              className="absolute top-[40px] left-[12px] w-[47px] h-[47px] object-cover"
              alt=""
              src={Doctora}
            />
            <img
              className="absolute top-[calc(50%_+_15.5px)] left-[12px] w-[47px] h-[47px] object-cover"
              alt=""
              src={Reunion}
            />
            <img
              className="absolute top-[calc(50%_-_39.5px)] left-[12px] w-[47px] h-[47px] object-cover"
              alt=""
              src={Mecanico}
            />
            <img
              className="absolute bottom-[17px] left-[12px] w-[47px] h-[47px] object-cover"
              alt=""
              src={Trabajador}
            />
            <img
              className="absolute top-[calc(50%_-_39.5px)] left-[12px] w-[47px] h-[47px] mix-blend-color"
              alt=""
              src={Elipse210}
            />
            <img
              className="absolute top-[calc(50%_+_15.5px)] left-[12px] w-[47px] h-[47px] mix-blend-color"
              alt=""
              src={Elipse210}
            />
            <img
              className="absolute bottom-[16px] left-[12px] w-[47px] h-[47px] mix-blend-color"
              alt=""
              src={Elipse210}
            />
            <div className="absolute top-[calc(50%_-_82.5px)] right-[13px] rounded-8xs bg-palegoldenrod-200 w-[60px] h-[23px] opacity-[0.5]" />
            <div className="absolute top-[calc(50%_-_27.5px)] right-[13px] rounded-8xs bg-lightgray-200 w-[60px] h-[23px] opacity-[0.5]" />
            <div className="absolute top-[calc(50%_+_27.5px)] right-[13px] rounded-8xs bg-lightgray-200 w-[60px] h-[23px] opacity-[0.5]" />
            <div className="absolute right-[13px] bottom-[29px] rounded-8xs bg-lightgray-200 w-[60px] h-[23px] opacity-[0.5]" />
            <div className="absolute top-[calc(50%_-_74.5px)] right-[21px] rounded-8xs bg-darkcyan w-[45px] h-[7px]" />
            <div className="absolute top-[calc(50%_-_19.5px)] right-[21px] rounded-8xs bg-lightgray-200 w-[45px] h-[7px]" />
            <div className="absolute top-[calc(50%_+_35.5px)] right-[21px] rounded-8xs bg-lightgray-200 w-[45px] h-[7px]" />
            <div className="absolute right-[21px] bottom-[37px] rounded-8xs bg-lightgray-200 w-[45px] h-[7px]" />
          </div>
          <img
            className="absolute top-[12.56px] left-[calc(50%_-_22.39px)] w-[63.71px] h-[63.71px] opacity-[0.5]"
            alt=""
            src={Trazado17916}
          />
          <div className="absolute top-[65.17px] left-[calc(50%_+_42.97px)] rounded-[3.73px] bg-darkcyan w-[15.02px] h-[7.61px]" />
          <div className="absolute top-[0px] left-[calc(50%_-_22.51px)] rounded-[3.73px] bg-white w-[15.02px] h-[7.61px]" />
          <img
            className="absolute top-[11.06px] left-[calc(50%_+_4.46px)] w-[38.35px] h-[63.28px]"
            alt=""
            src={Trazado17917}
          />
          <b className="absolute top-[32.56px] left-[calc(50%_-_7.94px)] text-base text-white">
            45%
          </b>
          <div className="absolute top-[46.06px] left-[2px] rounded-xl bg-whitesmoke-100 shadow-[0px_5px_20px_rgba(0,_0,_0,_0.16)] w-[207px] h-[81px]">
            <img
              className="absolute h-[calc(100%_-_24px)] w-[calc(100%_-_24px)] top-[12px] right-[12px] bottom-[12px] left-[12px] max-w-full overflow-hidden max-h-full"
              alt=""
              src={Grupo2403}
            />
          </div>
          <img
            className="absolute bottom-[49.99px] left-[calc(50%_-_58.5px)] w-[85.01px] h-[85.01px]"
            alt=""
            src={Grupo2409}
          />
          <div className="absolute top-[calc(50%_+_100.53px)] left-[0px] rounded-xl bg-whitesmoke-100 shadow-[0px_5px_20px_rgba(0,_0,_0,_0.16)] w-[175px] h-[99px]">
            <div className="absolute top-[calc(50%_-_18.5px)] left-[calc(50%_+_11px)] rounded-8xs bg-darkslategray-100 w-[15px] h-[7px]" />
            <div className="absolute top-[calc(50%_-_26.5px)] left-[calc(50%_+_11px)] rounded-sm bg-lightgray-200 w-7 h-1" />
            <div className="absolute top-[calc(50%_+_0.5px)] left-[calc(50%_+_11px)] rounded-sm bg-lightgray-200 w-7 h-1" />
            <div className="absolute top-[calc(50%_+_8.5px)] right-[20.5px] rounded-8xs bg-darkcyan w-14 h-[7px]" />
            <div className="absolute top-[calc(50%_+_19.5px)] right-[20.5px] rounded-8xs bg-darkcyan w-14 h-[7px]" />
            <img
              className="absolute h-[calc(100%_-_27px)] top-[13.5px] bottom-[13.5px] left-[14px] rounded-3xs max-h-full w-[72px] object-cover"
              alt=""
              src={Botella}
            />
          </div>
          <img
            className="absolute top-[calc(50%_-_123.82px)] right-[31.79px] w-[40.04px] h-[40.04px]"
            alt=""
            src={Elipse218}
          />
          <img
            className="absolute top-[calc(50%_-_184.8px)] right-[31.79px] w-[40.04px] h-[40.04px]"
            alt=""
            src={Elipse218}
          />
          <img
            className="absolute top-[calc(50%_-_117.84px)] right-[43.4px] w-[16.81px] h-[28.07px]"
            alt=""
            src={Trazado17926}
          />
          <img
            className="absolute top-[calc(50%_-_127.99px)] right-[27.62px] w-[48.38px] h-[48.38px]"
            alt=""
            src={Elipse219}
          />
          <img
            className="absolute top-[calc(50%_-_188.97px)] right-[27.62px] w-[48.38px] h-[48.38px]"
            alt=""
            src={Elipse219}
          />
          <img
            className="absolute top-[calc(50%_-_176.52px)] right-[43.36px] w-[16.85px] h-[22.72px]"
            alt=""
            src={Grupo2411}
          />
        </div>
      </div>
      <div className='flex justify-evenly w-[90%] max-w-[1200px]'>

        <Contact
          title={'Comunícate con nosotros'}
        />

        <FormLanding
          title='¿No resolvimos tus dudas?'
          subTitle='Escríbenos'
          register={registerContact}
          handleSubmit={handleSubmitContact}
          onSubmit={onSubmitContact}
          errors={errorsContact}
        />
      </div>
      <LandingFooter />
    </div>
  );
}