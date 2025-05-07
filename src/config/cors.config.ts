import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

export const corsOptions: CorsOptions = {
    origin: ['http://localhost:5173', '*'], 
    credentials: true,
    allowedHeaders: [
        'x-requested-with',
        'authorization',
        'content-type',
    ],
    methods: 'GET,POST,PUT,DELETE,OPTIONS,PATCH',
    preflightContinue: false,
};
