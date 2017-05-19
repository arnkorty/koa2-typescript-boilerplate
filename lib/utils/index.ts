import * as bcrypt from 'bcrypt';
const saltRound = 10;

export function encryptPassword(password:string):string{
  let salt = bcrypt.genSaltSync(saltRound);
  return bcrypt.hashSync(password, salt);
}

export function comparePassword(passwdPlain:string, passwdHash:string):boolean{
  return bcrypt.compareSync(passwdPlain, passwdHash);
}
