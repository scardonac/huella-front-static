//Dependencies
import { useState, useEffect } from 'react'
//Css
import './SelectionCard.css'
//Assets
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
// Components
const { DefaultIlluDefault, Add_OtherCategory_VFuerte } = Illustrations;


export const SelectionCard = ({
    icon = DefaultIlluDefault,
    iconChecked = DefaultIlluDefault,
    id,
    isActived = true,
    isSelected,
    name = "Defaultname",
    setData,
    type = "checkbox",
}) => {

    const [urlImg, setUrlImg] = useState(DefaultIlluDefault)

    const handleSelect = (e) => {
        e.preventDefault()
        if (type === 'checkbox') {
            setData(prevState => (prevState.map(item => {
                if (item.id === id) {
                    return { ...item, isChecked: !item.isChecked }
                }
                return item
            })));

        } else if (type === 'radio') {
            setData(prevState => (prevState.map(item => {
                if (item.id === id) {
                    return { ...item, isChecked: true }
                } else {
                    return { ...item, isChecked: false }
                }
            })));
        }
    }

    useEffect(() => {
        if (isSelected) {
            if (Illustrations[iconChecked]) {
                setUrlImg(Illustrations[iconChecked])
            } else {
                setUrlImg(Add_OtherCategory_VFuerte)
            }
        } else {
            if (Illustrations[icon]) {
                setUrlImg(Illustrations[icon])
            } else {
                setUrlImg(DefaultIlluDefault)
            }
        }
    }, [isSelected])

    return (
        <div
            className={`SelectionCard bg-primary-white1 border-2 border-solid w-full px-10 ${isSelected ? " border-teal-600" : ""} flex gap-4 items-center justify-between py-2 pl-2 pr-5 rounded-xl cursor-pointer`}
            onClick={isActived && handleSelect}
        >
            <div className='flex items-center gap-4'>
                <div className='w-[60px] h-[60px]'>
                    <img className='w-full h-full'
                        src={urlImg}
                    />
                </div>
                <span>{name}</span>
            </div>
            <div>
                <input
                    className='checkbox'
                    type='checkbox'
                    id={id}
                    checked={isSelected}
                    readOnly
                />
                {isActived && (
                    <label className='label' htmlFor={id}></label>
                )}
            </div>
        </div>
    )
}