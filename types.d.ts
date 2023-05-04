declare module "sever" {
  type ProcessId = number;
  type ProcessFunction = () => any;

  function spawn(fn: ProcessFunction): ProcessId;
  function alive(id: ProcessId): boolean;
  function me(): ProcessId;
  function send(id: ProcessId, message: any): void;
}
