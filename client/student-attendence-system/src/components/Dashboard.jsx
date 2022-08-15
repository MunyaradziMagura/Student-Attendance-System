import React, { useState, useEffect } from 'react';
import sty from '../styles/Dashboard.module.css'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';
export default function Dashboard() {
    //Using Hook for the direct to page 
    // useEffect(() => {
    //     var dateList = document.getElementById("dateList")
    //     var prev = document.getElementById("prev")
    //     var next = document.getElementById("next")
    //     var h4 = document.getElementsByTagName("h4")[0]
    //     var iNow = 0
    //     prev.onclick = function () {
    //         iNow--
    //         calender(iNow)
    //     }
    //     next.onclick = function () {
    //         iNow++
    //         calender(iNow)
    //     }
    //     calender(iNow)
    //     function calender(n) {
    //         var date = new Date
    //         var nowDate = date.getDate()
    //         date.setMonth(date.getMonth() + n, 1)
    //         var year = date.getFullYear()
    //         var month = date.getMonth() + 1

    //         h4.innerHTML = year + "/" + month
    //         var week = date.getDay()
    //         var nowMonth = date.getMonth()
    //         date.setMonth(nowMonth + 1, 0)
    //         var allDays = date.getDate()
    //         var str = ""
    //         for (var i = 0; i < week; i++) {
    //             str += "<li></li>"
    //         }
    //         for (var j = 1; j <= allDays; j++) {
    //             if (n > 0) {
    //                 if ((week + j) % 7 === 0 || (week + j) % 7 === 1) {
    //                     str += `<li class='${sty.sun}'>${j}</li>`
    //                 } else {
    //                     str += "<li>" + j + "</li>"
    //                 }
    //             } else if (n < 0) {
    //                 str += `<li class='${sty.ccc}'>` + j + "</li>"
    //             } else {
    //                 if (j < nowDate) {
    //                     str += `<li class='${sty.ccc}'>` + j + "</li>"
    //                 } else if (j === nowDate) {
    //                     str += `<li class='${sty.red}'>` + j + "</li>"
    //                 } else if ((week + j) % 7 === 0 || (week + j) % 7 === 1) {
    //                     str += `<li class='${sty.ccc}'>` + j + "</li>"
    //                 } else {
    //                     str += "<li>" + j + "</li>"
    //                 }
    //             }
    //         }
    //         dateList.innerHTML = str
    //     }
    // }, [])
    var exampleData = {firstName: "Zackary", lastName: "Anderson"}
    const[value, onChange] = useState(new Date());

    return (
        <div className={sty.box}>

            <div className={sty.left}>
                <h2 style={{textAlign: 'center'}}>
                    Welcome {exampleData.firstName},
                </h2>
                <div className={sty.emailBox}>

                </div>
                <div className={sty.navBox}>
                    <div className={sty.navItem} >
                        Your Courses
                    </div>
                    <div className={sty.navItem}>
                        Student Attendance
                    </div>
                    <div className={sty.navItem}>
                        Student Search
                    </div>
                </div>
                {/* <div className={sty.calendar} id='calendar'>
                    <div className={sty.calendarTop}>
                        <div id='prev' className={sty.prev}>
                            &lt;
                        </div>
                        <h4>2019年10月</h4>
                        <div id='next' className={sty.next}>
                            &gt;
                        </div>
                    </div>
                    <ul className={sty.week}>
                        <li>Su</li>
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                        <li>Sa</li>
                    </ul>
                    <ul className={sty.dateList} id="dateList"></ul>
                </div> */}

                <div>
                    <Calendar onChange={onChange} value={value}/>
                </div>
                <div className={sty.btn}>
                    Log Out
                </div>
            </div>

            <div className={sty.right}>
                <div className={sty.rightTop}>
                    <h1>Staff Dashboard</h1>
                    <div>
                        Dashboard
                    </div>
                </div>

                <div className={sty.rightDesc}>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    Graph Graph Graph Graph Graph Graph Graph Graph Graph  
                </div>


                <div className={sty.rightTable}>
                    <h3>Todays Classes</h3>

                    <table border="0">
                        <thead>
                            <tr>
                                <th>Class Name</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Systems Desgin Lecture</td>
                                <td>12:00pm - 2:00pm</td>
                                <td>17/05/22</td>
                                <td>
                                    <div className={sty.actionBtn}>
                                        Allow Access
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Systems Desgin Lecture</td>
                                <td>12:00pm - 2:00pm</td>
                                <td>17/05/22</td>
                                <td>
                                    <div className={sty.actionBtn}>
                                        Allow Access
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Systems Desgin Lecture</td>
                                <td>12:00pm - 2:00pm</td>
                                <td>17/05/22</td>
                                <td>
                                    <div className={sty.actionBtn}>
                                        Allow Access
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Systems Desgin Lecture</td>
                                <td>12:00pm - 2:00pm</td>
                                <td>17/05/22</td>
                                <td>
                                    <div className={sty.actionBtn}>
                                        Allow Access
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Systems Desgin Lecture</td>
                                <td>12:00pm - 2:00pm</td>
                                <td>17/05/22</td>
                                <td>
                                    <div className={sty.actionBtn}>
                                        Allow Access
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>


            </div>



        </div>
    );

}