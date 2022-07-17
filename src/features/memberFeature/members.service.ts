import { Injectable } from "@nestjs/common";
import Member from "src/DB/Entities/members.entity";
import { MemberCreateDTO } from "src/DB/Models/MemberDto";
import { ContactRepository, MemberRepository } from "src/DB/Repositories/all.repositories";

@Injectable()
export default class MemberService {
    findAllMembers(): Promise<Member[]> {
        try {
            const MemberReposit = MemberRepository.find({
                relations: {
                    contact:true
                }
            });
            return MemberReposit
        } catch (error) {
            console.log(error)
        }
        
    }
    async findSingleMember(id: any): Promise<Member> {
        try {
            return await MemberRepository.findOneOrFail(id)
        } catch (error) {
            throw error
        }
    }
    async create(memberDTO: MemberCreateDTO) {
        const { firstName, lastName, gender, dob, contact, email, homeTown, residence } = memberDTO;
        try {
            const preMember = {
                id: contact, firstName, lastName, gender, dob,
            }
            const newDar = new Date(dob);
            preMember.dob = newDar
            const member = await MemberRepository.save(preMember);
            const preMemberContact = {
                email, homeTown, residence, memberId: member.id
            }
            const memberContact = await ContactRepository.save(preMemberContact)
            return { ...member, ...memberContact };
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}
