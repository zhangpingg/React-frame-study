import { Device } from 'interface/layout/index.interface';
import { MenuChild } from 'interface/layout/menu.interface';
import { Role } from './login';

export type Locale = 'zh_CN' | 'en_US';

export interface UserState {
  username: string;
  /** 菜单列表 */
  menuList: MenuChild[];
  /** 记录 */
  logged: boolean;        
  /** 角色 */
  role: Role;
  /** 设备 */
  device: Device;
  /** 菜单是否收缩 */
  collapsed: boolean;
  /** 注意数量 */
  noticeCount: number;
  /** 地方（用户语言） */
  locale: Locale;
  /** 是否第一次预览网站 */
  newUser: boolean;
}
