
export const disabled = (step, order)=>{
    if(step === 1){
        return !(order.city && order.point);
    }
    if(step === 2){
        return !(order.car != null);
    }
    if(step === 3){
        return !(order.color != null && order.rentDates != null && order.tariff);
    }
}