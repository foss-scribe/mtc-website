import { BaseApiService } from "./_api.service";

export class TermsService extends BaseApiService {
    getPublicTerms() {
        return this.get("/terms/public");
    }
}

export default new TermsService();