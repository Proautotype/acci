import { BadRequestException, Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import {MemberCreateDTO} from "src/DB/Models/MemberDto";
import { GenderValidationPipe } from "src/pipes/gender-validation.pipe";
import { MemberDataPipe } from "src/pipes/member-data-pipe.pipe";
import MemberService from "./members.service";

@Controller('members')
export default class MemberController {
    constructor(private readonly memberService: MemberService) { }

    @Get('all')
    async getAllMembers() {
        const members = await this.memberService.findAllMembers();
        console.log('all_members',members)
        return members
    }
    @Post('addMember')
    @UsePipes(ValidationPipe)
    @UsePipes(MemberDataPipe)
    async createMember(
        @Body() memberCreateDto: MemberCreateDTO
    ) {
        console.log("member",memberCreateDto);
        try {
            return await this.memberService.create(memberCreateDto);
        } catch (error) {
            switch (error?.code) {
                case "22007":
                   throw new BadRequestException("invalid date format. @use eg. month/day/year(25/04/1990) or any standard js date format")

                default:
                    return error
            }
        }
    }

}