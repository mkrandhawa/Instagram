export const Months= [
    {
        title:'January',
        value:'1',
        
    },
    {
        title:'February',
        value:'2',
        
    },
    {
        title:'March',
        value:'3',
        
    },
    {
        title:'April',
        value:'4',
        
    },
    {
        title:'May',
        value:'5',
        
    },
    {
        title:'June',
        value:'6',
        
    },
    {
        title:'July',
        value:'7',
        
    },
    {
        title:'August',
        value:'8',
        
    },
    {
        title:'September',
        value:'9',
        
    },
    {
        title:'October',
        value:'10',
        
    },
    {
        title:'November',
        value:'11',
        
    },
    {
        title:'December',
        value:'12',
        
    }
]

export const Years=[]

for (let year = 2023; year >= 1920; year--) {
    Years.push({
        title: year.toString(),
        value: year.toString(),
    });
}


export const Days=[]

for(let day=1; day<=31; day++){
    Days.push({
        title:day.toString(),
        value: day.toString(),
    })
}