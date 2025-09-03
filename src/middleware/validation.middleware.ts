import Ajv from "ajv";
import ajvFormats from "ajv-formats";
import ajvErrors from "ajv-errors";
import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../common/responseHandler";
import { ERRORS } from "../common/constants/errors.constants";
import { HttpStatus } from "../common/constants/httpStatus.enum";

function createAjv() {
    const ajv = new Ajv({
        allErrors: true,
    });
    ajvFormats(ajv);
    ajvErrors(ajv);

    // ajv.addFormat("date-time", /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d+)?Z$/);
    return ajv;
}

export function validateRequestBody(schema: any) : (req:Request, res:Response, next:NextFunction)=>void{

    const ajv = createAjv();

    return (req:Request, res:Response, next:NextFunction) => {
        const isvalidRequestBody = ajv.validate(schema, req.body);

        if (!isvalidRequestBody) {
             return errorResponse(HttpStatus.BAD_REQUEST,res,ERRORS.INVALID_REQUEST_BODY_FORMAT, ajv.errorsText());
        }
        next();
    }
}