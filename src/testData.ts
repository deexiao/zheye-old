/*
 * @Author: Dee.Xiao
 * @Date: 2022-09-06 01:16:36
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-06 01:18:30
 * @Description: 
 */
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar: "https://avatars.githubusercontent.com/u/9313435?v=4",
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar: "https://avatars.githubusercontent.com/u/9313435?v=4",
  },
  {
    id: 3,
    title: "test3的专栏",
    description: "这是的test3专栏，有一段非常有意思的简介，可以更新一下欧",
  },
  {
    id: 4,
    title: "test4的专栏",
    description: "这是的test4专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar: "https://avatars.githubusercontent.com/u/9313435?v=4",
  },
];
