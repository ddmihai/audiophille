



const TextInput = ({ label, ...textConfig }: any) => {
    return (
        <div className="flex flex-col flex-1">
            <label className="font-semibold text-sm my-2">{label}</label>
            <input
                className="py-3 px-4 border rounded-xl border-slate-400"
                {...textConfig}
            />
        </div>
    );
};


export default TextInput;