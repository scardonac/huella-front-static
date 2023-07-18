export default function CardLanding({ title, price, listItems, cardFlag = false }) {

  const styleDivFhather = cardFlag
    ? 'CardLanding relative min-h-screen py-14 px-7 rounded-xl bg-honeydew box-border border-[2px] border-solid border-darkcyan'
    : 'CardLanding relative h-auto items-center col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col text-start py-14 px-7 mt-8 rounded-xl bg-white shadow-[0px_7px_20px_rgba(0,_0,_0,_0.05)]'
  return (
    <article className={styleDivFhather}>

      <b className="fzp w-[372px)] top-[433px] left-[1275px] tracking-[0.4px] leading-[50px] inline-block text-primary-title1 text-[36px]">
        {title}
      </b>
      <b className="w-auto top-[109px] left-[40px] leading-[22px] inline-block text-9xl text-primary-title1">
        <span className="tracking-[0.14px]">{`$ ${price}`} <span className="text-base tracking-[0.08px]">Cop</span></span>
      </b>

      <button className={`cursor-pointer [border:none] p-0 ${cardFlag ? 'bg-orangered-100' : 'bg-palegoldenrod-100'} w-full h-[38px] rounded-3xs flex justify-center items-center mt-8`} id="SecundaryBtn">
        <b className={`text-lg tracking-[0.09px] leading-[22px] font-sora text-darkslategray text-primary-title1 ${cardFlag && 'text-white'}`}>
          Adquirir
        </b>
      </button>

      <section className="w-[calc(100%_-_78px)] my-5 bottom-[41px] left-[40px] text-base tracking-[0.08px] leading-[22px] text-dimgray-200 whitespace-pre-wrap inline-block">
        {listItems.map((item, i) => (
          <p className="m-3" key={i}>
            {`▪ ${item}`}
          </p>
        ))}
      </section >

    </article >
  );
}

