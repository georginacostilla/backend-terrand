import { Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
    try {
        return await bcrypt.hash(password, +process.env.HASH_SALT!);
    } catch (error) {
        Logger.error('Error al generar el hash de la contraseña');
        throw error;
    }
};