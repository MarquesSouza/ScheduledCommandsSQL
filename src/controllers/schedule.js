const databaseInterna=require('../database/connection');

class ScheduleController{
    async create(){
        const schedules= await databaseInterna('schedules')
        .select('*').from('schedules');
         return schedules; 
     }
    async find(queryParametroFiltro){
        let schedules
        if(queryParametroFiltro!=''){
        schedules= await databaseInterna('schedules')
       .select('*').from('schedules').where('schedules.id','=', queryParametroFiltro);
       }else{
        schedules= await databaseInterna('schedules')
       .select('*').from('schedules');
        } 
       return schedules; 
    }

}
module.exports=ScheduleController