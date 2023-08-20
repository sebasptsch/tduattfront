import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { ScancodeService } from '@scancode/scancode.service';
import { ScancodeModule } from '@scancode/scancode.module';
import { EventProcessor } from './event.processor';
import { BullModule } from '@nestjs/bull';

@Module({
  controllers: [EventController],
  providers: [EventService, ScancodeService, EventProcessor],
  exports: [EventService],
  imports: [ScancodeModule, BullModule.registerQueue({ name: 'event' })],
})
export class EventModule {}
