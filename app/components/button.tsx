type ButtonProps = {
    text: string;
};

export default function Button({text}: ButtonProps) {
    return (
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            {text}
        </button>
    );
}