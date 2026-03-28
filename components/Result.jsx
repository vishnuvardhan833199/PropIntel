export default function Result({result}){
    if(!result) return null;
    const {extracted_data,risk_analysis}=result;
    return(
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mt-6">
            <h2 className="text-x1 font-semibold mb-4">Results</h2>
            <div className="mb-4">
                <p><strong>Owner:</strong>{extracted_data.owner||"N/A"}</p>
                <p><strong>Survey No:</strong>{extracted_data.survey_no||"N/A"}</p>
                <p><strong>Area:</strong>{extracted_data.area||"N/A"}</p>
            </div>
            <div className="mb-4">
                <p className="text-red-600 font-bold">
                    Risk Score:{risk_analysis.risk_score}/100
                </p>
            </div>
            <div>
                <p className="font-semibold">Issues:</p>
                <ul className="list-disc ml-5">
                    {risk_analysis.issues.map((issue,index)=>(
                        <li key={index}>{issue}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}