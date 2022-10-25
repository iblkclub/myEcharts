// 柱状图1
(function () {
  const myChart = echarts.init(document.querySelector('.bar .chart'))
  const option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "line" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        // x轴中更换data数据
        data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: "false"
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        // series 更换数据
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };
  myChart.setOption(option)
  // 让图表进行适配
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();

// 柱状图2
(function () {
  // 初识化echarts对象
  const myChart = echarts.init(document.querySelector('.bar2 .chart'))

  // 声明颜色数组
  const myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 配置
  const option = {
    grid: {
      top: "10%",
      left: '22%',
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        //不显示y轴线条
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff"
        }
      },
      {
        type: 'category',
        inverse: true,
        data: [702, 350, 610, 793, 664],
        //不显示y轴线条
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            // 2. 给 itemStyle  里面的color 属性设置一个 返回值函数
            color: function (params) {
              // console.log(params);
              return myColor[params.dataIndex]
            }
          }
        },
        name: "框",
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        yAxisIndex: 0,
        // 图形上的文本标签
        label: {
          show: true,
          // 图形内显示
          position: "inside",
          // 文字的显示格式
          formatter: "{c}%"
        }
      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        },
        data: [100, 100, 100, 100, 100]
      }
    ]
  };
  myChart.setOption(option)
  // 让图表进行适配
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();

// 折线图1 人员变化
(function () {
  // 后台请求过来的数据
  const yearData = [
    {
      year: '2020',  // 年份
      data: [  // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: '2021',  // 年份 
      data: [  // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  const myChart = echarts.init(document.querySelector('.line .chart'))
  const option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: '10%' // 距离右边10%
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,// 显示边框
      borderColor: '#012f4a',// 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      boundaryGap: false  // 去除轴内间距
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false  // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd' // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        data: yearData[0].data[0],
        type: 'line',
        // 折线修饰为圆滑
        smooth: true,
      },
      {
        name: '新增游客',
        data: yearData[0].data[1],
        type: 'line',
        smooth: true,
      },

    ]
  };
  myChart.setOption(option)
  // 让图表进行适配
  window.addEventListener('resize', function () {
    myChart.resize()
  })

  // 点击切换tab栏
  $('.panel h2').on('click', 'a', function () {
    // alert('1')
    // console.log($(this).index());
    // 根据 a索引号找到对应年份 yearData的数据
    // console.log(yearData[$(this).index()])
    const obj = yearData[$(this).index()]
    option.series[0].data = obj.data[0]
    option.series[1].data = obj.data[1]
    // 重新渲染
    myChart.setOption(option)
  })
})();

// 折线图2 播放量
(function () {
  const myChart = echarts.init(document.querySelector('.line2 .chart'))
  const option = {

    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      data: ['邮件营销', '联盟广告'],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        // x轴更换数据
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
            // fontSize: 9
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        areaStyle: {},
        // series  第一个对象data数据
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
        //第一条 线是圆滑
        smooth: true,
        // 单独修改线的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域
        areaStyle: {
          // 渐变色，只需要复制即可
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点 小圆点
        symbol: "circle",
        symbolSize: 8,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
      },

      {
        name: '联盟广告',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // series  第二个对象data数据
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
      }

    ]
  };
  // 把设置给echarts对象
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 饼状图1
(function () {
  const myChart = echarts.init(document.querySelector('.pie .chart'))
  const option = {
    color: [
      "#065aab",
      "#066eab",
      "#0682ab",
      "#0696ab",
      "#06a0ab",
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      bottom: "0%",
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['50%', '40%'],
        avoidLabelOverlap: false,
        // 不显示标签文字
        label: { show: false },
        // 不显示连接线
        labelLine: { show: false },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
      }
    ]
  };

  myChart.setOption(option)
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 饼形图2
(function () {
  const myChart = echarts.init(document.querySelector('.pie2 .chart'))
  const option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: "0%",
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },

    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: ["10%", "70%"],
        center: ['50%', '50%'],
        roseType: 'radius',
        // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
        label: {
          fontSize: 10
        },
        // 引导线调整
        labelLine: {
          // 连接扇形图线长
          length: 6,
          // 连接文字线长
          length2: 8
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  };

  myChart.setOption(option)
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 模拟航线模块
// 引入了myMap.js文件

// (function () {
//   const myChart = echarts.init(document.querySelector('.map .chart'))
//   const option = {
//     backgroundColor: "#000",
//     legend: {
//       orient: "vertical",
//       top: "bottom",
//       left: "right",
//       data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
//       textStyle: {
//         color: "#fff",
//       },
//       selectedMode: "multiple",
//     },
//     geo: {
//       map: "china",
//       label: {
//         emphasis: {
//           show: true,
//           color: "#fff",
//         },
//       },
//       roam: true,
//       itemStyle: {
//         normal: {
//           areaColor: "#00186E",
//           borderColor: "#195BB9",
//           borderWidth: 1,
//         },
//         emphasis: {
//           areaColor: "#2B91B7",
//         },
//       },
//     },
//     series: series,
//   };
//   myChart.setOption(option)

// })();