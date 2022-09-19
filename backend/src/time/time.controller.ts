import { Controller, Post ,Get,Body} from '@nestjs/common';
import { CreateTimeDto } from './dto';
import { TimeService } from './time.service';
import { Request } from 'express';

@Controller('time')
export class TimeController {
    constructor(private timeService: TimeService ){}
    @Post('')
    async createTime(@Body() time: CreateTimeDto ){
        return  await this.timeService.createTime(time)
    }
    @Get('')
    async  getTime(){
        console.log("gettime")
        return await this.timeService.getTime()

    }

}
