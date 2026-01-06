//ReactHooks使用规则
//
import { use } from "react"

//使用规则
//1.只能在组件中或者其他自定义Hook函数中调用
//2.只能在组件的顶层调用，不能嵌套在if，for，其他函数中

//错误用法1：组件外使用
//错误用法2：if for 组件内部函数

import {useState} from 'react'

//useState 会报错

function App(){
  // if(Math.random()>0.5)
  // {
  //   useState()//会报错
  // }
  return(
    <div>
      This is APP
    </div>
  )
}

export default App