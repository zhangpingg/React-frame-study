export default class Store {
  get(key: string) {
    const _data = JSON.parse(localStorage.getItem(key)!);
    return _data ? _data : null;
  }
  set(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify({ key, data }));
  }
}