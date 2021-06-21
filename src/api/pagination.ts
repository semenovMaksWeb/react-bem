export  function Pagination (page:number, limit: number): {start: number,end: number}{
    const  start = (page - 1) * limit
    return {
        start,
        end: start + limit
    }
}