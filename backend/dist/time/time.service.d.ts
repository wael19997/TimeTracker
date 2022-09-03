import { PrismaService } from '../prisma/prisma.service';
import { CreateTimeDto } from './dto';
export declare class TimeService {
    private prisma;
    constructor(prisma: PrismaService);
    getTime(): Promise<import(".prisma/client").time[]>;
    createTime(time: CreateTimeDto): Promise<import(".prisma/client").time>;
}
