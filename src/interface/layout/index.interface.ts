/** 用户设备 */
enum DeviceList {
  /** 手机 */
  MOBILE = 'MOBILE',
  /** 电脑 */
  DESKTOP = 'DESKTOP'
}

export type Device = keyof typeof DeviceList;
