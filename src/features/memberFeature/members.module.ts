import { Module } from "@nestjs/common";
import Member from "src/DB/Entities/members.entity";
import { Repository } from "typeorm";
import MemberController from "./members.controller";
import MemberService from "./members.service";
@Module({
    controllers:[MemberController],
    providers:[MemberService],
    exports:[MemberService]
})
export default class MemberModule{
}