import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan(loan: number) {
    console.log("O Empréstimo foi concluido!");
    this.deposit(loan)
  }
}