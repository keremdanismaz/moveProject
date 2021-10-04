"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initial1633307706329 = void 0;
class Initial1633307706329 {
    constructor() {
        this.name = 'Initial1633307706329';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "tite"`);
            yield queryRunner.query(`ALTER TABLE "movie" ADD "title" character varying(300)`);
            yield queryRunner.query(`ALTER TABLE "movie" ADD "trailerUrl" character varying(300)`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "trailerUrl"`);
            yield queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "title"`);
            yield queryRunner.query(`ALTER TABLE "movie" ADD "tite" character varying(300) NOT NULL`);
        });
    }
}
exports.Initial1633307706329 = Initial1633307706329;
//# sourceMappingURL=1633307706329-Initial.js.map