interface ButtonComponent {
    title: string;
    onclick: () => void;
}

export default function CustomButton({ title, onclick }: ButtonComponent) {
    return <button className="w-full bg-white rounded-full py-4 text-black text-lg font-bold" onClick={onclick}>{title}</button>
}