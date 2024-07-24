import dayjs from "dayjs"

export const generateDate=(
    month=dayjs().month(),
    year=dayjs().year(),
)=>{
       
    const firstDateofMonth=dayjs().year(year).month(month).startOf("month");

    const lastDateofMonth=dayjs().year(year).month(month).endOf("month");


    const arrayOfDate=[]

    for (let i = firstDateofMonth.date();i<=lastDateofMonth.date();i++){
        arrayOfDate.push(firstDateofMonth.date(i))
    }
    return arrayOfDate;

}