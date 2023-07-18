//Components
import ListTableResult from "../../../components/organisms/lists/ListTableResult";

export const AppPageResults = () => {

    const dividingLine = <hr className="w-95 mx-auto box-border h-0.5 border-t-[1px] border-solid border-lightgray-200" />;

    return (
        <div className="AppPageResults relative bg-whitesmoke-100 w-full min-h-full text-left text-base font-sora px-5 sm:px-14 sm:py-10">

            <h2 className="mt-10 sm:mt-0 text-3xl sm:text-9xl tracking-[0.14px] leading-[38px] font-bold font-inherit text-darkslategray-100">
                Resultados
            </h2>
            <p className="mt-3 tracking-[0.08px] text-dimgray-200">
                Acá encontrarás los cálculos históricos de tus centros de trabajo.
            </p>

            <div className="mt-5 sm:mt-10 rounded-3xs bg-white w-full h-full sm:h-4/6 text-darkslategray-200 overflow-x-auto">

                <div className="px-5 py-5 flex justify-around items-center sm:w-full h-[21px]">
                    <h3 className="text-[inherit] tracking-[0.08px] font-bold font-inherit">
                        Centro de trabajo
                    </h3>
                    <h3 className="text-[inherit] tracking-[0.08px] font-bold font-inherit">
                        Periodo de registro
                    </h3>
                    <h3 className="text-[inherit] tracking-[0.08px] font-bold font-inherit">
                        Ton C02 equivalente
                    </h3>
                    <h3 className="text-[inherit] tracking-[0.08px] font-bold font-inherit">
                    </h3>
                    <h3 className="text-[inherit] tracking-[0.08px] font-bold font-inherit">
                    </h3>
                </div>

                <ListTableResult
                    title={"Sier centro de control"}
                    subtitle={"Medellín"}
                    period={"01/01/2022 - 31/12/2022"}
                    co2={"66,93"}
                    download={""}
                    empresaId={"1"}
                />
                {dividingLine}
                <ListTableResult
                    title={"Sier centro de control"}
                    subtitle={"Medellín"}
                    period={"01/01/2021 - 31/12/2021"}
                    co2={"55,69"}
                    download={""}
                    empresaId={"2"}
                />
                {dividingLine}
                <ListTableResult
                    title={"Sier centro de control"}
                    subtitle={"Medellín"}
                    period={"01/01/2020 - 31/12/2020"}
                    co2={"54,09"}
                    download={""}
                    empresaId={"3"}
                    isLastRow={true}
                />
            </div>

        </div>

    )
}