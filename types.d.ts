declare module "sever-membrane" {
  type ProcessId = number;
  type ProcessFunctionMessage = { type: string, data?: any };
  type ProcessFunction = (message: ProcessFunctionMessage) => any;

  function spawn(fn: ProcessFunction): ProcessId;
  function alive(id: ProcessId): boolean;
  function me(): ProcessId;
  function send(id: ProcessId, message: ProcessFunctionMessage): void;
  function receive(callback: ProcessFunction): void;
}
