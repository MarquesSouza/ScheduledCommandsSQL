const databaseInterna=require('../database/connection');

class ScheduleController{
    
    async create(Schedule){
        const {name,datasouce,initial,type_schedule,time,command,status,weeks} = Schedule
        const connection=await databaseInterna.transaction();
        
        try{
        let CreateScheduleId
        CreateScheduleId=await connection('schedules').insert({
            name,datasouce,initial,type_schedule,time,command,status
        })
        let schedule_id=CreateScheduleId[0];
        
        if(type_schedule==2){
            const classWeeks=weeks.map((week)=>{
                return {week,
                schedule_id}
            })
            let retorno =await connection('weeks').insert(classWeeks)
            console.log(retorno)
            
        }
        await connection.commit();
        return status(201)
        
    }catch(err){
        await connection.rollback()
        console.log(err)
        return ''
    }}
    async all(){
        let schedules
        schedules= await databaseInterna('schedules')
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