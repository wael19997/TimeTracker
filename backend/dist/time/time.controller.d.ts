import { CreateTimeDto } from './dto';
import { TimeService } from './time.service';
export declare class TimeController {
    private timeService;
    constructor(timeService: TimeService);
    sig(): string;
    createTime(time: CreateTimeDto): Promise<import(".prisma/client").time>;
    getTime(): Promise<import(".prisma/client").time[]>;
}
