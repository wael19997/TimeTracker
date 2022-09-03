import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTimeDto } from './dto';

@Injectable()
export class TimeService {
    constructor(private  prisma:PrismaService){}
    async getTime(){
        return await this.prisma.time.findMany();
    };
    async createTime( time: CreateTimeDto){
        return await this.prisma.time.create({
        data : time
        });
    }
}
