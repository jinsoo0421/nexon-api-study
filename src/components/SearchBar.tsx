import Input from "./Input.tsx";
import Button from "./Button";
import {useState} from "react";

export default function SearchBar() {
    const [value, setValue] = useState('');
    const [submitData, setSubmitData] = useState('');

    const handleSubmit = (value: string) => {
        if(value === undefined || value === null || value === '') {
            alert("입력 값 없음.");
            return;
        }

        alert("검색어 : " + value)
        setSubmitData(value);
    }

    return (
      <div className={"flex space-x-1"}>
          <Input value={value} placeholder={"검색어를 입력해주세요."} onChange={setValue} />
          <Button text={"검색"} onClick={() => handleSubmit(value)}/>
      </div>
    );
}