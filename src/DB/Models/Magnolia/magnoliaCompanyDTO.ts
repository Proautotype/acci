import { IsNotEmpty } from "class-validator";

export default class magnoliaCompanyDTO{
    @IsNotEmpty()
    name: string
    email: string
    @IsNotEmpty()
    tell: string
}