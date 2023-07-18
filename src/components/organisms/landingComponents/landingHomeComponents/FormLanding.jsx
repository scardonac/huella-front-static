export const FormLanding = ({ title, subTitle, register, handleSubmit, onSubmit, errors, bgFlag = false }) => {

    return (
        <article className={`FormLanding rounded-xl ${bgFlag && 'bg-whitesmoke-100'} w-[604px] h-[723px] text-xl flex flex-col p-16`}>
            <b className="tracking-[0.1px] leading-[27px] font-bold font-Sora text-primary-title1 text-f20">
                {title}
            </b>
            <b className="fzp text-21xl tracking-[0.4px] leading-[50px] font-bold text-primary-title1 mt-2">
                {subTitle}
            </b>
            <form className="w-full mt-6 " onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col mb-6">
                    <label htmlFor="name" className="text-lg tracking-[0.09px] font-sora text-primary-title2 text-left">Nombre</label>
                    <input
                        {...register('name', { required: true })}
                        className="text-base pl-3 h-[37px] border-0.5 rounded-8xs box-border border-solid border-primary-gris3 focus:border-primary-gris2 focus:outline-none opacity-100 bg-transparent"
                        placeholder="Escribe nombre"
                    />
                    {errors.name && <span>Este campo es requerido</span>}
                </div>
                <div className="w-full flex flex-col mb-6">
                    <label htmlFor="email" className="text-lg tracking-[0.09px] font-sora text-primary-title2 text-left">Correo</label>
                    <input
                        {...register('email', { required: true })}
                        className="text-base pl-3 h-[37px] border-0.5 rounded-8xs box-border border-solid border-primary-gris3 focus:border-primary-gris2 focus:outline-none opacity-100 bg-transparent"
                        placeholder="Escribe correo"
                    />
                    {errors.email && <span>Este campo es requerido</span>}
                </div>
                <div className="w-full flex flex-col mb-6">
                    <label htmlFor="telephone" className="text-lg tracking-[0.09px] font-sora text-primary-title2 text-left">Teléfono</label>
                    <input
                        {...register('telephone', { required: true })}
                        className="text-base pl-3 h-[37px] border-0.5 rounded-8xs box-border border-solid border-primary-gris3 focus:border-primary-gris2 focus:outline-none opacity-100 bg-transparent"
                        placeholder="Escribe teléfono"
                    />
                    {errors.telephone && <span>Este campo es requerido</span>}
                </div>
                <div className="w-full flex flex-col mb-6">
                    <label htmlFor="message" className="text-lg tracking-[0.09px] font-sora text-primary-title2 text-left">Mensaje</label>
                    <textarea
                        {...register('message', { required: true })}
                        className="text-base pl-3 border-0.5 rounded-8xs box-border border-solid border-primary-gris3 focus:border-primary-gris2 focus:outline-none opacity-100 bg-transparent"
                        placeholder="Escribe mensaje"
                        rows={4}
                    />
                    {errors.message && <span>Este campo es requerido</span>}
                </div>

                <div className="w-full flex justify-end">
                    <button
                        className="[border:none] p-0 bg-orangered-100 rounded-3xs shadow-[0px_2px_6px_rgba(206,_65,_0,_0.4)] w-3/4 h-[42px] hover:bg-orangered-200 mt-4"
                        id="BtnPrincipal"
                        type="submit"
                    >
                        <b className="text-lg tracking-[0.09px] font-sora text-white text-center">
                            Enviar mensaje
                        </b>
                    </button>
                </div>
            </form>
        </article>
    )
}
