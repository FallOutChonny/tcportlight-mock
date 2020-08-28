/* eslint no-sparse-arrays:0 */
const { values } = require('ramda')

const acts = {
  CREATE: { value: 'create', name: '新增' },
  READ: { value: 'read', name: '查看' },
  UPDATE: { value: 'update', name: '修改' },
  DELETE: { value: 'delete', name: '刪除' },
}

const funcList = [
  {
    id: 1,
    title: 'Dashboard',
    children: [
      {
        id: 101,
        title: 'Dashboard',
        name: 'dashboard',
        action: [, acts.UPDATE, acts.READ, undefined],
      },
    ],
  },
  {
    id: 2,
    title: '路燈管理',
    children: [
      {
        id: 102,
        title: '路燈資料管理',
        name: 'light',
        action: values(acts),
      },
      {
        id: 103,
        title: '路燈群組管理',
        name: 'lightGroup',
        action: values(acts),
      },
      {
        id: 104,
        title: '路燈亮度排程',
        name: 'lightSchedule',
        action: values(acts),
      },
    ],
  },
  {
    id: 3,
    title: '設備維護管理',
    children: [
      {
        id: 105,
        title: '維修查詢',
        name: 'repairInquiry',
        action: [, , acts.READ, undefined],
      },
      {
        id: 106,
        title: '報修申請',
        name: 'newRepair',
        action: values(acts),
      },
      {
        id: 107,
        title: '報修清單',
        name: 'repairList',
        action: values(acts),
      },
      {
        id: 108,
        title: '維修清單',
        name: 'dispatchedRepairList',
        action: [, , acts.READ, undefined],
      },
      {
        id: 109,
        title: '完工清單',
        name: 'closedRepairList',
        action: [, , acts.READ, undefined],
      },
    ],
  },
  {
    id: 4,
    title: '報表管理',
    children: [
      {
        id: 110,
        title: '路燈資料統計',
        name: 'lightReport',
        action: values(acts),
      },
      {
        id: 111,
        title: '報修狀態統計',
        name: 'repairStatusReport',
        action: values(acts),
      },
      {
        id: 112,
        title: '報修案件統計',
        name: 'repiarReport',
        action: values(acts),
      },
      {
        id: 113,
        title: '維修派工統計',
        name: 'dispatchRepairReport',
        action: values(acts),
      },
    ],
  },
  {
    id: 5,
    title: '系統管理',
    children: [
      {
        id: 114,
        title: '權限管理',
        name: 'permission',
        action: values(acts),
      },
    ],
  },
]

module.exports = funcList
