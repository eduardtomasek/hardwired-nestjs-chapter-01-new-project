import { Injectable } from '@nestjs/common';

@Injectable()
export class ZodiacSignsService {
    signs = {
        aries: {
            symbol: '♈',
            dateMin: '2000-03-21',
            dateMax: '2000-04-20',
        },
        taurus: {
            symbol: '♉',
            dateMin: '2000-04-21',
            dateMax: '2000-05-21',
        },
        gemini: {
            symbol: '♊',
            dateMin: '2000-05-22',
            dateMax: '2000-06-21',
        },
        cancer: {
            symbol: '♋',
            dateMin: '2000-06-22',
            dateMax: '2000-07-22',
        },
        leo: {
            symbol: '♌',
            dateMin: '2000-07-23',
            dateMax: '2000-08-22',
        },
        virgo: {
            symbol: '♍',
            dateMin: '2000-08-23',
            dateMax: '2000-09-23',
        },
        libra: {
            symbol: '♎',
            dateMin: '2000-09-24',
            dateMax: '2000-10-23',
        },
        scorpio: {
            symbol: '♏',
            dateMin: '2000-10-24',
            dateMax: '2000-11-22',
        },
        sagittarius: {
            symbol: '♐',
            dateMin: '2000-11-23',
            dateMax: '2000-12-21',
        },
        capricorn: {
            symbol: '♑',
            dateMin: '2000-12-22',
            dateMax: '2000-01-20',
        },
        aquarius: {
            symbol: '♒',
            dateMin: '2000-01-21',
            dateMax: '2000-02-19',
        },
        pisces: {
            symbol: '♓',
            dateMin: '2000-02-20',
            dateMax: '2000-03-20',
        },
    };

    findAll() {
        return this.signs;
    }
}
