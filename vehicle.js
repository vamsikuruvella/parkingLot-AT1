class vehicle{
    constructor(wheels,checkin,checkout){
        this.wheels=wheels;
        this.checkin=checkin;
        this.checkout=checkout;
        this.currentTime=Date.now();
        this.checkinValidation();
    }
    checkinValidation(){
        let checkinTime=Date(this.checkin);
        let checkoutTime=Date(this.checkout);
        let currentTime=this.currentTime;
        if(checkinTime!==currentTime){
            throw new Error("Check in time should be same as current time");
        }
        if(checkinTime>checkoutTime){
            throw new Error("Check in time can't be later than Check out time.");
        }
    }
}

module.exports = vehicle;