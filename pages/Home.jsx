import {useState} from "react";
import Upload from "../components/Upload";
import Result from "../components/Result";
export default function Home(){
    const [result,setResult]=useState(null);

    return(
        <div className="min-h-screen bg-grey-100 flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold mb-6">
                PropIntel Lite
            </h1>
            <Upload setResult={setResult}></Upload>
        
        <Result result={result}></Result></div>
    );
}