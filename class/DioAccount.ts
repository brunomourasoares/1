export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  get getName() {
    return this.name;
  }

  get getAccountNumber() {
    return this.accountNumber;
  }

  get getBalance() {
    return this.balance;
  }

  set setBalance(balance: number) {
    this.balance = balance;
  }

  get getStatus() {
    return this.status;
  }

  setStatus(status: boolean): boolean {
    return this.status = status;
  }

  deposit(deposit: number) {
    if (this.validateStatus()) {
      this.balance = this.balance + deposit;
      console.log("Depósito realizado com sucesso! Saldo atual é de R$ " + this.getBalance.toFixed(2));
    }
  }

  withdraw(withdraw: number) {
    if (this.validateStatus() && this.getBalance > withdraw) {
      this.balance = this.balance - withdraw;
      console.log("Saque realizado com sucesso! Saldo atual é de R$ " + this.getBalance.toFixed(2));
    }
    else {
      console.log("A operação não pode ser realizada, Conta bloqueada ou saldo insuficiente!")
    }
  }

  private validateStatus = (): boolean => {
    if (this.getStatus) {
      return this.getStatus;
    }
    else {
      return false;
    }
  }
}