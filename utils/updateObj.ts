import objectPath from "object-path";

export const updateObject = (obj: object, path: string, updatedValue: any) => {
  objectPath.set(obj, path, updatedValue);

  return obj;
};
export const insertObj = (
  obj: object,
  path: string,
  newObj: any,
  index_value: number
) => {
  objectPath.insert(obj, path, newObj, index_value || 0);
  return obj;
};
export const insertSkillObj = (
  obj: object,
  path: string,
  newObj: any,
  index_value: number
) => {
  objectPath.insert(obj, path, newObj, (obj as any)[path]?.length - 1);
  return obj;
};
export const deleteObj = (obj: object, path: string) => {
  objectPath.del(obj, path);
  return obj;
};
export const getObj = (obj: object, path: string) => {
  objectPath.get(obj, path);
  return obj;
};

export default {
  updateObject,
  insertObj,
  insertSkillObj,
  deleteObj,
  getObj,
};
