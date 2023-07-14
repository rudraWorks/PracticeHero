export const fetchRecords = () =>{
    let records = localStorage.getItem('records')
    if(!records)
        return []
    records = JSON.parse(records)
    if(records.length>0 && typeof records[0]==='string'){
        let arr = records.map((r)=>JSON.parse(r)) 
        localStorage.setItem('records',JSON.stringify(arr))
        records=JSON.parse(localStorage.getItem('records'))
    }
    return records
}

export const setRecords = (records) => {
    localStorage.setItem('records',JSON.stringify(records))
} 