import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SocialAccount } from './class/SocialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
const socialAccount: SocialAccount = new SocialAccount('Ted', 30);

console.log("=================================");
console.log(peopleAccount.getName);
peopleAccount.withdraw(100);
peopleAccount.deposit(60);
peopleAccount.setStatus(false);
peopleAccount.withdraw(50);
peopleAccount.setStatus(true);
peopleAccount.withdraw(50);

console.log("=================================");
console.log(companyAccount.getName);
companyAccount.deposit(310);
companyAccount.withdraw(400);
companyAccount.getLoan(100);
companyAccount.setStatus(false);
companyAccount.withdraw(400);
companyAccount.setStatus(true);
companyAccount.withdraw(400);

console.log("=================================");
console.log(socialAccount.getName);
socialAccount.withdraw(100);
socialAccount.deposit(100);
socialAccount.setStatus(false);
socialAccount.withdraw(50);
socialAccount.setStatus(true);
socialAccount.withdraw(50);

