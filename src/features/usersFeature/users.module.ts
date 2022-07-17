import { Module } from "@nestjs/common";
import userController from "./users.controller";
import userService from "./users.service";

@Module({
    controllers: [userController],
    providers: [userService],
    exports:[userService]
})
export default class usersModule{}