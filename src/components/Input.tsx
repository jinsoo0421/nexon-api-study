import {useState} from "react";

export default function Input() {
    const [text, setText] = useState('');

    return (
        <div className="space-y-2">
            <input
                className="p-1 border border-gray-300 bg-gray-100 rounded-md text-sm font-sans"
                placeholder="Enter some text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>입력한 값: {text}</p>
        </div>
    );
}