import DB from "../DataSource";
import Contact from "../Entities/contact.entity";
import Member from "../Entities/members.entity";
import User from "../Entities/users.entity";
import attendance from "../Entities/attendance.entity";
import MgnlCompanyEntity from "../Entities/MgnlCompany.entity";
//repos
export const MemberRepository = DB.getRepository(Member);
export const ContactRepository = DB.getRepository(Contact);
export const UserRepository = DB.getRepository(User);
export const attendanceRepository = DB.getRepository(attendance);
export const mgnlRepository = DB.getRepository(MgnlCompanyEntity);