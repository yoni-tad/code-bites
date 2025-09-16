interface PickComponents {
    title: string;
    onclick: () => void;
    selected?: boolean
}

export default function CustomPick({ title, onclick, selected }: PickComponents) {
    return <div className={`bg-white/10 px-5 py-1 rounded-full  m-1.5 ${selected ? 'border border-lime-400' : ''}`} onClick={onclick}>{title}</div>
}