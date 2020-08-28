const { mergeAll } = require("ramda");
const rolePermissions = require("./mocks/role-permissions.json");
const funcList = require("./mocks/funcList");
const dists = require("./mocks/dists.json");

const fs = require("fs");

const instantCounts = {
  normal: 12442,
  total: 12442,
  repair: 1002,
  repairing: 234,
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let data = {
  "light-groups": [],
  "instant-info": [],
  "func-list": [],
  "district-info": [],
  "role-menus": [],
  roles: [],
  permissions: [],
  users: [],
};

for (let i = 0; i < 25; i++) {
  data["light-groups"].push({
    id: i + 1,
    lightGroupId: i,
    lightGroupName: `A大門西側 ${(i + 1).toString().padStart(3, "0")}`,
    lights: Array.from({ length: 15 }).map((_, idx) => ({
      id: idx,
      watt: `${idx * 100}w`,
      lightId: "66029001556",
      location: "大園區大原里",
      address: "桃園市桃園區縣府路1號",
      gps: "22.625716, 120.291911",
    })),
  });

  data.users.push({
    id: i + 1,
    roleId: randomNumber(1, 3),
    account: `cc029001556-${i + 1}`,
    name: "Chonny",
    status: 1,
  });

  data.permissions.push({
    id: i + 1,
    count: i + 1,
    name: "路燈管理人員",
    remark: "A區人員使用",
    distId: dists,
    accounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    permissions: funcList.map((x) => ({
      ...x,
      children: x.children.map((c) => ({
        ...c,
        ...mergeAll(
          c.action
            .filter(Boolean)
            .map((a) => ({ [a.value]: randomNumber(0, 2) }))
        ),
      })),
    })),
  });
}

data["role-menus"] = rolePermissions;

data["district-info"] = [
  {
    id: 1,
    name: "新屋區",
    lat: 24.98034976686558,
    lng: 121.0784216580762,
    total: 40665,
    count: 20665,
  },
  {
    id: 2,
    name: "觀音區",
    lat: 25.032270111023127,
    lng: 121.11926033449413,
    total: 40665,
    count: 20665,
  },
  {
    id: 3,
    name: "大園區",
    lat: 25.045179015871998,
    lng: 121.18466331911327,
    total: 40665,
    count: 20665,
  },
  {
    id: 4,
    name: "蘆竹區",
    lat: 25.069796656637116,
    lng: 121.28987107435933,
    total: 40665,
    count: 20665,
  },
  {
    id: 5,
    name: "龜山區",
    lat: 25.024765460454176,
    lng: 121.35827682016588,
    total: 40665,
    count: 20665,
  },
  {
    id: 6,
    name: "桃園區",
    lat: 25.00509593389275,
    lng: 121.29673752943745,
    total: 40665,
    count: 20665,
  },
  {
    id: 7,
    name: "八德區",
    lat: 24.95277509308884,
    lng: 121.28542854738475,
    total: 40665,
    count: 20665,
  },
  {
    id: 8,
    name: "中壢區",
    lat: 24.980776515696014,
    lng: 121.19579895855873,
    total: 40665,
    count: 20665,
  },
  {
    id: 9,
    name: "平鎮區",
    lat: 24.924124215708808,
    lng: 121.2050686729142,
    total: 40665,
    count: 20665,
  },
  {
    id: 10,
    name: "楊梅區",
    lat: 24.925876694493205,
    lng: 121.1366148648633,
    total: 40665,
    count: 20665,
  },
  {
    id: 11,
    name: "龍潭區",
    lat: 24.858671383923525,
    lng: 121.20410215392224,
    total: 40665,
    count: 20665,
  },
  {
    id: 12,
    name: "大溪區",
    lat: 24.879630167354033,
    lng: 121.28659790877941,
    total: 40665,
    count: 20665,
  },
];

data["func-list"] = [...funcList];

data.roles = [
  {
    id: 1,
    name: "路燈管理人員",
  },
  {
    id: 2,
    name: "管理員",
  },
];

data["instant-info"] = [
  {
    id: 1,
    area: "北",
    districts: [
      {
        id: 1001,
        name: "桃園區",
        ...instantCounts,
      },
      {
        id: 1002,
        name: "龜山區",
        ...instantCounts,
      },
      {
        id: 1003,
        name: "八德區",
        ...instantCounts,
      },
      {
        id: 1004,
        name: "大溪區",
        ...instantCounts,
      },
      {
        id: 1005,
        name: "蘆竹區",
        ...instantCounts,
      },
      {
        id: 1006,
        name: "大園區",
        ...instantCounts,
      },
    ],
  },
  {
    id: 2,
    area: "南",
    districts: [
      {
        id: 1007,
        name: "中壢區",
        ...instantCounts,
      },
      {
        id: 1008,
        name: "龍潭區",
        ...instantCounts,
      },
      {
        id: 1009,
        name: "平鎮區",
        ...instantCounts,
      },
      {
        id: 1010,
        name: "楊梅區",
        ...instantCounts,
      },
      {
        id: 1011,
        name: "新屋區",
        ...instantCounts,
      },
      {
        id: 1012,
        name: "觀音區",
        ...instantCounts,
      },
    ],
  },
  {
    id: 3,
    area: "原住民區",
    districts: [
      {
        id: 1013,
        name: "新屋",
        ...instantCounts,
      },
    ],
  },
];

fs.writeFileSync("db.json", JSON.stringify(data), null, 2);

return data;
