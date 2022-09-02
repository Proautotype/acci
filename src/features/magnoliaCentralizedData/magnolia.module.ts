import { Module } from "@nestjs/common";
import magnoliaController from "./magnolia.controller";
import magnoliaService from "./magnolia.service";

@Module({
    controllers:[magnoliaController],
    providers:[magnoliaService],
    exports:[magnoliaService]
})
export default class magnoliaModule{
}