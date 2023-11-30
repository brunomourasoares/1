import { DioAccount } from "./DioAccount"

export class SocialAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit(deposit: number): void {
    this.setBalance = (this.getBalance + deposit) + 10.0;
    console.log("Saldo atual é de R$ " + this.getBalance.toFixed(2));
    console.log("Depósito realizado com sucesso!")
  }
}