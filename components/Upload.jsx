import {useState} from "react";
import { analyzeDocument } from "../services/api";
export default function Upload({setResult}){
    const [file,setFile]=useState(null);
    const [loading,setLoading]=useState(false);
    const handleUpload=async()=>{
        if(!file) return alert("Please select a file");
        setLoading(true);
        const data=await analyzeDocument(file);
        setResult(data);
        setLoading(false);
    };
    return(
        <div className="bg-white p-6 rounded-2x1 shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Upload Document</h2>
        <input 
         type="file"
         onChange={(e)=>setFile(e.target.files[0])}
         className="mb-4"
         />
         <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
        {loading? "Analyzing...":"Analyze"}
        </button>
</div>
    );
}