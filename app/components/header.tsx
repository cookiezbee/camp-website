type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <header className="w-full p-4 bg-gray-100 text-center">
            <h1 className="text-4xl font-bold">
                {title}
            </h1>
        </header>
    );
}