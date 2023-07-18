//Aseets
import { Icons } from "../../../../assets/icons/IconProvider";
// Destructuring Icons
const { EmailIcon, PhoneIcon, EmailWhiteIcon, PhoneWhiteIcon } = Icons; //Iconos

export const Contact = ({ contactFlag = false, title }) => {

  const styleTitleFhather = contactFlag
    ? 'text-21xl tracking-[0.4px] leading-[50px] font-prompt text-palegoldenrod-200'
    : 'fzp text-21xl tracking-[0.4px] leading-[50px] font-bold text-primary-title1 mt-2'

  return (
    <div className="Contact flex flex-col justify-start items-start p-16">
      <div className="text-left">
        <b className={styleTitleFhather}>{title}</b>
        <div className="flex items-center mt-4">
          <img className="w-[16.47px] h-[16.5px]" alt="Ícono de Email" src={contactFlag ? EmailWhiteIcon : EmailIcon} />
          <div className="tracking-[0.09px]  ml-2">loviedo@sier.com.co</div>
        </div>
        <div className="flex items-center">
          <img className="w-[16.47px] h-[16.5px]" alt="Ícono de Teléfono" src={contactFlag ? PhoneWhiteIcon : PhoneIcon} />
          <div className="tracking-[0.09px] ml-2">(+57) 310 000 00 00</div>
        </div>
      </div>
    </div>
  )
}