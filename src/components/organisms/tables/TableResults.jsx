//TODO: Esta tabla se utiliza en la página de resultados de la huella de carbono. ruta: /app/resultados/empresa/detalle/:id
export default function TableResults({ img, title, emissions, participation, headers, data }) {
    return (
        <>
            <section className="antialiased text-gray-600 px-4 w-90 mr-10 mt-2">

                <div className="flex flex-col justify-center h-full">

                    <div className="w-full mx-auto bg-white shadow-lg rounded-3xs">

                        <header className="px-5 py-4">
                            <div className="flex items-center">

                                <img
                                    className="w-[60px] h-[60px]"
                                    alt=""
                                    src={img}
                                />
                                <h2 className="font-semibold text-gray-800 ml-2 whitespace-normal">{title}</h2>
                                <div className='ml-12'>
                                    <p className="tracking-[0.08px] leading-[22px] text-base text-gray-100">
                                        Emisiones GEI (tCO2eq)
                                    </p>
                                    <p className="text-lg tracking-[0.09px] font-bold">
                                        {emissions}
                                    </p>
                                </div>
                                <div className='ml-3'>
                                    <p className="tracking-[0.08px] leading-[22px] text-base text-gray-100">
                                        Participación en huella general
                                    </p>
                                    <p className="text-lg tracking-[0.09px] font-bold">
                                        {participation}
                                    </p>
                                </div>

                            </div>
                        </header>

                        <div className="p-3">

                            <div className="overflow-x-auto">


                                <table className="table-auto w-full">

                                    <thead className="text-sm font-semibold text-darkslategray-200 bg-whitesmoke-300">
                                        <tr>
                                            {headers.map((header, index) => {
                                                const isMultiline = header.length > 15; // validamos si el texto es muy largo para que se muestre centrado
                                                return (
                                                    <th key={index} className={`p-2 whitespace-normal ${index === 0 ? 'rounded-tl-3xs rounded-bl-3xs' : ''} ${index === headers.length - 1 ? 'rounded-tr-3xs rounded-br-3xs' : ''}`}>
                                                        <div className={`font-semibold ${isMultiline ? 'text-center' : 'text-left'} overflow-auto`}>{header}</div>
                                                    </th>
                                                );
                                            })}
                                        </tr>


                                    </thead>

                                    <tbody className="text-sm">

                                        {data.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {row.map((cell, cellIndex) => (
                                                    <td key={cellIndex} className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="font-medium text-gray-800">{cell}</div>
                                                        </div>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
