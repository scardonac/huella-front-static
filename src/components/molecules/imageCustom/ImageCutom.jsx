export default function ImageCustom({ src, onClick = () => { }, alt = '', className = 'w-4 h-4 mr-[3px] cursor-pointer' }) {
    return (
        <img
            className={className}
            alt={alt}
            src={src}
            onClick={onClick}
        />
    )
}
