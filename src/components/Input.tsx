import {useState} from "react";

interface InputProps {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
}

export default function Input({value, placeholder, onChange}: InputProps) {
    return (
        <div className="space-y-2">
            <input
                className="p-1 border border-gray-300 bg-gray-100 rounded-md text-md font-sans shadow w-72
                           text-center focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}