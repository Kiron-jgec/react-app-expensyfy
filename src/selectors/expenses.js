// get vasible expenses 

const getVisibleExpenses=(expenses,{text,shortBy,startDate,endDate})=>{

    return expenses.filter((expense)=>{
  
      const startDateMatch = typeof startDate!=='number' || expense.crearedAt>=startDate;
      const  endDateMatch = typeof endDate!=='number' || expense.crearedAt<=endDate;;
      const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch &&  endDateMatch && textMatch
    }).sort((a,b)=>
    {
    
      if(shortBy==='date')
      {
        return a.crearedAt < b.crearedAt ? 1:-1
      } 
      else if(shortBy==='amount')
      {
        return a.amount<b.amount ? 1 : -1
      }
  
    return false;
  
    })
  
  }




  export default getVisibleExpenses
  