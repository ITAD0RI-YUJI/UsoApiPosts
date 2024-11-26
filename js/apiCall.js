export async function getApiContent(apiUrl){
    try {
        const apiInfor = await fetch(apiUrl);

        if(!apiInfor.ok) throw new Error(`el error es: ${apiInfor.status}`);

        const data = await apiInfor.json();
        return data;
    } 
    catch (error) {
        return console.error(error);
    }
}