interface ButtonProps {
    text: string;
    onClick: () => void ;
}

export default function Button({text, onClick}: ButtonProps) {
    return (
        <button
            className={"bg-orange-400 px-4 rounded-md text-white shadow border border-orange-500 hover:cursor-pointer hover:bg-orange-500"}
            onClick={onClick}>
            {text}
        </button>
    );
}