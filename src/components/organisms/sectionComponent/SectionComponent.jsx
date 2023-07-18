
export const SectionComponent = ({ name = "Defaultname", icon, isSelected = false }) => {
    return (
        <ul className={`${isSelected ? "bg-primary-white1 text-primary-title1 font-bold" : ""} flex gap-4 items-center py-3 rounded-xl pl-4 cursor-pointer`}>
            <img src={icon} />
            <span>{name}</span>
        </ul>
    )
}