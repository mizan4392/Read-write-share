import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {

  private saltRounds = 10;

  /**
   * 
   * @param pass 
   * @returns Promise<string>
   */
  public hash(pass: string): Promise<string> {
    return bcrypt.hash(pass, this.saltRounds);
  }

  /**
   * 
   * @param pass 
   * @param hash 
   * @returns Promise<boolean>
   */
  public matches(pass: string, hash: string): Promise<boolean> {
    return bcrypt.compare(pass, hash);
  }
}
