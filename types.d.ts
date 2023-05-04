declare module "sever-membrane" {
  type ProcessId = number;
  type ProcessFunctionMessage = { type: string, data?: any };
  type ProcessFunction = (message: ProcessFunctionMessage) => any;

  function spawn(code: ProcessFunction, ...params: any[]): ProcessId;
  function alive(id: ProcessId): boolean;
  function me(): string;
  function send(id: ProcessId, data: ProcessFunctionMessage | any): void;
  function receive(callback: (message: ProcessFunctionMessage) => any): void;
}
