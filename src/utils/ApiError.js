class ApiError extends Error {
    constructor(
        statsuCode,
        message="Something went wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statsuCode=statsuCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = terrors
        
        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)  
        }
    }
}

export {ApiError}