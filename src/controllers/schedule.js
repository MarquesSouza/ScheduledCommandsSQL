const databaseInterna=require('../database/connection');

class ScheduleController{
    async create(){
        const schedules= await databaseInterna('schedules')
        .select('*').from('schedules');
         return schedules; 
     }
    async find(idInternal){
        let schedules
        if(idInternal==''){
        schedules= await databaseInterna('schedules')
       .select('*').from('schedules').where('schedules.id','=',idInternal);
       }else{
        schedules= await databaseInterna('schedules')
       .select('*').from('schedules');
        } 
       return schedules; 
    }

}
module.exports=ScheduleController