declare module "dorita980" {
  function Cloud(...args: any): any;

  function Local(
    username: string,
    password: string,
    ip: string,
    version?: number,
    interval?: number
  ): any;

  function getRobotIP(...args: any): any;

  function discovery(...args: any): any;

  function getRobotPublicInfo(...args: any): any;
}
