export const createFoodDtoSchema = {
    type: "object",
    properties: {
        name: { type: "string", minLength: 3, maxLength: 50 },
        description: { type: "string", minLength: 3, maxLength: 100 },
        price: { type: "number", minimum: 0 },
    },
    required: ["name", "description", "price"],
    additionalProperties: false,
}
export interface CreateFoodDto {
    name: string;
    description: string;
    price: number;
}