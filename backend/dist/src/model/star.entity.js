"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Star = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const movie_entity_1 = require("./movie.entity");
let Star = class Star extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], Star.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], Star.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500 }),
    __metadata("design:type", String)
], Star.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], Star.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => movie_entity_1.Movie),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Star.prototype, "movies", void 0);
Star = __decorate([
    (0, typeorm_1.Entity)({ name: 'star' })
], Star);
exports.Star = Star;
//# sourceMappingURL=star.entity.js.map