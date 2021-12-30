export function getGlobalState() {
  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP';
  const collapsed = device !== 'DESKTOP';

  return {
    device,         // 设备
    collapsed,      // 菜单是否收缩（如果是手机端则为: true）
  } as const;
}
