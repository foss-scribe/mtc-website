import { BaseApiService } from "./_api.service";

export class TimetablesService extends BaseApiService {
    getPublicTimetables() {
        return this.get("/timetables/public");
    }
}

export default new TimetablesService();