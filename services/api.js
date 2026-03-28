export const analyzeDocument =async(file)=>{
    const formData=new FormData();
    formData.append("file",file);
    const response=await fetch("https://127.0.0.1:8000/analyze/",{
        method:"POST",
        body:formData,
    });
    return response.json();
}