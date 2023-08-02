class CommonError extends Error {
  status: number;
  errorMessage: string;
  constructor(status: number, errorMessage: string, ...params: any) {
    super(...params);

    this.status = status;
    this.errorMessage = errorMessage;
  }
}

export default CommonError;
