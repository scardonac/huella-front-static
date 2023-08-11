//Dependencies
import { Link, useNavigate } from 'react-router-dom'
//Components
import TableResults from '../../../components/organisms/tables/TableResults';
//Assets
import { Icons } from '../../../assets/icons/IconProvider';
import { Imagenes } from '../../../assets//Images/wImagenProvider';
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';

const { BackArrowIcon } = Icons; //Iconos
const { ImgOficinaazul } = Imagenes; //Iconos
const { extintor_VFuerte, PlantaEnergia_VFuerte } = Illustrations; //Iconos


export const PageCompanyDetailResults = () => {

  const navigate = useNavigate(); // hook para navegar entre páginas

  const headers = [
    "Combustible",
    "Consumo",
    "t CO2 Dióxido de carbono",
    "t CH4 Metano",
    "t N2O Óxido Nitroso",
    "t HFC Hidrofluoro-carbono",
    "t PFC Perfluoro-carbon",
    "t SF6 Hexafluoruro de azufre",
    "t NF3 Trifluoruro de nitrógeno"
  ];

  const extintorHeaders = [...headers]; // Hacemos una copia del array original
  extintorHeaders[0] = "Tipo de gas"; // Cambiamos la primera posición

  const data = [
    [
      "Diesel B10 Mezcla comerial",
      "14 Galones",
      "0,13",
      "0,000000121",
      "0,00000007308",
      "0",
      "0",
      "0",
      "0"
    ],
    [
      "Diesel B10 Bioetanol Anhidro",
      "14 Galones",
      "0,01",
      "0,000000020",
      "0,00000000406",
      "0",
      "0",
      "0",
      "0"
    ],
    // ... más filas de datos
  ];

  const dataExtintor = [
    [
      "Extintores (HCFC - 123)",
      "22,68 kg",
      "0,06984127",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0"
    ],
    [
      "Extintores (HFC - 125)",
      "173,24 kg",
      "24,25396825",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0"
    ],
    // ... más filas de datos
  ];

  return (
    <div className="PageCompanyDetailResults pl-52 flex flex-col items-center bg-whitesmoke-100 w-full min-h-screen text-left text-base text-gray-100 font-sora">

      <div className="flex items-center w-90 mt-6 text-darkgray">
        <img
          className="mr-1 w-[5.59px] h-[10.05px]"
          alt=""
          src={BackArrowIcon}
        />
        <Link to="#" onClick={(e) => { e.preventDefault(); navigate(-1); }} className="text-[inherit] relative lg:ml-0 cursor-pointer flex items-center">
          <b className="[text-decoration:underline] tracking-[0.08px] leading-[22px]">
            Volver
          </b>
        </Link>
      </div>

      <div className="flex items-center justify-between w-90 mt-2">

        <div className="flex items-center">

          <img className="w-16 h-16" alt="" src={ImgOficinaazul} />
          <div className="ml-4">
            <h4 className="text-xl tracking-[0.1px] leading-[27px] font-bold font-inherit text-darkslategray-200">
              Sier centro de control
            </h4>
            <p className="text-lg tracking-[0.09px] text-dimgray-200">
              01/01/2022 - 31/12/2022
            </p>
          </div>
        </div>

      </div>


      <div className="flex items-center w-90 mt-5 text-left">
        <h3 className="leading-[26px] text-xl font-inherit">
          <b className="tracking-[0.1px]">{`Emisiones directas `}</b>
          <span className="text-lg tracking-[0.09px]">(alcance 1)</span>
        </h3>
      </div>

      <div className="flex justify-start w-90 mt-1">
        <div className="flex space-x-4">
          <div>
            <p className="tracking-[0.08px] leading-[22px]">
              Emisiones GEI (tCO2eq)
            </p>
            <p className="text-lg tracking-[0.09px] font-bold">
              24,45
            </p>
          </div>

          <div>
            <p className="tracking-[0.08px] leading-[22px]">
              Participación en huella general
            </p>
            <p className="text-lg tracking-[0.09px] font-bold">
              36,5%
            </p>
          </div>
        </div>
      </div>

      {/* Uso del componente */}
      <TableResults
        img={PlantaEnergia_VFuerte}
        title="Plantas generadoras de energía"
        emissions="0,13"
        participation="0,2%"
        headers={headers}
        data={data}
      />
      <TableResults
        img={extintor_VFuerte}
        title="Extintores"
        emissions="24,32"
        participation="36,3%"
        headers={extintorHeaders}
        data={dataExtintor}
      />

    </div>

  )
}
